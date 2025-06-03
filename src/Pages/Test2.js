import React, { useState, useEffect } from "react";
import Logo from "../Assests/logo.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { useCart } from "../context/CartContext";
import Profile_Btns from "../components/Profile_Btns";
import Points_Number from "../components/Points_Number";
import Logo_Img from "../components/Logo_Img";
import Profile_Img from "../components/Profile_Img";
import axios from "axios";

const Profile = () => {
  const { userData } = useCart();
  const [points, setPoints] = useState(null);
  const navigate = useNavigate();

  const goToPointsPage = () => {
    navigate('/dsad/points');
  };


  useEffect(() => {
    const fetchData = async () => {
      if (!userData?.id) return; 
      try {
        const response = await axios.get(
          `https://market-cwgu.onrender.com/bot/getpoints/${userData.id}/`
        );
        setPoints(Object.values(response.data));
        console.log(userData);
      } catch (error) {
        console.error(error);
      }
      

    };

    fetchData();
  }, [userData]);

  return (
    <div className="out">
      <div className="in1_Profile">
        <Logo_Img class={"Logo_in1_Profile"} />
        {userData?.photo_url && <Profile_Img src={userData.photo_url} />}
      </div>
      <div className="in2_Profile">
        <h1 className="mt-5">
          {userData?.first_name} {userData?.last_name || ""}
        </h1>
        <p>{userData?.id} (ID Num)</p>
        {points !== null && <div> <Points_Number points={points} title="عدد النقاط" />
        <Profile_Btns title="تبديل النقاط" action={goToPointsPage} />
        <Profile_Btns title="سجل المشتريات" action={goToPointsPage} /></div>}
      </div>
      <Dashboard />
    </div>
  );
};

export default Profile;