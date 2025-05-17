
import { useEffect, useState } from 'react';
import mobile from '../Assests/mobile.png';
import "../style/All.css";
import axios from 'axios';
import Packeges from '../components/Packeges';
const Test = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
      const fetchdata= async ()=>{
           try{
          
    const res= await axios.get("https://market-cwgu.onrender.com/search/student/م/");
              setData(res.data)
    console.log(res.data);
           }
              
        catch(err){
          console.log(err);

  }}
    fetchdata();
  },[])
  return (
         <div className="container Conformation_Page">
   <Packeges items={data} currency="sp" type="item" />;

    </div>
    
  );
};

export default Test;

