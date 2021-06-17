import {
  AuthenticationData,
  UserWithoutPassword,
} from '@foton-challenge/common'

import ApiClient from './ApiClient'

const login = async (
  email: string,
  password: string,
): Promise<AuthenticationData> => {
  const response = await ApiClient.post<AuthenticationData>('/login', {
    email: email,
    password: password,
  })

  return response.data
}

const logout = (): void => {
  ApiClient.defaults.headers['Authorization'] = undefined
}

const register = async (
  name: string,
  email: string,
  password: string,
): Promise<UserWithoutPassword> => {
  const response = await ApiClient.post<UserWithoutPassword>('/register', {
    name: name,
    email: email,
    password: password,
  })

  return response.data
}

const setBearerToken = (token: string): void => {
  ApiClient.defaults.headers['Authorization'] = `Bearer ${token}`
}

export { login, logout, register, setBearerToken }
