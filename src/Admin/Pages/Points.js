import React from 'react'
import Header from '../components/Header'
import Points_Body_Page from '../components/Points_Body_Page';
import { useEffect } from 'react';
const Points = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
      <Header/>
      <h1 className='add_text mt-5'>النقاط</h1>
      <Points_Body_Page/>



    </div>
  )
}

export default Points;
    
