import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v4';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App';

import rootReducer from './reducers/index';

const middlewares = [logger];

const STATE = {
  books: [
    {
      id: uuid(),
      title: 'The Hunger Games',
      category: 'Action',
    },
    {
      id: uuid(),
      title: 'Capital in the twenty first century',
      category: 'Biography',
    },
  ],
};

const store = createStore(rootReducer, STATE, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
