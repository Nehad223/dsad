import React, { useEffect, useState } from "react";
import logo from "./Assests/logo.png";
import "./All.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Start_Page = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>{navigate("/dsad/conformation");},2000)

        
  }, []);

  return (
    <div className="Start_Page">
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
};

export default Start_Page;

