import { useEffect, useState } from "react";
import Error_auth from "./Error_auth";

const TelegramAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        setUser(tg.initDataUnsafe.user);
      } 
    } 
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1> ID: {user.id}</h1>
          <h2> Username: {user.username ? `@${user.username}` : "No UserName"}</h2>
        </div>
      ) : (
        <Error_auth />
      )}
    </div>
  );
};

export default TelegramAuth;
