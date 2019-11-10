import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const STATE = [
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
];

ReactDOM.render(<App />, document.getElementById('root'));
