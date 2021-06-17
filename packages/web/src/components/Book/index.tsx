import { Book } from '@foton-challenge/common'
import React from 'react'

import { Link } from '../../styles'
import { Author, Cover, Title, Wrapper } from './styles'

type Props = Pick<Book, 'id' | 'name' | 'author' | 'coverUrl'>

const BookComponent = ({ id, name, author, coverUrl }: Props): JSX.Element => {
  return (
    <Link to={'/books/' + id}>
      <Wrapper>
        <Cover url={coverUrl} />
        <Title>{name}</Title>
        <Author>{author}</Author>
      </Wrapper>
    </Link>
  )
}

export { BookComponent as Book }
