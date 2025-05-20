import React from 'react';
import Logo_Img from '../components/Logo_Img';
import Dashboard from '../components/Dashboard';
import { useEffect } from 'react';
const Test = () => {
    useEffect(() => {
      document.documentElement.style.setProperty("--main", "white");
    }, []);
  return (
    <div>
          <div className="out">
      <div className="in1">
        <Logo_Img class="Logo_in1" />
      </div>
      <div className="in2">
      </div>
      <Dashboard />
    </div>
    </div>
  )
}

export default Test
