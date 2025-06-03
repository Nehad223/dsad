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
  const [data,setData]=useState({});
  const { userData } = useCart();
  const[loading,setLoading]=useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await axios.get(
          "https://market-cwgu.onrender.com/getpointitems/"
        );
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
              const resPh=await axios.get(`https://market-cwgu.onrender.com/bot/getphotoandpoints/${userData.id}/`);
        setData(resPh.data);

      } catch (error) {
        console.error(error);
      }
            finally{
        setLoading(false)
      }
    };
    fetchPoints();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
      document.documentElement.style.setProperty(`--home`, "#9CD5C1");
    document.documentElement.style.setProperty(`--profile`, "#1C458D");


  }, []);
  if(loading){
  return(
    <div>

    </div>
  )
}


  return (
    <div className="out">
      <div className="in1_Profile">
        <Logo_Img class={"Logo_in1_Profile"} />
        {data.photo_url && <Profile_Img src={data.photo_url} />}
      </div>
      <div className="in2">
        <div className="inf_Points mb-2">
          <h1 className="mt-5">
            {userData?.first_name} {userData?.last_name || ""}

          </h1>
          <p>{userData?.id} (ID Num)</p>
          {data.points !== undefined && <Points_Number points={data.points} title="عدد النقاط" />}
        </div>
{data.photo_url&& 
         <Packeges items={dataPoints} currency="points" type="points" />
}
      </div>
      <Dashboard />
    </div>
  );
};

export default Points_Page;
