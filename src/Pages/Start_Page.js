import React, { useEffect,useState } from "react";
import logo from "../Assests/logo.png";
import "../style/All.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Start_Page = () => {
  const navigate = useNavigate();
  const { setUserData,userData } = useCart();
  const [user,setUser]=useState({});

  const handleTelegramAuth = () => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      if (tg.initDataUnsafe?.user) {
        const { id, first_name, last_name, photo_url } = tg.initDataUnsafe.user;
        const newUser = { id, first_name, last_name, photo_url };
        setUser(newUser);
        setUserData(newUser);
      }
    } 
  };

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first_time") === null;
    handleTelegramAuth();

    if (isFirstTime) {
     
      localStorage.setItem("first_time", "false");
      setTimeout(() => {
        navigate("/dsad/conformation");
      }, 2000);
    } else {
      setTimeout(() => {
        if(userData){
          navigate("/dsad/home"); 
        }
      }, 2000);
    }
  }, [navigate]);

  return (
    <div className="Start_Page">
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
};

export default Start_Page;

