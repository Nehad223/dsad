import React, { useState } from 'react'
import item from '../Assests/item.png'
import Points_Number from "../components/Points_Number";
import { useEffect } from 'react';
import Form from '../components/Form';
import { useParams } from 'react-router-dom';
import TelegramBackButton from '../components/Tele_Back_Btn';
import axios from 'axios';
const Buy_Points = () => {
  const parmas=useParams();
  const id=parmas.id;
  const [photo,usePhoto]=useState(null)
const [data,setData]=useState({});
  TelegramBackButton();
useEffect(()=>{
  const fetch=async ()=>{
    try{
      const resPh=axios.get(`https://market-cwgu.onrender.com/bot/getphoto/${id}/`)
      const res=await axios.get(`https://market-cwgu.onrender.com/pointitem/${id}/`);
      setData(res.data);
      setresPh(resPh.data);
    }
    catch(err){
      console.log(err);
    }

  }
  fetch();
},[])
  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);
  return (
   
    <div className='Buy_Points'>
      <div className='Img'>
        {photo && ( <img src={`https://res.cloudinary.com/dgocqho3b/${photo}`}/>)}
        
         </div>
       {photo && (        <div className='in_Buy_Points mt-5'>
          <Points_Number title={data.name} points={data.points}  />
          <Form/>

        </div>)}

        
    </div>
  )
}

export default Buy_Points
