import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./All.css";
import Nav from "./Nav";
import Packeges from "./Packeges";
import Doctors_Students from "./Doctors";
import Logo from "./Assests/logo.png";

const Home_Page = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");

    axios
      .get("https://market-cwgu.onrender.com/bot/homepage/")
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

    axios
      .get("https://market-cwgu.onrender.com/packages/")
      .then((response) => setPackagesData(response.data))
      .catch((error) => setError(error));
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
        <img src={Logo} width="75px" height="75px" className="Logo_in1" />
      </div>

      <div className="Search_Box"  onClick={handleSearch}>

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
    </div>
  );
};

export default Home_Page;
