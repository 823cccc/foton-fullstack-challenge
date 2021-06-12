import { checkSchema } from 'express-validator'

const BookSearchSchemaValidator = checkSchema({
  query: {
    in: 'query',
    isString: true,
  },
})

export { BookSearchSchemaValidator }
