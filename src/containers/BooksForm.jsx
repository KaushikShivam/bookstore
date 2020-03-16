import React, { Component } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import bookCategories from '../utils';
import './BooksForm.scss';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: bookCategories[0]
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const book = { ...this.state, id: uuid() };
    const { createBook } = this.props;
    createBook(book);
    this.setState({ title: '', category: '' });
  };

  render() {
    const { title, category } = this.state;
    return (
      <div className="BooksForm">
        <h2 className="BooksForm-title">ADD NEW BOOK</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          <select name="category" onChange={this.handleChange} value={category}>
            {bookCategories.map((val, idx) => (
              <option key={idx} value={val}>
                {val}
              </option>
            ))}
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book))
});

export default connect(null, mapDispatchToProps)(BooksForm);
