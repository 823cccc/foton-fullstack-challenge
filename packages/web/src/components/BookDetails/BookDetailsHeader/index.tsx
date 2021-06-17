import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  BigWavyCircle,
  BlueCircle,
  Header,
  HeaderContent,
  Link,
  OutlinedBlueCircle,
  RedCircle,
  SmallWavyCircle,
} from './styles'

const BookDetailsHeader = (): JSX.Element => {
  const history = useHistory()

  const handleClick = () => history.goBack()

  return (
    <Header>
      <HeaderContent>
        <Link onClick={handleClick}>
          <span className="material-icons">arrow_back</span>
        </Link>
      </HeaderContent>

      <BigWavyCircle />
      <BlueCircle />
      <OutlinedBlueCircle />
      <RedCircle />
      <SmallWavyCircle />
    </Header>
  )
}

export { BookDetailsHeader }
