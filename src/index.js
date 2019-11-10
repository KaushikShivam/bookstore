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
      title: 'Book 1',
      category: 'Action',
    },
    {
      id: uuid(),
      title: 'Book 2',
      category: 'Biography',
    },
    {
      id: uuid(),
      title: 'Book 3',
      category: 'History',
    },
    {
      id: uuid(),
      title: 'Book 4',
      category: 'Horror',
    },
    {
      id: uuid(),
      title: 'Book 5',
      category: 'Kids',
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
