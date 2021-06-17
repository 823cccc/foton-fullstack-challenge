import 'react-toastify/dist/ReactToastify.css'

import React, { useEffect } from 'react'

import { AuthenticationProvider } from './contexts'
import { Router } from './Router'
import api from './services/ApiClient'
import { GlobalStyle, ToastContainer } from './styles'

const App = (): JSX.Element => {
  useEffect(() => {
    console.log('Trying to wake up Heroku app...')

    api
      .get('/books')
      .then(() => console.log('Heroku is up :)'))
      .catch(() => console.log('Heroku is down :('))
  }, [])

  return (
    <>
      <GlobalStyle />
      <AuthenticationProvider>
        <Router />
      </AuthenticationProvider>
      <ToastContainer />
    </>
  )
}

export { App }
