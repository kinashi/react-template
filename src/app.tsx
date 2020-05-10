import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '~/redux/store'
import { enableMapSet } from 'immer'
import GlobalStyle from '~/styles/GlobalStyle'

enableMapSet()

const SignIn = React.lazy(() => import('~/components/pages/SignIn'))
const Home = React.lazy(() => import('~/components/pages/Home'))
const Users = React.lazy(() => import('~/components/pages/Users'))

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={'/'}>
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path={'/sign_in'}>
          <Suspense fallback={null}>
            <SignIn />
          </Suspense>
        </Route>
        <Route exact path={'/users'}>
          <Suspense fallback={null}>
            <Users />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
