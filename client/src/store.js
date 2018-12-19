import {createStore, applyMiddleware, compose}  from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState ={};
const middleware =[thunk];

// this is for development
// const store = createStore(rootReducer, initialState, compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));



// this is for production
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // options like actionSanitizer, stateSanitizer
));



export default store;