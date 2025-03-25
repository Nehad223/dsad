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
<div className="out">
      <div className="in1">
        <Logo_Img class="Logo_in1" />
      </div>
      <Search_Box />
      <div className="in2">
      </div>
      <Dashboard />
    </div>
  )
}

export default Test
