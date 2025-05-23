import React from 'react';
import { useCart } from "../context/CartContext";

const Add_sub = ({ id, quantity }) => {
  const { updateQuantity } = useCart();

  return (
    <div className='add_sub_cart'>
      <button
        onClick={() => updateQuantity(id, -1)}
        className="sub_Cart"
        disabled={quantity === 1}
      >
        ➖
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => updateQuantity(id, 1)}
        className="add_Cart"
      >
        ➕
      </button>
    </div>
  );
};

export default Add_sub;
