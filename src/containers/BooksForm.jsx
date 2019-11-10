import React, { Component } from 'react';

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

  handleSubmit = () => {
    // Milestone 3 will handle this
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

export default BooksForm;
