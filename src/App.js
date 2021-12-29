import './App.css'

import {
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  Home,
  Navbar,
  News,
} from './components'
import { Layout, Space, Typography } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'

import React from 'react'

export const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/exchanges' component={Exchanges} />
              <Route
                exact
                path='/cryptocurrencies'
                component={Cryptocurrencies}
              />
              <Route exact path='/crypto/:id' component={CryptoDetails} />
              <Route exact path='/news' component={News} />
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  )
}
