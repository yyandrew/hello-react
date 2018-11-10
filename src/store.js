import { createStore } from 'redux'
const store = createStore(
  () => console.log('add reducer here'),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
