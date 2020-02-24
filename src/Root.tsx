import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginForm from './pages/LoginForm'
import GameRoom from './pages/GameRoom'

const Root: React.FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path={'/'} component={LoginForm} />
      <Route path={'/dobble'} component={GameRoom} />
    </Switch>
  </BrowserRouter>
)

export default Root
