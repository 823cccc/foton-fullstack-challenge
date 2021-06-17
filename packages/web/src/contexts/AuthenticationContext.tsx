import {
  AuthenticationData,
  UserWithoutPassword,
} from '@foton-challenge/common'
import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

import { AuthenticationService } from '../services'

type AuthenticationContextData = {
  authenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<void>
} & Partial<AuthenticationData>

type AuthenticationProviderProps = {
  children?: React.ReactNode
}

const AuthenticationContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData,
)

const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps): JSX.Element => {
  const [user, setUser] = useState<UserWithoutPassword | undefined>(
    (() => {
      const user = localStorage.getItem('authentication:user')

      if (!user) {
        return undefined
      }

      return JSON.parse(user) as UserWithoutPassword
    })(),
  )

  const [token, setToken] = useState<string | undefined>(
    (() => {
      const token = localStorage.getItem('authentication:token')

      if (!token) {
        return undefined
      }

      AuthenticationService.setBearerToken(token)

      return token
    })(),
  )

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const { user, token } = await AuthenticationService.login(email, password)

      localStorage.setItem('authentication:user', JSON.stringify(user))
      localStorage.setItem('authentication:token', token)

      setUser(user)
      setToken(token)

      AuthenticationService.setBearerToken(token)

      toast.success('Login successfully.')
    } catch {
      toast.error('Incorrect username and/or password.')
    }
  }

  const logout = () => {
    AuthenticationService.logout()

    localStorage.removeItem('authentication:user')
    localStorage.removeItem('authentication:token')

    setUser(undefined)
    setToken(undefined)
  }

  const register = async (
    name: string,
    email: string,
    password: string,
  ): Promise<void> => {
    try {
      await AuthenticationService.register(name, email, password)

      toast.success('Account created successfully.')
    } catch {
      toast.error('Email already in use.')
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{ authenticated: !!user, user, token, login, logout, register }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export { AuthenticationContext, AuthenticationProvider }
