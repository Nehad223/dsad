import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Selector_Cat = ({value,setValue}) => {
  const [catges, setCatges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://market-cwgu.onrender.com/categorylist/');
        setCatges(res.data); 
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <div className='row input mt-1'>
        <div className='col-4'></div>
        <div className='col-4'>
          <select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value={0}>اختر الكاتيغوري</option>
            {catges.map((cat, index) => (
              <option key={index} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className='col-1 mt-1'>
          <h1 className='text'>الكاتيغوري</h1>
        </div>
      </div>
    </div>
  )
}

export default Selector_Cat
