import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, removeBook }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button type="submit" onClick={removeBook}>
        Remove Book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;
