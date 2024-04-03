// import {createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { thunk } from 'redux-thunk'
// import rootReducer from './reducers/index';

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './reducers/productSlice';
import productReducer from './reducers/productSlice';

const store = configureStore({
  reducer:{
    auth: authenticateReducer,
    product: productReducer,
  }
})

export default store;