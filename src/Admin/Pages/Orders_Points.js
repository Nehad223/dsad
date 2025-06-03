import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react'
const Orders_Points = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
           <Header/>
      <h1 className='add_text mt-4'>الطلبات نقاط</h1>
    </div>
  )
}

export default Orders_Points
