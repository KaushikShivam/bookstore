import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook } from '../actions/index';

class BooksList extends React.Component {
  handleRemoveBook = book => {
    const { removeBook } = this.props;
    removeBook(book);
  };

  render() {
    const { books } = this.props;
    return (
      <div className="BooksList">
        <CategoryFilter />
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>category</th>
              <th>Remove Book</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <Book key={book.id} book={book} removeBook={() => this.handleRemoveBook(book)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
