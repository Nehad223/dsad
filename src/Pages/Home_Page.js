import React, { useEffect, useState,lazy } from "react";
import axios from "axios";
import "../style/All.css";
import Search_Box from "../components/Search_Box";
import { useLocation } from "react-router-dom";
import Logo_Img from "../components/Logo_Img";
const Dashboard = lazy(() => import("../components/Dashboard"));
const Nav = lazy(() => import("../components/Nav"));
const Packeges = lazy(() => import("../components/Packeges"));
const Doctors_Students = lazy(() => import("../components/Doctors"));
const Home_Page = () => {
  const [data, setData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState(0);
  const location = useLocation(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedData = sessionStorage.getItem("botData");
        const savedPackages = sessionStorage.getItem("packagesData");

        if (savedData && savedPackages) {

          setData(JSON.parse(savedData));
          setPackagesData(JSON.parse(savedPackages));
        }

  
        const botResponse = await axios.get("https://market-cwgu.onrender.com/bot/homepage/");
        const packagesResponse = await axios.get("https://market-cwgu.onrender.com/packages/");


        if (
          JSON.stringify(botResponse.data) !== savedData ||
          JSON.stringify(packagesResponse.data) !== savedPackages
        ) {
          
          setData(botResponse.data);
          setPackagesData(packagesResponse.data);

   
          sessionStorage.setItem("botData", JSON.stringify(botResponse.data));
          sessionStorage.setItem("packagesData", JSON.stringify(packagesResponse.data));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [location.key]); 



  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  function Render_Result() {
    if (selectedValue === 0) {
      return <Doctors_Students items={data} doctor_student="doctor" />;
    } else if (selectedValue === 1) {
      return <Doctors_Students items={data} doctor_student="student" />;
    } else {
      return <Packeges items={packagesData} currency="sp" />;
    }
  }


  return (
    <div className="out">
      <div className="in1">
        <Logo_Img class="Logo_in1" />
        
      </div>
      <Search_Box />
      <div className="in2">
        <Nav onSelect={handleSelection} />
        {Render_Result()}
      </div>
      <Dashboard />
    </div>
  );
};

export default Home_Page;
