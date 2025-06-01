import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Package_Body from '../components/Package_Body';
const EditPackage = () => {
      const parmas=useParams();
    const id=parmas.id;
    const[olditem,setOlditem]=useState({});
    const[loading,setLoading]=useState(true)
        useEffect(()=>{
        const fetchOld=async()=>{

            try{
                const res=await axios.get(`https://market-cwgu.onrender.com/package/${id}/`);
                console.log(res.data);
                setOlditem(res.data);
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
           
        }
         fetchOld();

    },[])
    if(loading){
        return(
            <div>

            </div>
        )
    }
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-4'> البكجات</h1>
      <Package_Body edit={true} olditem={olditem} />
    
      
    </div>
  )
}

export default EditPackage
