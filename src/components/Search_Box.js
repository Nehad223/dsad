import React from 'react';
import { Search } from 'lucide-react';
import '../style/All.css';

const Search_Box = () => {
  return (
    <div className="Search_Box">
      <div>
        <Search className="Search_Logo" />
        <input type="text" placeholder='Search' />
      </div>
    </div>
  );
};

export default Search_Box;
