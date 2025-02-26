import React from 'react'
import { Search } from "lucide-react";
import './All.css';
const Home_Page = () => {
  return (

    <div className='Home_Page'>
      <div className='Search_Box'>
      <Search className="Search_Logo " />
      <input
        type="text"
        placeholder="Search"
        className="Search_Input focus:outline-none focus:ring-0"
      />
      </div>
      </div>
  )
}

export default Home_Page

