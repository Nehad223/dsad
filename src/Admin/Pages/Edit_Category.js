import React from 'react';
import Header from '../components/Header';
import Edit_catg_Body from '../components/Edit_catg_Body';

const Edit_Category = () => {
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-2'>الكاتيغوريز</h1>
      <Edit_catg_Body/>


    </div>
  )
}

export default Edit_Category
