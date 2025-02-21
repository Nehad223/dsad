import { useEffect, useState } from "react";
import Error_auth from "./Error_auth";
import '../App.css';
const TelegramAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const tg = window?.Telegram?.WebApp; 
      const userData = tg.initDataUnsafe?.user;
      if (userData) {
        setUser(userData);
      } 
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      {user ? <h1>OK</h1> : <Error_auth />}
    </div>
  );
};

export default TelegramAuth;
