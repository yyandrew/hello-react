import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Products from './routes/Products'
import FormContainer from './form/FormContainer';
import FormComponent from './form/FormComponent';

// Form is high order component(HOC) wrapper function
const Form = FormContainer(FormComponent)

const About = () => <h2>About</h2>

const AppRouter = () => (
  <div>
    <Router>
      <div>
        <Route exact path='/' render={() => <App name='Andrew' />} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
        <Route path='/form' component={Form} />
      </div>
    </Router>
  </div>
)

export default AppRouter
