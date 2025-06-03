import React from 'react'
import Header from '../components/Header'
import '../../style/Admin.css';
import { useEffect } from 'react';
import Home_Body from '../components/Home_Body';
const Home = () => {
    useEffect(() => {
      document.documentElement.style.setProperty("--main", "white");
  
  
    }, []);
  return (
    <div className='Home_Admin'>
        <Header/>
        <Home_Body/>
      
    </div>
  )
}
 
export default Home
