import React from 'react';

const CategoryFilter = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
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
};

export default CategoryFilter;
