import React, { useState } from "react";
import Logo from "./Assests/logo.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useCart } from "./CartContext";
import { useEffect } from "react";

const Profile = () => {
  const { userData } = useCart();
  const [points,setPoints]=useState(null);
  const navigate = useNavigate();
  const goToPointsPage = () => {
    navigate('/dsad/points');
  };
  {/*
  useEffect(()=>{
    const getPoints=async ()=>{
      try {
        const response = await axios.post(`https://market-cwgu.onrender.com/getpoints/${userData.id}/`);
        console.log(response.data);
        setPoints(response.data)
  
       
      } catch (error) {
        console.log(error)
      }

    }
    getPoints();
  },[])
  */}
  return (
    <div className="out">
      <div className="in1_Profile">
        <img
          src={Logo}
          width="91px"
          height="41px"
          className="Logo_in1_Profile"
        />
        {userData.photo_url && (
          <img
            src={userData.photo_url}
            width="103px"
            height="103px"
            className="Profile_Photo"
          />
        )}
      </div>
      <div className="in2_Profile">
        <h1 className="mt-5">
      
          {userData.first_name} {userData.last_name ? userData.last_name : ""}
        </h1>
        <p>{userData.id} (ID Num)</p>
        <button className="points_btn mb-5">
          <button className="num_points">400</button>
            <button className="name_points">عدد النقاط</button>
        </button>
        <button className="pro_btton dd" onClick={goToPointsPage} >
          تبديل النقاط
        </button>     
        <button className="pro_btton"> سجل المشتريات</button>
      </div>
      <Dashboard />
    </div>
  );
};
export default Profile;
