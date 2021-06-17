import React, { useContext } from 'react'

import { AuthenticationContext } from '../../contexts'
import { Text, Wrapper } from './styles'

const Greeting = (): JSX.Element => {
  const { user } = useContext(AuthenticationContext)

  const vocative = user ? user.name : 'Visitor'

  return (
    <Wrapper>
      <Text>
        Hi, <b>{vocative}</b> 👋
      </Text>
    </Wrapper>
  )
}

export { Greeting }
