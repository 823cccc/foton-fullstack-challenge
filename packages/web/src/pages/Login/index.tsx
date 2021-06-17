import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  FormButton,
  FormHelper,
  FormInput,
  Heading,
  NavigationBar,
} from '../../components'
import { AuthenticationContext } from '../../contexts'
import { Content } from '../../styles'

const Login = (): JSX.Element => {
  const { login } = useContext(AuthenticationContext)
  const history = useHistory()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    login(email, password)
      .then(() => history.push('/profile'))
      .catch(() => {
        setEmail('')
        setPassword('')
      })
  }

  return (
    <>
      <Content>
        <Heading>Login to your account</Heading>
        <form onSubmit={onSubmit}>
          <FormInput
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <FormInput
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            password
          />
          <FormButton label="Login" />
        </form>
        <FormHelper
          text="Don't have an account? Create yours now."
          onClick={() => history.push('/register')}
        />
      </Content>
      <NavigationBar />
    </>
  )
}

export { Login }
