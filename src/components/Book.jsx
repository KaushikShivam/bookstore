import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object),
};

export default Book;
