import 'express-async-errors'
import 'reflect-metadata'

import dotenv from 'dotenv'
import Container from 'typedi'

import { App } from './app'

dotenv.config()

Object.entries(process.env).forEach(([key, value]) => Container.set(key, value))

const app = Container.get(App)
app.bootstrap(process.env.PORT || 3000)
