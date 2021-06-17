import React from 'react'

import { Label, TextArea } from './styles'

type Props = {
  label: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

const FormTextArea = ({ label, value, onChange }: Props): JSX.Element => {
  return (
    <>
      <Label>{label}</Label>
      <TextArea value={value} title={label} onChange={onChange} />
    </>
  )
}

export { FormTextArea }
