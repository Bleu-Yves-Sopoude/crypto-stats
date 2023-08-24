import React from 'react';
import { useDispatch } from 'react-redux';
import { filteredCurrencyLists } from '../redux/currencies/currencySlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(filteredCurrencyLists(filterValue));
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="search currency..."
        className="filter-input"
      />
    </div>
  );
};

export default Filter;
