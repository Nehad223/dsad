import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import In_Buy_Item from '../components/in_Buy_Item';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Buy_Money = () => {

  const [data,setData]=useState({});
  const parmas=useParams();
  const id=parmas.id;
    useEffect(()=>{
  const fetch=async ()=>{
    try{
      const res=await axios.get(`https://market-cwgu.onrender.com/item/${id}/`);
      setData(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  fetch();},[])
  return (
            <div className='Buy_Points'>
      <div className='Img'>
         <img src={`https://res.cloudinary.com/dgocqho3b/${data.photo}`}/>
         </div>

    <In_Buy_Item name={data.name} description={data.description}/>
        
    </div>
  )
}
export default Buy_Money;
