import React from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from '../../styles'
import { Text, Wrapper } from './styles'

type Props = {
  icon: string
  label: string
  route: string
  extraRoutes?: string[]
}

const NavigationButton = ({
  icon,
  label,
  route,
  extraRoutes,
}: Props): JSX.Element => {
  const { pathname } = useLocation()

  const enabled =
    pathname == route || (extraRoutes && extraRoutes.includes(pathname))

  return (
    <Link to={route}>
      <Wrapper enabled={enabled}>
        <span className="material-icons-outlined">{icon}</span>
        <Text>{label}</Text>
      </Wrapper>
    </Link>
  )
}

export { NavigationButton }
