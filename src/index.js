import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

//function logger(obk,next, action)
//logger(obj)(next)(action) 
// const logger = function({ dispatch, getState }) {
//   return function(next) {
//     return function(action) {
//       // my middlware
//       console.log('ACTION_TYPE', action.type);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // logger code
  console.log('ACTION', action);
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store',store);
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type: 'ADD_movies',
//   movies: [{name:'Superman'}]
// })

// console.log('AFTER STATE',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


