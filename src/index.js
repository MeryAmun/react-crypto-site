import './index.css'
import 'antd/dist/antd.css'

import { App } from './App'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
