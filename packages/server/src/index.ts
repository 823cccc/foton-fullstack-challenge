import 'express-async-errors'
import 'reflect-metadata'

import dotenv from 'dotenv'
import Container from 'typedi'

import { App } from './app'

dotenv.config()

if (
  !['NODE_ENV', 'JWT_SECRET', 'JAWSDB_MARIA_URL'].every(
    (env) => !!process.env[env],
  )
) {
  console.error('Missing required environment variables.')
  process.exit()
}

Object.entries(process.env).forEach(([key, value]) => Container.set(key, value))

const app = Container.get(App)
app.bootstrap(process.env.PORT || 3000)
