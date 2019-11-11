import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends Component {
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
    const mergedFilters = ['All', ...bookCategories];
    return (
      <div>
        Filter:
        <select>
          {mergedFilters.map((val, idx) => (
            <option key={idx} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {};

export default CategoryFilter;
