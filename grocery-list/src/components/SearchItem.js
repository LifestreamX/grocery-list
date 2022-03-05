import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchItem = ({ setFilteredGroceries, filteredGroceries }) => {
  return (
    <div className='search'>
      <AiOutlineSearch className='search-icon' />
      <input
        className='filter-input'
        type='text'
        onChange={(e) => setFilteredGroceries(e.target.value)}
        placeholder='Search Grocery List...'
      />
    </div>
  );
};

export default SearchItem;
