import React, { useContext } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

import {
  Button,
  Heading,
  NavigationBar,
  ProfileDetails,
} from '../../components'
import { AuthenticationContext } from '../../contexts'
import { Content } from '../../styles'

const Profile = (): JSX.Element => {
  const history = useHistory()
  const { user } = useContext(AuthenticationContext)

  if (!user) {
    return <Redirect to="/login" />
  }

  const handleClick = () => history.push('/logout')

  return (
    <>
      <Content>
        <Heading>Your Profile</Heading>
        <ProfileDetails name={user.name} email={user.email} />
        <Button label="Logout" onClick={handleClick} />
      </Content>
      <NavigationBar />
    </>
  )
}

export { Profile }
