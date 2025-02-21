import { useEffect, useState } from "react";
import Error_auth from "./Error_auth";

const TelegramAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // تحقق من وجود Telegram.WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      
      // تحقق من وجود بيانات المستخدم في initDataUnsafe
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        setUser(tg.initDataUnsafe.user);
      } 
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>OK</h1>
        </div>
      ) : (
        <Error_auth />
      )}
    </div>
  );
};

export default TelegramAuth;
