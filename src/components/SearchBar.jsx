import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    
    // Pass the search term to the parent component or perform search here
    onSearch(e.target.value);
  };

  return (
    <div className='flex items-center bg-white border-gray-300 rounded-md  focus:ring-blue-500'>
        <MagnifyingGlassIcon height={40}></MagnifyingGlassIcon>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border w-full px-3 py-2 focus:outline-none focus:ring-2"
      />
    </div>
  );
};

export default SearchBar;
