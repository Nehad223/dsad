import { useEffect } from 'react';
import React from 'react'
import Logo_Img from '../components/Logo_Img';
import Dashboard from '../components/Dashboard';
import Search_Box from '../components/Search_Box';

const Test = () => {
  useEffect(() => {
  document.documentElement.style.setProperty("--main", "white");
}, []);
  return (
    <div className='ww'> 
      <span>+963</span>
      <input />
   
  </div>
  )
}

export default Test
