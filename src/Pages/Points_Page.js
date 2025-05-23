import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Dashboard from "../components/Dashboard";
import Packeges from "../components/Packeges";
import Points_Number from "../components/Points_Number";
import axios from "axios";
import Logo_Img from "../components/Logo_Img";
import Profile_Img from "../components/Profile_Img";

const Points_Page = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [points, setPoints] = useState();
  const { userData } = useCart();
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://market-cwgu.onrender.com/getpointitems/"
        );
        console.log("Fetched data:", response.data);
        setDataPoints(Object.values(response.data)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPoints = async () => {
      if (!userData?.id) return; 
      try {
        const response = await axios.get(
          `https://market-cwgu.onrender.com/bot/getpoints/${userData.id}/`
        );
        setPoints(Object.values(response.data)); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchPoints();
  }, [userData]);

  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);

  useEffect(() => {
    // جلب الصورة مباشرة من Telegram كل مرة
    const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (user?.photo_url) {
      setPhotoUrl(user.photo_url);
    }
    console.log(photoUrl)
  }, []);

  return (
    <div className="out">
      <div className="in1_Profile">
        <Logo_Img class={"Logo_in1_Profile"} />
        {photoUrl && <Profile_Img src={photoUrl} />}
      </div>
      <div className="in2">
        <div className="inf_Points mb-2">
          <h1 className="mt-5">
            {userData?.first_name} {userData?.last_name || ""}
          </h1>
          <p>{userData?.id} (ID Num)</p>
          {points !== undefined && <Points_Number points={points} title="عدد النقاط" />}
        </div>

        {points !== undefined && <Packeges items={dataPoints} currency="points" type="points" />}
      </div>
      <Dashboard />
    </div>
  );
};

export default Points_Page;
