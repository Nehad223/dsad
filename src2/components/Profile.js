import React from 'react';
import Logo from "./Assests/logo.png";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";


const Profile = () => {
    const navigate = useNavigate();
  return (
    <div className="out">
      <div className="in1">
        <img src={Logo} width="75px" height="75px" className="Logo_in1" />
      </div>


      <div className="in2_Profile">
        <h1 className='mt-5'>عبدالله شوار</h1>
        <p>01928303 (ID Num)</p>
        <div className='points_btn mb-5'>
          <button className='num_points'>400</button><button className='name_points'>عدد النقاط</button>

        </div>
        
        <button className='pro_btton'> تبديل النقاط</button>
        <button className='pro_btton'> سجل المشتريات</button>

      </div>
     
    <Dashboard/>
    </div>
  )
}

export default Profile
