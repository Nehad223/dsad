import React, { useEffect, useState } from "react";
import logo from "../Assests/logo.png";
import "../style/All.css";
import { useNavigate } from "react-router-dom";

const Start_Page = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first_time") === null;
    if(isFirstTime){setTimeout(()=>{navigate("/dsad/conformation");},2000)}
    else{setTimeout(()=>{navigate("/dsad/home");},2000)}
    

        
  }, []);

  return (
    <div className="Start_Page">
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
};

export default Start_Page;

