import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bookCategories from '../utils';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
  }

  handleChangeFilter = ({ target }) => {
    const { changeFilter } = this.props;
    changeFilter(target.value);
    this.setState({ filter: target.value });
  };

  render() {
    const mergedFilters = ['All', ...bookCategories];
    const { value } = this.state;
    return (
      <div>
        Filter:
        <select onChange={this.handleChangeFilter} value={value} name="filter">
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

CategoryFilter.propTypes = {
  changeFilter: PropTypes.instanceOf(Function).isRequired,
};

export default CategoryFilter;
