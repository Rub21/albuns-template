import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './initializers/store';
import firebase from './initializers/firebase';

import { setUser, clearUser } from './initializers/actions';

firebase.auth().onAuthStateChanged(user => {
  console.log('------------------------------------');
  console.log(user);
  console.log('------------------------------------');
  if (user) {
    store.dispatch(setUser(user));
  } else {
    store.dispatch(clearUser());
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
