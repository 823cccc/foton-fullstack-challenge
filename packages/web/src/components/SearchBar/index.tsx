import React from 'react'
import { useHistory } from 'react-router-dom'

import { Icon, Input, Link, Wrapper } from './styles'

type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  setInputRef?: React.Dispatch<
    React.SetStateAction<HTMLInputElement | null | undefined>
  >
  searchPage?: boolean | undefined
  value?: string | number | readonly string[]
}

const SearchBar = ({
  onChange,
  onFocus,
  setInputRef,
  searchPage,
  value,
}: Props): JSX.Element => {
  const history = useHistory()

  const handleClick = () =>
    searchPage ? history.goBack() : history.push('/search')

  return (
    <Wrapper>
      <Link onClick={handleClick}>
        <Icon className="material-icons">
          {searchPage ? 'arrow_back' : 'search'}
        </Icon>
      </Link>

      <Input
        ref={setInputRef ? (input) => setInputRef(input) : undefined}
        placeholder="Search book"
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
    </Wrapper>
  )
}

export { SearchBar }
