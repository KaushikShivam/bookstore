import React, { Component } from 'react';

class BooksForm extends Component {
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
    return (
      <form>
        <input type="text" name="title" />
        <select name="category">
          {bookCategories.map((val, idx) => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BooksForm;
