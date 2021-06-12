import { checkSchema } from 'express-validator'

const UserRegisterSchemaValidator = checkSchema({
  name: {
    in: 'body',
    isString: true,
    isLength: { options: { max: 100 } },
  },
  email: {
    in: 'body',
    isEmail: true,
    isLength: { options: { max: 320 } },
  },
  password: {
    in: 'body',
  },
})

export { UserRegisterSchemaValidator }
