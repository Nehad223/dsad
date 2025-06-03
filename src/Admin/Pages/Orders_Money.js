import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react'
const Orders_Money = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-4'>الطلبات مصاري</h1>
      

      
    </div>
  )
}

export default Orders_Money
