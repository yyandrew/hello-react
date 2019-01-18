import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'
import Firebase, { FirebaseContext } from './components/Firebase';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'))
registerServiceWorker()
