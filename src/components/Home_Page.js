import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./All.css";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Packeges from "./Packeges";
import Doctors_Students from "./Doctors";
import Logo from "./Assests/logo.png";

const Home_Page = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
  
        const cachedData = sessionStorage.getItem("botData");
        const cachedPackages = sessionStorage.getItem("packagesData");

        if (cachedData && cachedPackages) {
          setData(JSON.parse(cachedData));
          setPackagesData(JSON.parse(cachedPackages));
          setIsLoading(false);
        } else {
          const botResponse = await axios.get("https://market-cwgu.onrender.com/bot/homepage/");
          const packagesResponse = await axios.get("https://market-cwgu.onrender.com/packages/");
          setData(botResponse.data);
          setPackagesData(packagesResponse.data);
          setIsLoading(false);

          // تخزين البيانات في sessionStorage
          sessionStorage.setItem("botData", JSON.stringify(botResponse.data));
          sessionStorage.setItem("packagesData", JSON.stringify(packagesResponse.data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  const handleSearch = () => {
    navigate(`/dsad/search`);
  };


  function Render_Result() {
    if (selectedValue === 0) {
      return <Doctors_Students items={data} doctor_student={1} />;
    } else if (selectedValue === 1) {
      return <Doctors_Students items={data} doctor_student={2} />;
    } else {
      return <Packeges items={packagesData} />;
    }
  }


  return (
    <div className="out">
      <div className="in1">
        <img src={Logo} width="92px" height="41px" className="Logo_in1" />
      </div>

      <div className="Search_Box" onClick={handleSearch}>
        <Search className="Search_Logo" onClick={handleSearch} />
        <input
          type="button"
          value="Search"
          className="Search_Input focus:outline-none focus:ring-0"
          onClick={handleSearch}
        />
      </div>

      <div className="in2">
        <Nav onSelect={handleSelection} />
        {Render_Result()}
      </div>
      <Dashboard />
    </div>
  );
};

export default Home_Page;
