import React, { useEffect, useState } from "react";
import logo from "../Assests/logo.png";
import "../style/All.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Start_Page = () => {
  const navigate = useNavigate();
  const { setUserData, userData } = useCart();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const handleTelegramAuth = () => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      if (tg.initDataUnsafe?.user) {
        const { id, first_name, last_name, photo_url } = tg.initDataUnsafe.user;
        const newUser = { id, first_name, last_name, photo_url };
        setUserData(newUser);
      }
    }
    setIsAuthChecked(true); // تم التحقق من المصادقة
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
        if (isAuthChecked && userData) {
          navigate("/dsad/home");
        }
      }, 2000);
    }
  }, [navigate, isAuthChecked, userData]); // 🔹 أضفنا `isAuthChecked` لضمان التحقق قبل التوجيه

  return (
    <div className="Start_Page">
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
};

export default Start_Page;
