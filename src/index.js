import React from 'react'
import { render } from 'react-dom'


import './assets/styles/global.scss'
import 'materialize-css/dist/css/materialize.css'

import App from './container/App'

render(<App />, document.getElementById('app'))