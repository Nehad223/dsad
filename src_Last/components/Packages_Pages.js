import React from "react";
import Logo from "./Assests/logo.png";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Packages_Pages = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/dsad/search`);
  };
  return (
    <div className="out">
      <div className="in1">
        <img src={Logo} width="75px" height="75px" className="Logo_in1" />
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

      <div className="in2_Package">
        <h1>معدنيات</h1>
        <h2>معدنيات</h2>
      </div>

      <Dashboard />
    </div>
  );
};

export default Packages_Pages;
