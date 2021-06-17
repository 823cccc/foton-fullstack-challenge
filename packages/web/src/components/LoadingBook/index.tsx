import React from 'react'

import { LoadingAuthor, LoadingImage, LoadingTitle, Wrapper } from './styles'

const LoadingBook = (): JSX.Element => {
  return (
    <Wrapper>
      <LoadingImage />
      <LoadingTitle />
      <LoadingAuthor />
    </Wrapper>
  )
}

export { LoadingBook }
