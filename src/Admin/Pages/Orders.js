import React from 'react'
import Header from '../components/Header.js';
import Rectangle from '../components/Rectangle.js';
import { useEffect } from 'react';
const Orders = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-5'>الطلبات المعلقة</h1>
      <div className='row'>
        <div className='col-4'></div>
            <div className='col-2'><Rectangle value="نقاط" redrict="points" /></div>
     
      <div className='col-2'><Rectangle value="مصاري" redrict="money" /></div>
         <div className='col-4'></div>
         </div>
    </div>
  )
}

export default Orders
