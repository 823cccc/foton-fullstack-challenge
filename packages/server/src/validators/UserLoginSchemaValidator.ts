import { checkSchema } from 'express-validator'

const UserLoginSchemaValidator = checkSchema({
  email: {
    in: 'body',
    isEmail: true,
    isLength: { options: { max: 320 } },
  },
  password: {
    in: 'body',
  },
})

export { UserLoginSchemaValidator }
