import {createStore, applyMiddleware, compose}  from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState ={};
const middleware =[thunk];

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware)

  //this is commented out for production, if in development, enable them.
 // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));





export default store;