import React from 'react'
import Header from '../components/Header';
import Category_Body from '../components/Category_Body';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Edit_Category_by_Id = () => {
      const parmas=useParams();
    const catgid=parmas.catgid;
    const doctorOrstudent=parmas.doctorOrstudent;
    const[olditem,setOlditem]=useState({});
    const[loading,setLoading]=useState(true);
        useEffect(() => {
          document.documentElement.style.setProperty("--main", "white");
      
      
        }, []);
        useEffect(() => {
          const FetchOlditem=async()=>{
            try{
              const res=await axios.get(`https://market-cwgu.onrender.com/getcategory/${catgid}/`);
              setOlditem(res.data);
            }
            catch(err){
              console.log(err)
            }
          }
          FetchOlditem();
    }, []);
  return (

    <div>
        <Header/>
      <h1 className='add_text mt-5'>  الكاتيغوريز</h1>
        <Category_Body  edit={true} olditem={olditem} />
      
    </div>
  )
}

export default Edit_Category_by_Id
