import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

class BooksList extends React.Component {
  handleRemoveBook = book => {
    const { removeBook } = this.props;
    removeBook(book);
  };

  handleFilterChange = filter => {
    this.props.changeFilter(filter);
  };

  render() {
    const { books, filter } = this.props;
    let filteredBooks;
    if (filter === 'All') {
      filteredBooks = books;
    } else {
      filteredBooks = books.filter(book => book.category === filter);
    }
    return (
      <div className="BooksList">
        <CategoryFilter changeFilter={this.handleFilterChange} />
        <tr>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>category</th>
              <th>Remove Book</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map(book => (
              <Book key={book.id} book={book} removeBook={() => this.handleRemoveBook(book)} />
            ))}
          </tbody>
        </tr>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
  changeFilter: PropTypes.instanceOf(Function).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
