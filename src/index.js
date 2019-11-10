import React from 'react';
import ReactDOM from 'react-dom';

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
      id: 1,
      title: 'Book 1',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Book 2',
      category: 'Biography',
    },
    {
      id: 3,
      title: 'Book 3',
      category: 'History',
    },
    {
      id: 4,
      title: 'Book 4',
      category: 'Horror',
    },
    {
      id: 5,
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
