import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { AuthenticationContext } from '../../contexts'

const Logout = (): JSX.Element => {
  const { logout } = useContext(AuthenticationContext)

  useEffect(logout)

  return <Redirect to="/" />
}

export { Logout }
