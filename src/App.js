import './App.css'

import { Layout, Space, Typography } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'

import { Navbar } from './components'
import React from 'react'

export const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'></div>
      <div className='footer'></div>
    </div>
  )
}
