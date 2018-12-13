import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import dva from 'dva'
import './index.css'
import AppRouter from './route'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
const app = dva({
  initialState: {
    products: [
      {
        id: '1',
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
      }, {
        id: '2',
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street'
      }
    ],
  },
});

app.model(require('./models/products').default);
app.router(() => <AppRouter />)
app.start('#root');
registerServiceWorker()
