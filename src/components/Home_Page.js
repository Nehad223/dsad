import React, { useEffect } from 'react'
import { Search } from "lucide-react";
import './All.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
global.Helmet = Helmet;
var root = document.querySelector(':root');
const Home_Page = () => {
  useEffect(()=>{ root.style.setProperty('--main','white');},[])
  return (
<div className='out'>
  <div className='in1'></div>
  <div className='Search_Box'>
      <Search className="Search_Logo " />
      <input
        type="text"
        placeholder="Search"
        className="Search_Input focus:outline-none focus:ring-0"
      />
      </div>
  <div className='in2'></div>
</div>
  )
}

export default Home_Page

