import React from 'react'

import { Input, Label } from './styles'

type Props = {
  label: string
  value?: string
  password?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const FormInput = ({
  label,
  value,
  password,
  onChange,
}: Props): JSX.Element => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        type={password ? 'password' : 'text'}
        value={value}
        title={label}
        onChange={onChange}
      />
    </>
  )
}

export { FormInput }
