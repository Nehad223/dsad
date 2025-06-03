import React from 'react'
import Header from '../components/Header'
import Category_Body from '../components/Category_Body';
import { useEffect } from 'react';

const Add_Category = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
      <Header/>
      <h1 className='add_text mt-5'> إضافة كاتيغوري</h1>
      <Category_Body />

    </div>
  )
}

export default Add_Category
