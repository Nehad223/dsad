import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Search_Box from '../components/Search_Box';
import Logo_Img from '../components/Logo_Img';
import Packeges from '../components/Packeges';
import '../style/All.css';
import Dashboard from '../components/Dashboard';
import { useLocation } from 'react-router-dom';
import TelegramBackButton from '../components/Tele_Back_Btn';

const Catg = () => {

    const location = useLocation();
    const name = location.state?.name || "";
    const description = location.state?.description || "";
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]); 
    TelegramBackButton();
    useEffect(() => {
        document.documentElement.style.setProperty("--main", "white");
      }, []);
    useEffect(() => {
        setIsLoading(true);
        setError(null);  

        console.log(`Fetching: category=${params.catgId}, type=${params.doctorORstudent}`);
        
        axios.get(`https://market-cwgu.onrender.com/category/${params.catgId}/${params.doctorORstudent}/`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [params.catgId, params.doctorORstudent]);
    

    return (
        <div className="out">
      <div className="in1">
        <Logo_Img class="Logo_in1"/>   
      </div>
      <Search_Box />
      <div className="in2">
        <div className='title_Catg mt-5'>
            <h1>{name}</h1>
            <p>{description}</p>

        </div>
      <Packeges items={data} currency="sp" />
      </div>
      <Dashboard />
    </div>
    );
};

export default Catg;
