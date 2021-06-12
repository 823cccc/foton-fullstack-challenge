import { User } from './User'

interface AuthenticationData {
  user: Partial<User>
  token: string
}

export { AuthenticationData }
