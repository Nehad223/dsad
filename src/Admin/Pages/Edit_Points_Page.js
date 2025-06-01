import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Points_Body from '../components/Points_Body'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Edit_Points_Page = () => {
    const parmas=useParams();
    const id=parmas.id;
    const[olditem,setOlditem]=useState({});
    const[loading,setLoading]=useState(true)
    
   
    useEffect(()=>{
        const fetchOld=async()=>{

            try{
                const res=await axios.get(`https://market-cwgu.onrender.com/pointitem/${id}/`);
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
      <h1 className='add_text mt-4'> بضاعة بنقاط</h1>
        <Points_Body edit={true} olditem={olditem} />
      
    </div>
  )
}

export default Edit_Points_Page


