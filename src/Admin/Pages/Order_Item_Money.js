import React from 'react';
import Header from '../components/Header.js';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Form_Order from '../components/Form_Order.js';
import axios from 'axios';

const Order_Item_Money = () => {
  const parmas=useParams();
  const id=parmas.id;
  const index=parmas.index;
  const [data,setData]=useState({});
  useEffect(()=>{
        document.documentElement.style.setProperty("--main", "white");
    const fetchData= async ()=>{
      try{
        const res=await axios.get(`https://market-cwgu.onrender.com/getorder/${parmas.id}/`);
        setData(res.data);
        console.log(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
      fetchData();

  },[])
  return (
    <div>
      <Header />
      <h1 className='add_text mt-5'>الطلب رقم {index}</h1>
   {data.customer_info && (
  <Form_Order 
    name={data.customer_info.name} 
    adress={data.customer_info.address} 
    phone={`0${data.customer_info.phone_number}`} 
  />
)}

    </div>
  )
}

export default Order_Item_Money;


