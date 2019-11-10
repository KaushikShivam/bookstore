import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';

class BooksList extends Component {
  render() {
    const { books } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(
  mapStateToProps,
  null,
)(BooksList);
