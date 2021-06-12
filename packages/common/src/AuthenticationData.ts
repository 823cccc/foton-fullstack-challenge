import { UserWithoutPassword } from './User'

interface AuthenticationData {
  user: UserWithoutPassword
  token: string
}

export { AuthenticationData }
