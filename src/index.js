import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './reducers/index'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {};

const store = createStore(mainReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
