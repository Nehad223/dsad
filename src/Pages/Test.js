import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Test = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);

  const DD = () => {
          toast.error(" نقاطك غير كافية لإتمام عملية الشراء");
    
  };

  return (
    <div>
      <button onClick={DD}>gg</button>
      <ToastContainer rtl position="top-center" autoClose={3000} />
    </div>
  );
};

export default Test;
