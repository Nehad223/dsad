import React from 'react'
import { useCart } from "../context/CartContext";

const TotalPrice_btn = () => {
      const { cart, updateQuantity, clearCart } = useCart();
        const totalPrice = Object.values(cart).reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
  return (
    <div className='TotalPrice_Btn'>
        <div className='totalPrice'><p>{totalPrice.toLocaleString()}</p></div>
        <div className='totalPrice_Word'><p>المجموع</p></div>

      
    </div>
  )
}

export default TotalPrice_btn
