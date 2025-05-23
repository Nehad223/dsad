import React, { useEffect, useState } from 'react';
import Logo_Img from '../components/Logo_Img';
import Dashboard from '../components/Dashboard';
import TotalPrice_btn from '../components/TotalPrice_btn';
import Item_Cart from '../components/item_Cart';
import Form_Cart from '../components/Form_Cart';
import Form from '../components/Form';

const Cart = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--main', 'white');
  }, []);

  return (
    <div>
      <div className={`out ${showForm ? 'blurred' : ''}`}>
        <div className="in1">
          <Logo_Img class="Logo_in1" />
        </div>
        <div className="in_Cart">
          <TotalPrice_btn />
          <Item_Cart />
          <button
            className="oreder_btn_cart mt-5"
            onClick={() => setShowForm(true)}
          >
            اطلب الان
          </button>
          <div className="space"></div>
        </div>
        <Dashboard />
      </div>

      {showForm && (
        <div className="form-overlay">
          <Form_Cart/>
        </div>
      )}
    </div>
  );
};

export default Cart;
