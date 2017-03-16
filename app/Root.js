//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Redirect } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'

import Companies from '~/app/containers/pages/companies/Companies'
import NewCompany from '~/app/containers/pages/companies/NewCompany'
import Layout from '~/app/containers/pages/layout/Layout'
import store from '~/app/Store'
import './assets/styles/global.css'

injectTapEventPlugin()

render((
  <Provider store={store}>
    <MuiThemeProvider>
      <div style={{height: '100%'}}>
        <Router history={browserHistory}>
          <Redirect from='/' to='/companies' />
          <Route path='/' component={Layout}>
            <Router path='companies' component={Companies} />
            <Router path='companies/new' component={NewCompany} />
          </Route>
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'))
