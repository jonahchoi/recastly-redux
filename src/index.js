import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

//TODO: Import the Provider component from 'react-redux' here!

import {Provider} from 'react-redux';
import reduxStore from './store/store.js';
//TODO: Use the Provider component to make your store available to
//  the rest of your app.

const store = reduxStore();
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
