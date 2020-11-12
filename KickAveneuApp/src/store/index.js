const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

import ChartReducer from './reducers/ChartReducer'

const reducer = combineReducers({ 
  ChartReducer
})

const store = createStore( reducer, applyMiddleware(thunk) )

export default store