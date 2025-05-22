import React, { useState } from 'react'
import item from '../Assests/item.png'
import Points_Number from "../components/Points_Number";
import { useEffect } from 'react';
import Form from '../components/Form';
import { useParams } from 'react-router-dom';
import TelegramBackButton from '../components/Tele_Back_Btn';
import axios from 'axios';
import img from "../Assests/mobile.png"
const Test2 = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);
  return (
   
    <div className='Buy_Points'>
      <div className='Img'>
        <img src={img}/>
         </div>
       <div className='in_Buy_Points mt-5'>
          <Points_Number title="ملقط2" points="40000000"  />
          <Form/>
        </div>

        
    </div>
  )
}

export default Test2
