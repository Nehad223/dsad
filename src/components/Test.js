import React from 'react';
import Logo from "./Assests/logo.png";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useCart } from './CartContext';


const Test = () => {

  const { userData } = useCart();
  const navigate = useNavigate();
  return (
    <div className="out">
      <div className="in1">
        <img src={Logo} width="91px" height="41px" className="Logo_in1_Profile" />
       

      </div>


      <div className="in2_Profile">
        <h1 className='mt-5'> Nehad Shretah</h1>
        <p>094021910 (ID Num)</p>
        <button className='points_btn mb-5'>
          <button className='num_points'>400</button><button className='name_points'>عدد النقاط</button>

        </button>
        
        <button className='pro_btton'> تبديل النقاط</button>
        <button className='pro_btton'> سجل المشتريات</button>

      </div>
     
    <Dashboard/>
    </div>
  )
}

export default Test;

