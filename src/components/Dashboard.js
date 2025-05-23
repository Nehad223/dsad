import React from "react";
import { Icon, CartIcon } from "./HomeIcon";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const icons = ["home","profile","cart"];
  const navigate = useNavigate();

  function Make_All_UnActive() {
    const root = document.documentElement;
    icons.forEach((icon) => {
      root.style.setProperty(`--${icon}`, "#9CD5C1");
    });
  }

  function Make_Active(icon) {
    const root = document.documentElement;
    Make_All_UnActive();
    root.style.setProperty(`--${icon}`, "#1C458D");
    navigate(`/dsad/${icon}`);
  }

  return (
    <div className="Dashboard">
      <button onClick={() => Make_Active("home")} className="Btn_Icons">
        <Icon name="home" size={25} />
      </button>
      <div onClick={()=> Make_Active("cart")}>
        <CartIcon />
      </div>
      <button className="Btn_Icons" onClick={() => Make_Active("profile")}>
        <Icon name="profile" size={20} />
      </button>
    </div>
  );
};

export default Dashboard;
