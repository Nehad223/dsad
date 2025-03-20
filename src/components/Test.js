import React from "react";
import Logo from "./Assests/logo.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
const Test = () => {
  const { userData } = useCart();
  const navigate = useNavigate();
  const goToPointsPage = () => {
    navigate(`points`);
  };
  return (
    <div className="out">
      <div className="in1">
        <img
          src={Logo}
          width="91px"
          height="41px"
          className="Logo_in1_Profile"
        />
 
      </div>
      <div className="in2_Profile">
        <h1 className="mt-5">
      

        </h1>
        <p>(ID Num)</p>
        <button className="points_btn mb-5">
          <button className="num_points">400</button>
            <button className="name_points">عدد النقاط</button>
        </button>
        <button className="pro_btton dd" onClick={goToPointsPage}>
          تبديل النقاط
        </button>
        <button className="pro_btton"> سجل المشتريات</button>
      </div>
      <Dashboard />
    </div>
  );
};
export default Test;
