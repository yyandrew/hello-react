import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Products from './routes/Products'
const About = () => <h2>About</h2>
const AppRouter = () => (
  <div>
    <Router>
      <div>
        <Route exact path='/' render={() => <App name='Andrew' />} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
      </div>
    </Router>
  </div>
)

export default AppRouter
