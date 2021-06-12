interface User {
  id: string
  name: string
  email: string
  password: string
}

type UserWithoutPassword = Omit<User, 'password'>

const sanitizeUser = (user: User): UserWithoutPassword => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...omitted } = user

  return omitted
}

export { User, UserWithoutPassword, sanitizeUser }
