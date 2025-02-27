import React, { useEffect } from 'react'
import {  Search } from "lucide-react";
import './All.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useState } from 'react';
import dd from './Assests/logo.png';
import Nav from './Nav';
import Doctors_Students from './Doctors';
import Logo from './Assests/logo.png'
import axios from 'axios';
import Packeges from './Packeges';
global.Helmet = Helmet;
var root = document.querySelector(':root');
const Home_Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(()=>{ root.style.setProperty('--main','white');
    axios.get('https://market-cwgu.onrender.com/bot/homepage/')
    .then((response) => {
        console.log(response.data);
        setData(response.data);
    })
    .catch((error) => {
        setError(error);
    })
    .finally(() => {
        setIsLoading(false);
    });

  },[]);

  const [selectedValue, setSelectedValue] = useState(0);
  const handleSelection = (value) => {
    setSelectedValue(value);
  };
  useEffect(()=>{

   Render_Result();

  },[selectedValue]);
const x=[{"id":"مستهلكات"},{"id":"معدنيات"},{"id":"مواد للسنة الاولى"}];

  function Render_Result(){
    if(selectedValue==0){
      return(<Doctors_Students items={data} doctor_student={1} />)

    }
    else if(selectedValue==1){
      return(<Doctors_Students items={data} doctor_student={2} />)    }
    else{
      return(<div>
        <Packeges items={x} />
      </div>)

    }
    
  }
  return (
    
<div className='out'>
  <div className='in1'>
    <img src={Logo} width="75px" height="75px" className='Logo_in1'/>
  </div>
  <div className='Search_Box'>
      <Search className="Search_Logo " />
      <input
        type="text"
        placeholder="Search"
        className="Search_Input focus:outline-none focus:ring-0"
      />
      </div>
  <div className='in2'>
    <Nav onSelect={handleSelection}/>
    {Render_Result()}
   
    
  </div>
</div>
  )
}

export default Home_Page

