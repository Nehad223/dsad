import React, { useEffect, useState } from "react";
import Logo from "../Assests/logo.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { useCart } from "../context/CartContext";
import Packeges from "../components/Packeges";
import Points_Number from "../components/Points_Number";
import axios from "axios";
import Logo_Img from "../components/Logo_Img";
import Profile_Img from "../components/Profile_Img";
const Points_Page = () => {
  const [dataPoints, setDataPoints] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://market-cwgu.onrender.com/getpointitems/"
        );
        console.log("Fetched data:", response.data);
        setDataPoints(Object.values(response.data)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);
  const { userData } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    const handleBackButton = () => {
      navigate(-1); 
    };

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.BackButton.show(); 
      window.Telegram.WebApp.BackButton.onClick(handleBackButton); 

      return () => {
        window.Telegram.WebApp.BackButton.hide();
        window.Telegram.WebApp.BackButton.offClick(handleBackButton);
      };
    }
  }, [navigate]);

  return (
    <div className="out">
    <div className="in1_Profile">
    <Logo_Img class={"Logo_in1_Profile"} />
    {userData.photo_url && (
          <Profile_Img src={userData.photo_ur} />
        )}
    </div>
      <div className="in2">
        <div className="inf_Points">
          <h1 className="mt-5">
            {userData.first_name} {userData.last_name ? userData.last_name : ""}
          </h1>
          <p>{userData.id} (ID Num)</p>
          <Points_Number/>
        </div>
        <Packeges items={dataPoints} currency="points" />
      </div>
      <Dashboard />
    </div>
  );
};

export default Points_Page;
