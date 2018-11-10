import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
const About = () => <h2>About</h2>
const AppRouter = () => (
  <div>
    <Router>
      <div>
        <Route exact path='/' render={() => <App name='Andrew' />} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  </div>
)

export default AppRouter
