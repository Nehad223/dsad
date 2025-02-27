import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "./All.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import axios from "axios";
import Nav from "./Nav";
import Packeges from "./Packeges";
import Doctors_Students from "./Doctors";
import Logo from "./Assests/logo.png";

global.Helmet = Helmet;
var root = document.querySelector(":root");

const Home_Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    root.style.setProperty("--main", "white");

    axios
      .get("https://market-cwgu.onrender.com/bot/homepage/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    axios
      .get("https://market-cwgu.onrender.com/packages/")
      .then((response) => {
        setPackagesData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  // 🔍 فلترة العناصر بناءً على البحث
  const filterItems = (items) => {
    if (!searchQuery.trim()) return items; 

    return items
      .map((category) => {
        let filteredStudentItems = [];
        let filteredDoctorItems = [];

        if (category.limited_student_items) {
          filteredStudentItems = category.limited_student_items.filter((item) =>
            item.name?.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        if (category.limited_doctor_items) {
          filteredDoctorItems = category.limited_doctor_items.filter((item) =>
            item.name?.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        return {
          ...category,
          limited_student_items: filteredStudentItems,
          limited_doctor_items: filteredDoctorItems,
        };
      })
      .filter(
        (category) =>
          category.limited_student_items.length > 0 ||
          category.limited_doctor_items.length > 0
      );
  };

  const filterPackages = (packages) => {
    if (!searchQuery.trim()) return packages;
    return packages.filter((pkg) =>
      pkg.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  function Render_Result() {
    if (selectedValue === 0) {
      return <Doctors_Students items={filterItems(data)} doctor_student={1} />;
    } else if (selectedValue === 1) {
      return <Doctors_Students items={filterItems(data)} doctor_student={2} />;
    } else {
      return <Packeges items={filterPackages(packagesData)} />; // ✅ تمرير البكجات المفلترة
    }
  }

  return (
    <div className="out">
      <div className="in1">
        <img src={Logo} width="75px" height="75px" className="Logo_in1" />
      </div>

      <div className="Search_Box">
        <Search className="Search_Logo " />
        <input
          type="text"
          placeholder="Search"
          className="Search_Input focus:outline-none focus:ring-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
