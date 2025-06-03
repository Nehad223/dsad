import React from 'react';
import Header from '../components/Header';
import Points_Body from '../components/Points_Body';
import { useEffect } from 'react';
const Add_Points = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
      <Header/>
      <h1 className='add_text mt-4'> إضافة بضاعة بنقاط</h1>
      <Points_Body/>
      

      
    </div>
  )
}

export default Add_Points
