import React, { useEffect, useState } from "react";
import logo from "../Assests/logo.png";
import "../style/All.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Start_Page = () => {
  const navigate = useNavigate();
  const { setUserData, userData } = useCart();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);


  useEffect(() => {
    const firstTime = localStorage.getItem("first_time") === null;
    setIsFirstTime(firstTime);

    if (firstTime) {
      localStorage.setItem("first_time", "false");
    }
  }, []);


  useEffect(() => {
    const handleTelegramAuth = async () => {
      if (window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;

        if (tg.initDataUnsafe?.user) {
          const { id, first_name, last_name, photo_url } = tg.initDataUnsafe.user;
          const newUser = { id, first_name, last_name, photo_url };
          setUserData(newUser);
        }
      }
      setIsAuthChecked(true);
    };

    handleTelegramAuth();
  }, [setUserData]);


  useEffect(() => {
    if (!isAuthChecked) return;

    setTimeout(() => {
      if (isFirstTime) {
        navigate("/dsad/conformation");
      } else {
        if (userData) {
          navigate("/dsad/home");
        }
      }
    }, 2000);
  }, [navigate, isFirstTime, userData, isAuthChecked]);

  return (
    <div className="Start_Page">
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
};

export default Start_Page;
