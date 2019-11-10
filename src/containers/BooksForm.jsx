import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook, removeBook } from '../actions/index';
import uuid from 'uuid/v4';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const book = { ...this.state, id: uuid() };
    this.props.createBook(book);
    this.setState({ title: '', category: '' });
  };

  render() {
    const bookCategories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} onChange={this.handleChange} />
        <select name="category" onChange={this.handleChange} value={category}>
          {bookCategories.map((val, idx) => (
            <option key={idx} value={val}>
              {val}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);
