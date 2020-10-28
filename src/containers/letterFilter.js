import React, { useState } from 'react';
import PropTypes from 'prop-types';
import letters from '../actions/allLetters';

function LetterFilter({ handleChange }) {
  // eslint-disable-next-line no-unused-vars
  const [dropDownValue, setDropDownValue] = useState('ALL');

  return (
    <div>
      <span>
        <h4>Choose the Letter of food to view</h4>
      </span>
      <select
        className="select"
        onChange={e => {
          setDropDownValue(e.target.value);
          handleChange(e.target.value);
        }}
      >
        <option value="All">ALL</option>
        {letters.map(e => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

LetterFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default LetterFilter;
