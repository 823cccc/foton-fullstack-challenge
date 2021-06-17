import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import {
  AddBook,
  Details,
  Home,
  Login,
  Logout,
  NotFound,
  Profile,
  Register,
  Search,
} from './pages'

const Router = (): JSX.Element => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/404" component={NotFound} />

      <Route exact path="/search" component={Search} />
      <Route path="/search/:query" component={Search} />

      <Route exact path="/profile" component={Profile} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />

      <Route exact path="/books/new" component={AddBook} />
      <Route path="/books/:id" component={Details} />

      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
)

export { Router }
