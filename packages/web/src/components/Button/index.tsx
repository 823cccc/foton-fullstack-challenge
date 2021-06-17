import React from 'react'

import { Button } from './styles'

type Props = {
  label: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonComponent = ({ label, onClick }: Props): JSX.Element => {
  return <Button onClick={onClick}>{label}</Button>
}

export { ButtonComponent as Button }
