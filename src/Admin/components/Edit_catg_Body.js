import React, { useState, useEffect } from 'react';
import Rectangle_Edit_Catg from './Rectangle_Edit_Catg';
import axios from 'axios';

const Edit_catg_Body = (props) => {
  const [catges, setCatges] = useState([]);
  const [students, setStudents] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://market-cwgu.onrender.com/categorylist/');
        setCatges(res.data);

  
        const studentItems = res.data.filter(item => item.category_type === 'student');
        const doctorItems = res.data.filter(item => item.category_type === 'doctor');

        setStudents(studentItems);
        setDoctors(doctorItems);

        console.log('All:', res.data);
        console.log('طلاب:', studentItems);
        console.log('أطباء:', doctorItems);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {students && (<h1 className='add_text mt-3'>طلاب</h1>)}
      
      <div className='grid-container'>

        {students.map((item, index) => (
          <Rectangle_Edit_Catg key={index} value={item.name} redrict={`${item.category_type}/${item.id}`} />
        ))}
        <br/>



      </div>
      {doctors && (<h1 className='add_text mt-1'>اطباء</h1>)}
    
      <div className='grid-container mb-4  '>
                {doctors.map((item, index) => (
          <Rectangle_Edit_Catg key={`d-${index}`} value={item.name} redrict={`${item.category_type}/${item.id}`}  />
        ))}
</div>

    </div>
  );
};

export default Edit_catg_Body;
