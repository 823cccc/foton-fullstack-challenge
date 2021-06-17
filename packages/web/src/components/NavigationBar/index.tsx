import React from 'react'

import { NavigationButton } from '../NavigationButton'
import { Footer } from './styles'

const NavigationBar = (): JSX.Element => {
  return (
    <Footer>
      <NavigationButton
        icon="home"
        label="Home"
        route="/"
        extraRoutes={['/search']}
      />

      <NavigationButton icon="add" label="Add Book" route="/books/new" />
      <NavigationButton
        icon="person"
        label="Profile"
        route="/profile"
        extraRoutes={['/login', '/register']}
      />
    </Footer>
  )
}

export { NavigationBar }
