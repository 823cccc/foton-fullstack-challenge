import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { Inject, Service } from 'typedi'
import { createConnection } from 'typeorm'

import { ApiError } from './errors'
import routes from './routes'

@Service()
class App {
  @Inject('NODE_ENV')
  private environment!: string

  @Inject('JAWSDB_MARIA_URL')
  private databaseUrl!: string

  private express = express()

  public bootstrap = async (port: number | string): Promise<void> => {
    await this.database()

    this.middlewares()
    this.routes()
    this.errorHandler()

    this.express.listen(port)
  }

  private database = async (): Promise<void> => {
    const production = this.environment == 'production'

    await createConnection({
      type: 'mariadb',
      url: this.databaseUrl,
      entities: production ? ['dist/models/**/*.js'] : ['src/models/**/*.ts'],
      logging: ['error', 'warn', 'info', 'schema'],
    })
  }

  private middlewares = () => {
    if (process.env['NODE_ENV'] == 'production') {
      this.express.set('trust proxy', 1)
    }

    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(helmet())
    this.express.use(
      morgan(':method :url :status :res[content-length] - :response-time ms'),
    )
  }

  private routes = (): void => {
    this.express.use(routes())
    this.express.use('*', () => {
      throw new ApiError('Not Found', 404)
    })
  }

  private errorHandler = (): void => {
    this.express.use(
      (
        error: Error,
        _req: express.Request,
        res: express.Response,
        /*
         * Express requires NextFunction parameter to be present otherwise the
         * middleware response won't be piped through JSON BodyParser
         */

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _: express.NextFunction,
      ) => {
        let statusCode = 500
        let message = 'Internal Server Error'

        if (error instanceof ApiError) {
          statusCode = error.statusCode
          message = error.message
        } else console.error(JSON.stringify(error))

        return res.status(statusCode).json({ status: 'error', message })
      },
    )
  }
}

export { App }
