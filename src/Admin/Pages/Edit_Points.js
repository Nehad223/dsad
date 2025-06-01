import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Rectangle_Edit_Catg from '../components/Rectangle_Edit_Catg';
const Edit_Points = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const res=await axios.get("https://market-cwgu.onrender.com/getpointitems/");
                setData(res.data);
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }
        fetchdata();
    },[])
      if (loading) {
    return (
      <div>
      </div>
    );
  }
  return (
    <div>
      <Header/>
      <h1 className='add_text mt-4'> بضاعة بنقاط</h1>
      <div className='grid-container'>
         {data.map((item, index) => (
          <Rectangle_Edit_Catg key={`d-${index}`} value={item.name} redrict={item.id}  />
        ))}
      </div>

    </div>
  )
}

export default Edit_Points
