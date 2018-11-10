import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './route'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerServiceWorker()
