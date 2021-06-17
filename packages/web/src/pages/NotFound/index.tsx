import React from 'react'

import { BookDetailsHeader, Heading } from '../../components'
import { Content } from '../../styles'

const NotFound = (): JSX.Element => {
  return (
    <>
      <BookDetailsHeader />
      <Content>
        <Heading>Not Found</Heading>
        <p>{"We couldn't find the resource you requested."}</p>
      </Content>
    </>
  )
}

export { NotFound }
