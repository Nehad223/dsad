import React from 'react'
import Header from '../components/Header'
import Package_Body from '../components/Package_Body'
import { useEffect } from 'react'
const Add_Packages = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-5'> إضافة بكج</h1>
      <Package_Body />
        
      
    </div>
  )
}

export default Add_Packages
