import React from 'react'

import { Image, ImageContainer, LoadingImage } from './styles'

type Props = {
  url?: string
}

const BookDetailsImage = ({ url }: Props): JSX.Element => {
  return (
    <ImageContainer>
      {url ? <Image url={url} /> : <LoadingImage />}
    </ImageContainer>
  )
}

export { BookDetailsImage }
