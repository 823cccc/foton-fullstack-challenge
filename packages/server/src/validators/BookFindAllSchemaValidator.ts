import { checkSchema } from 'express-validator'

const BookFindAllSchemaValidator = checkSchema({
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

export { BookFindAllSchemaValidator }
