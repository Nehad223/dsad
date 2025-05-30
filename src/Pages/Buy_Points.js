import React, { useState } from 'react'
import item from '../Assests/item.png'
import Points_Number from "../components/Points_Number";
import { useEffect } from 'react';
import Form from '../components/Form';
import { useParams } from 'react-router-dom';
import TelegramBackButton from '../components/Tele_Back_Btn';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Buy_Points = () => {
  const parmas=useParams();
  const id=parmas.id;

const [data,setData]=useState({});
  TelegramBackButton();
useEffect(()=>{
  
  const fetch=async ()=>{
    try{
      const res=await axios.get(`https://market-cwgu.onrender.com/pointitem/${id}/`);
      setData(res.data);
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
        {data.photo && ( <img src={`https://res.cloudinary.com/dgocqho3b/${data.photo}`}/>)}
        
         </div>
       {data.photo && (        <div className='in_Buy_Points mt-5'>
          <Points_Number title={data.name} points={data.points}  />
          <Form id_item={id} points={data.points}/>

        </div>)}

        
    </div>
  )
}

export default Buy_Points
