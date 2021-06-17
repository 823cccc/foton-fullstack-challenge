import React from 'react'

import { Email, Name } from './styles'

type Props = {
  name: string
  email: string
}

const ProfileDetails = ({ name, email }: Props): JSX.Element => {
  return (
    <>
      <Name>{name}</Name>
      <Email>{email}</Email>
    </>
  )
}

export { ProfileDetails }
