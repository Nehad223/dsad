import React from 'react';
import Header from '../components/Header';
import Edit_catg_Body from '../components/Edit_catg_Body';
import { useEffect } from 'react';
const Edit_Category = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-5'>الكاتيغوريز</h1>
      <Edit_catg_Body/>


    </div>
  )
}

export default Edit_Category
