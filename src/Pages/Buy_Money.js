import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import In_Buy_Item from '../components/in_Buy_Item';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TelegramBackButton from "../components/Tele_Back_Btn";
const Buy_Money = () => {
  const [item,setItem]=useState({});
  const parmas=useParams();
  const id=parmas.id;
  const type=parmas.itemORpackage;

  TelegramBackButton();
    useEffect(()=>{
  const fetch=async ()=>{
    try{
      if(type=="items"){      const res=await axios.get(`https://market-cwgu.onrender.com/item/${id}/`);
      setItem(res.data);}
      else{
         const res=await axios.get(`https://market-cwgu.onrender.com/package/${id}/`);
      setItem(res.data);
      }

    }
    catch(err){
      console.log(err);
    }
  }
  fetch();},[])
  return (

            <div className='Buy_Points'>
      <div className='Img'>
        {item.photo &&   (<img src={`https://res.cloudinary.com/dgocqho3b/${item.photo}`}/>)}
         </div>

    
      {item.photo && <In_Buy_Item item={item}/>}        
    </div>
  )
}
export default Buy_Money;
