import React, { Component } from 'react';
import { connect } from 'react-redux';

import Book from '../components/Book';

class BooksList extends Component {
  render() {
    const { books } = this.props;
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>category</th>
        </tr>
        {books.map(book => (
          <Book book={book} />
        ))}
      </table>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(
  mapStateToProps,
  null,
)(BooksList);
