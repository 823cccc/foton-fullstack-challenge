import { checkSchema } from 'express-validator'

const BookCreationSchemaValidator = checkSchema({
  name: {
    in: 'body',
    isString: true,
    isLength: { options: { max: 120 } },
  },
  author: {
    in: 'body',
    isString: true,
    isLength: { options: { max: 120 } },
  },
  description: {
    in: 'body',
    isString: true,
  },
  coverUrl: {
    in: 'body',
    isURL: true,
  },
  readUrl: {
    in: 'body',
    isURL: true,
  },
})

export { BookCreationSchemaValidator }
