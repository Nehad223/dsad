import React from 'react'
import Header from '../components/Header'
import Selector_Cat from '../components/Selector_Cat'
import Package_Body from '../components/Package_Body'
import { useEffect } from 'react'
const Add_Money = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
      <Header/>
      <h1 className='add_text mt-5'> إضافة بضاعة بسعر</h1>
      <Package_Body money={true}/>
      
      
    </div>
  )
}

export default Add_Money
