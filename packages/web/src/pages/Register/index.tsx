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
  name: string
  email: string
  password: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const Register = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema) })

  const history = useHistory()
  const { register: registerUser } = useContext(AuthenticationContext)

  const onSubmit: SubmitHandler<FormInputs> = ({ name, email, password }) => {
    registerUser(name, email, password)
      .then(() => history.push('/profile'))
      .catch(() => location.reload())
  }

  return (
    <>
      <Content>
        <Heading>Create a new account</Heading>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input title="Name" {...register('name')} />
          <p>{errors.name?.message}</p>

          <label>Email</label>
          <input title="Email" {...register('email')} />
          <p>{errors.email?.message}</p>

          <label>Password</label>
          <input title="Password" type="password" {...register('password')} />
          <p>{errors.password?.message}</p>

          <FormButton label="Register" />
        </Form>
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
