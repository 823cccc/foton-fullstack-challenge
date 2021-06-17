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

const Register = (): JSX.Element => {
  const history = useHistory()
  const { register } = useContext(AuthenticationContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    register(name, email, password)
      .then(() => history.push('/profile'))
      .catch(() => {
        setEmail('')
        setPassword('')
      })
  }

  return (
    <>
      <Content>
        <Heading>Create a new account</Heading>

        <form onSubmit={onSubmit}>
          <FormInput
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
          <FormButton label="Register" />
        </form>
        <FormHelper
          text="Already have an account? Login now."
          onClick={() => history.push('/login')}
        />
      </Content>
      <NavigationBar />
    </>
  )
}

export { Register }
