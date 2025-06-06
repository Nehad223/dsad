import React from 'react';
import Header from '../components/Header.js';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Form_Order from '../components/Form_Order.js';
import axios from 'axios';
import Inf_Order from '../components/inf_Order.js';
const Order_Item_Money = () => {

  const parmas=useParams();
  const id=parmas.id;
  const index=parmas.index;
  const type=parmas.MoneyOrPoint;
  const[loading,setLoading]=useState(true)
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
      finally{
        setLoading(false);
      }
    }
      fetchData();

  },[])
  if(loading){
    return(
      <div>
        
      </div>
    )
  }
  return (
    <div>
      <Header />
      <h1 className='add_text mt-5'>الطلب رقم {index}</h1>

    <div className='row'>
      <div className='col-6'>
        {type=="money" && 
        <Inf_Order date={data.created_at} pacakges={data.packages} items={data.items} totalPrice={data.price}/>        
        }
        {type=="points" && 
        
        <Inf_Order date={data.created_at}  items={data.point_items} />
        
        }
         </div>
      <div className='col-6'>      
        
   {data.customer_info &&  (
  <Form_Order 
    name={data.customer_info.name} 
    adress={data.customer_info.address} 
    phone={`0${data.customer_info.phone_number}`} 
    id={data.id}
    status={data.status}
  />
)}

</div>


    </div>

    </div>
  )
}

export default Order_Item_Money;


