import React from 'react'
import Header from '../components/Header'
import User_Body from '../components/User_Body'
import Points_Body_Page from '../components/Points_Body_Page'
import { useEffect } from 'react'
const User = () => {
      useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
    
    
      }, []);
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-4'> اليوزر</h1>
        <User_Body/>
  
    </div>

      
  )
}

export default User
