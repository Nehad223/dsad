import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import Error_auth from "./Error_auth";
import Start_Page from "./Start_Page"
const TelegramAuth = () => {
  const navigate = useNavigate();
  const { setUserData } = useCart();
  const [user, setUser] = useState(null);

    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      if (tg.initDataUnsafe?.user) {
        const { id, first_name, last_name, photo_url } = tg.initDataUnsafe.user;
        const newUser = { id, first_name, last_name, photo_url };

        setUser(newUser);
        setUserData(newUser); 

        navigate("/dsad/home");
      }
    }

};



