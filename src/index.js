import './index.css'
import 'antd/dist/antd.css'

import { App } from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './app/store'

ReactDom.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
