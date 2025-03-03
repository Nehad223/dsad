import { useEffect, useState } from "react";
import Error_auth from "./Error_auth";
import React, { useContext } from 'react';
import { CounterContext } from "../App";
const TelegramAuth = () => {
  const [user, setUser] = useState(null);
  const { setId } = useContext(CounterContext);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        setUser(tg.initDataUnsafe.user);
        setId(user.id);
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
