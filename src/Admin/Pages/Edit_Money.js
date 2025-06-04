import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Rectangle_Edit_Catg from '../components/Rectangle_Edit_Catg';
const Edit_Money = () => {
  const [students, setStudents] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [catges, setCatges] = useState([]);
  const [loading, setLoading] = useState(true); 
    useEffect(() => {
      document.documentElement.style.setProperty("--main", "white");
  
  
    }, []);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("https://market-cwgu.onrender.com/bot/homepage/");
        setCatges(res.data);
        const studentItems = res.data.filter(item => item.category_type === 'student');
        const doctorItems = res.data.filter(item => item.category_type === 'doctor');
        setStudents(studentItems);
        setDoctors(doctorItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return (
      <div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1 className='add_text mt-5'>بضاعة بسعر</h1>

      <h1 className='add_text mt-3'>طلاب</h1>
      <div className='grid-container'>
     {students.map((catg, i) => (
  catg.items.map((item, j) => (
    <Rectangle_Edit_Catg
      key={`s-${i}-${j}`}
      value={item.name}
      redrict={`student/${item.id}`}
    />
  ))
))}
      </div>

      <h1 className='add_text  '>اطباء</h1>
      <div className='grid-container mb-1'>
      {doctors.map((catg, i) => (
  catg.items.map((item, j) => (
    <Rectangle_Edit_Catg
      key={`d-${i}-${j}`}
      value={item.name}
      redrict={`doctor/${item.id}`}
    />
  ))
))}

      </div>
    </div>
  );
};

export default Edit_Money;
