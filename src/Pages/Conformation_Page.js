import React, { useState, useEffect } from "react";
import "../style/All.css";
import { useNavigate } from "react-router-dom";
import mobile from '../Assests/mobile.png';

const Conformation_Page = () => {
  const navigate = useNavigate();
  const [isTelegramUser, setIsTelegramUser] = useState(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      try {
        window.Telegram.WebApp.ready();
        const user = window.Telegram.WebApp.initDataUnsafe?.user;


        if (user && user.id) {
          setIsTelegramUser(true);
        }
      } catch (err) {
        console.error("Telegram WebApp Error:", err);
      }
    }
  }, []);

  const handleTelegramAuth = () => {
    if (isTelegramUser) {
      navigate("/dsad/home");
    } else {
      alert("الرجاء فتح الصفحة من خلال تطبيق تيليغرام");
    }
  };

  return (
    <div className="container Conformation_Page">

      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <img src={mobile} alt="Phone" className="image" />
        </div>
        <div className="col-12 text-center ">
          <h1 className="Card_Title">Dental.kit أهلا بك في</h1>
          <p className="Card_Par">
            Lorem ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem ipsum has been <br />
            the industry’s standard dummy text ever since
          </p>
                <button className="Card_Button" onClick={handleTelegramAuth}>
        متابعة
      </button>
        </div>
      </div>
    </div>
  );
};

export default Conformation_Page;
