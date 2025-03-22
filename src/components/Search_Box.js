import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import '../style/All.css';
const Search_Box = () => {
    const navigate=useNavigate();
    const handleSearch = () => {
        navigate(`/dsad/search`);
      };
  return (
    <div className="Search_Box" onClick={handleSearch}>
    <Search className="Search_Logo" onClick={handleSearch} />
    <input
      type="button"
      value="Search"
      className="Search_Input focus:outline-none focus:ring-0"
      onClick={handleSearch}
    />
  </div>
  )
}

export default Search_Box
