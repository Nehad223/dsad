import React, { useState } from 'react'
import Header from '../components/Header'
import { useEffect } from 'react'
import Rectangle from '../components/Rectangle';
import Delev_Rectangle from '../components/Delev_Rectangle';
import axios from 'axios';
import Body_Orders_All from '../components/Body_Orders_All';
const Orders_Money = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetch=async()=>{
      try{
        const res=await axios.get("https://market-cwgu.onrender.com/getorders/point/");
        setData(res.data)

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
    <div>
        <Header/>
      <h1 className='add_text mt-5'>الطلبات نقاط</h1>
      <Body_Orders_All data={data} />
    </div>
  )
}

export default Orders_Money
