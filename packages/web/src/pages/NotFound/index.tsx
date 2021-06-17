import React from 'react'

import { BookDetailsHeader } from '../../components'
import { Content } from '../../styles'

const NotFound = (): JSX.Element => {
  return (
    <>
      <BookDetailsHeader />
      <Content>Not found :/</Content>
    </>
  )
}

export { NotFound }
