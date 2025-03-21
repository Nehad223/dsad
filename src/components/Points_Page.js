import React, { useEffect, useState } from "react";
import Logo from "./Assests/logo.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useCart } from "./CartContext";
import Packeges from "./Packeges";
import axios from "axios";
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
      <div className="in2">
        <div className="inf_Points">
          <h1 className="mt-5">
            {userData.first_name} {userData.last_name ? userData.last_name : ""}
          </h1>
          <p>{userData.id} (ID Num)</p>
          <button className="points_btn mb-5">
            <button className="num_points">400</button>
            <button className="name_points">عدد النقاط</button>
          </button>
        </div>
        <Packeges items={dataPoints} currency="points" />
      </div>
      <Dashboard />
    </div>
  );
};

export default Points_Page;
