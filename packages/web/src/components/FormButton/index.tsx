import React from 'react'

import { Button } from './styles'

type Props = {
  label: string
}

const FormButton = ({ label }: Props): JSX.Element => {
  return (
    <>
      <Button type="submit" title={label} value={label} />
    </>
  )
}

export { FormButton }
