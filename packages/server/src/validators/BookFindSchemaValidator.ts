import { checkSchema } from 'express-validator'

const BookFindSchemaValidator = checkSchema({
  id: {
    in: 'params',
    isUUID: true,
  },
})

export { BookFindSchemaValidator }
