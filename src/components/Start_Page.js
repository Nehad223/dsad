import React, { useEffect, useState } from "react";
import logo from "./Assests/logo.png";
import "./All.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Start_Page = () => {
  const [data, setData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const botResponse = await axios.get(
          "https://market-cwgu.onrender.com/bot/homepage/"
        );
        const packagesResponse = await axios.get(
          "https://market-cwgu.onrender.com/packages/"
        );

        setData(botResponse.data);
        setPackagesData(packagesResponse.data);
        setIsLoading(false);

        navigate("/dsad/conformation", {
          state: { data: botResponse.data, packages: packagesResponse.data },
        });
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="Start_Page">
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
};

export default Start_Page;

