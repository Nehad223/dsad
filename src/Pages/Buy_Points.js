import React from 'react'
import item from '../Assests/item.png'
import Points_Number from "../components/Points_Number";
import { useEffect } from 'react';
import Form from '../components/Form';
import { useLocation } from 'react-router-dom';

const Buy_Points = () => {
  const location = useLocation();
  const name = location.state?.name || "";
  const points = location.state?.points || "";
  const photo = location.state?.photo || "";

  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);
  return (
    <div className='Buy_Points'>
      <div className='Img'>
         <img src={`https://res.cloudinary.com/dgocqho3b/${photo}`}/>
         </div>
       
        <div className='in_Buy_Points mt-5'>
          <Points_Number title={name} points={points}  />
          <Form/>



        </div>
        
    </div>
  )
}

export default Buy_Points
