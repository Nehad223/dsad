import React from 'react'
import Header from '../components/Header'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Rectangle_Edit_Catg from '../components/Rectangle_Edit_Catg';
const Edit_Packages = () => {
    const [data,setData]=useState([]);
      const [loading, setLoading] = useState(true); 
          useEffect(() => {
            document.documentElement.style.setProperty("--main", "white");
        
        
          }, []);
    
    useEffect(()=>{
        const fetchdata=async ()=>{
            try{
                   const res=await axios.get("https://market-cwgu.onrender.com/packages/");
            setData(res.data);
            console.log(res.data); 
            }
            catch(err){console.log(err)}
            finally{
                setLoading(false)
            }
        
        }
        fetchdata();
        console.log(data);
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
      <h1 className='add_text mt-4'>البكجات</h1>
       {data && (<div  className='grid-container'>
{data.map((item, index) => {
  return (
    <div key={index}>
      <Rectangle_Edit_Catg value={item.name} redrict={item.id} />
    </div>
  );
})}

       </div>)}

    </div>
  )
}

export default Edit_Packages
