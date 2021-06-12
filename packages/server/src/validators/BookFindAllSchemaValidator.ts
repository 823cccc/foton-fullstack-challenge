import { checkSchema } from 'express-validator'

const BookFindAllSchemaValidator = checkSchema({
  take: {
    in: 'params',
    isNumeric: true,
    optional: true,
  },
  skip: {
    in: 'params',
    isNumeric: true,
    optional: true,
  },
})

export { BookFindAllSchemaValidator }
