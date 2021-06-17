import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import {
  Form,
  FormButton,
  FormHelper,
  Heading,
  NavigationBar,
} from '../../components'
import { AuthenticationContext } from '../../contexts'
import { Content } from '../../styles'

type FormInputs = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema) })

  const { login } = useContext(AuthenticationContext)
  const history = useHistory()

  const onSubmit: SubmitHandler<FormInputs> = ({ email, password }) =>
    login(email, password)
      .then(() => history.push('/profile'))
      .catch(() => location.reload())

  return (
    <>
      <Content>
        <Heading>Login to your account</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input type="text" title="Email" {...register('email')} />
          <p>{errors.email?.message}</p>

          <label>Password</label>
          <input type="password" title="Password" {...register('password')} />
          <p>{errors.password?.message}</p>

          <FormButton label="Login" />
        </Form>
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
