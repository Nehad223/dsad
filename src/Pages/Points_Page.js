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
  const [photo_url, setPhotoUrl] = useState("");
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const { userData } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://market-cwgu.onrender.com/getpointitems/");
        setDataPoints(Object.values(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPoints = async () => {
      if (!userData?.id) return;

      try {
        const res = await axios.get(`https://market-cwgu.onrender.com/bot/getpoints/${userData.id}/`);
        setPoints(res.data.points);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPoints();
  }, [userData?.id]);
  useEffect(() => {
    const fetchPhoto = async () => {
      if (!userData?.id) return;

      const cachedPhoto = sessionStorage.getItem("user_photo");
      if (cachedPhoto) {
        setPhotoUrl(cachedPhoto);
        return;
      }

      try {
        const resPh = await axios.get(`https://market-cwgu.onrender.com/bot/getphoto/${userData.id}/`);
        setPhotoUrl(resPh.data.photo_url);
        sessionStorage.setItem("user_photo", resPh.data.photo_url);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPhoto();
  }, [userData?.id]);


  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
    document.documentElement.style.setProperty("--home", "#9CD5C1");
    document.documentElement.style.setProperty("--profile", "#1C458D");
  }, []);

  if (loading) {
    return (
      <div className="out">
        <div className="in1_Profile">
          <Logo_Img className="Logo_in1_Profile" />
        </div>
        <div className="in2"></div>
      </div>
    );
  }

  return (
    <div className="out">
      <div className="in1_Profile">
        <Logo_Img className="Logo_in1_Profile" />
        {photo_url && <Profile_Img src={photo_url} />}
      </div>
      <div className="in2">
        <div className="inf_Points mb-2">
          <h1 className="mt-5">
            {userData?.first_name} {userData?.last_name || ""}
          </h1>
          <p>{userData?.id} (ID Num)</p>
          {points !== undefined && (
            <Points_Number points={points} title="عدد النقاط" />
          )}
        </div>

        {photo_url && (
          <Packeges items={dataPoints} currency="points" type="points" />
        )}
      </div>
      <Dashboard />
    </div>
  );
};

export default Points_Page;
