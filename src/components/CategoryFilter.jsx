import React from 'react';

const CategoryFilter = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const mergedFilters = ['All', ...bookCategories];
  return (
    <select>
      {mergedFilters.map((val, idx) => (
        <option key={idx} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
