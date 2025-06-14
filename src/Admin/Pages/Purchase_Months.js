import axios from "axios";
import React, { useEffect, useState } from "react";
import Rectangle from '../components/Rectangle.js'
import '../../style/All.css';
const PurchaseMonths = () => {
  const [months, setMonths] = useState([]);

        useEffect(() => {
          document.documentElement.style.setProperty("--main", "white");
      
      
        }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("https://market-cwgu.onrender.com/finishedorders/");
        const uniqueMonths = new Set();

        res.data.forEach(order => {
          const date = order["تاريخ الطلب:"];
          if (date) {
            const [year, month] = date.split(" ")[0].split("-");
            uniqueMonths.add(`${parseInt(month)}/${year}`);
          }
        });

    
        const sorted = Array.from(uniqueMonths).sort((a, b) => {
          const [mA, yA] = a.split("/").map(Number);
          const [mB, yB] = b.split("/").map(Number);
          return yB - yA || mB - mA;
        });

        setMonths(sorted);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div >
      <h2 className="add_text mt-5">سجل المشتريات حسب الأشهر</h2>
      <div className="grid-container">
        {months&& months.map((key, idx) => (
       <Rectangle key={idx} value={key} redrict={`${key}`} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    direction: "rtl",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  rectangle: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    padding: "30px 20px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.2s",
  },
};

export default PurchaseMonths;

