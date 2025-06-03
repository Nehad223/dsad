import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Points_Body from '../components/Points_Body'
import axios from 'axios';
import Package_Body from '../components/Package_Body';
import { useParams } from 'react-router-dom';
const Edit_Money_Page = () => {
    const parmas=useParams();
    const doctorOrstudent=parmas.doctorOrstudent;
    const id=parmas.catgid;
    const[olditem,setOlditem]=useState({});
    const[loading,setLoading]=useState(true)
    
       useEffect(() => {
         document.documentElement.style.setProperty("--main", "white");
     
     
       }, []);
    useEffect(()=>{
        const fetchOld=async()=>{

            try{
                const res=await axios.get(`https://market-cwgu.onrender.com/item/${id}/`);
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
      <h1 className='add_text '> بضاعة بسعر</h1>
        <Package_Body edit={true} olditem={olditem} money={true} />
      
    </div>
  )
}

export default Edit_Money_Page;


