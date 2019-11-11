import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';
import loader from '../assets/loader.png';

const Book = ({ book: { title, category }, removeBook }) => (
  <div className="Book">
    <div>
      <p className="Book-category">{category}</p>
      <h4 className="Book-title">{title}</h4>
      <p className="Book-author">Author Name</p>
      <div className="Book-buttons">
        <button className="Book-ctc" type="submit">
          Comments
        </button>
        <button className="Book-ctc" type="submit" onClick={removeBook}>
          Remove
        </button>
        <button className="Book-ctc" type="submit">
          Edit
        </button>
      </div>
    </div>
    <div className="Book-content">
      <img src={loader} alt="Loader image" />
      <div className="info">
        <p className="percent">65%</p>
        <p className="status">completed</p>
      </div>
      <div>
        <div className="right-info">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">CHAPTER 17</p>
        </div>
        <p className="progress">UPDATE PROGRESS</p>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;
