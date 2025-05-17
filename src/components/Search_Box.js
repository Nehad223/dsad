import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../style/All.css';
const Search_Box = ({ searchQuery, setSearchQuery }) => {

  return (
    <div className="Search_Box">
      <div className="Search_Box_Inner">
          <Search className="Search_Logo" />
          <input 
            type="text" 
            placeholder="Search"
            value={searchQuery}       // هون مربوطة بالحالة من الأعلى
            onChange={(e) => setSearchQuery(e.target.value)}
            enterKeyHint="search"
          />
      </div>
    </div>
  );
};

export default Search_Box;

