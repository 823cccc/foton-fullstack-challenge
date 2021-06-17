import { checkSchema } from 'express-validator'

const BookSearchSchemaValidator = checkSchema({
  query: {
    in: 'query',
    isString: true,
  },
  take: {
    in: 'query',
    isNumeric: true,
    optional: true,
  },
  skip: {
    in: 'query',
    isNumeric: true,
    optional: true,
  },
})

export { BookSearchSchemaValidator }
