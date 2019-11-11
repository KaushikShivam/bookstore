import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

import './BooksList.scss';
import user from '../assets/user.png';

class BooksList extends React.Component {
  handleRemoveBook = book => {
    const { removeBook } = this.props;
    removeBook(book);
  };

  handleFilterChange = filter => {
    const { changeFilter } = this.props;
    changeFilter(filter);
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
        <div className="Header">
          <div className="Header-left">
            <h2 className="Header-title">Bookstore CMS</h2>
            <p className="Header-book">Books</p>
            <CategoryFilter changeFilter={this.handleFilterChange} />
          </div>
          <div className="Header-right">
            <img src={user} alt="User Logo" />
          </div>
        </div>
        <div className="Books">
          {filteredBooks.map(book => (
            <Book key={book.id} book={book} removeBook={() => this.handleRemoveBook(book)} />
          ))}
        </div>
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
