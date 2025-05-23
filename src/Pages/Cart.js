import React from 'react';
import Logo_Img from '../components/Logo_Img';
import Dashboard from '../components/Dashboard';
import { useEffect } from 'react';
import TotalPrice_btn from '../components/TotalPrice_btn';
import Item_Cart from '../components/item_Cart';

const Cart = () => {

    useEffect(() => {
      document.documentElement.style.setProperty("--main", "white");
    }, []);
  return (
    <div>
          <div className="out">
      <div className="in1">
        <Logo_Img class="Logo_in1" />
      </div>
      <div className="in_Cart">
        <TotalPrice_btn/>
        <Item_Cart/>
      </div>
      
      <Dashboard />
    </div>
    </div>
  )
}

export default Cart;
