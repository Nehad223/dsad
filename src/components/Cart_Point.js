import React, { useEffect } from 'react';

const Cart = ({ quantity, setQuantity }) => {


  return (
    <div className='qq'>
      <button type="button" className='add' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
      <span>{quantity!=null? quantity:1}</span>
      <button type="button" className='sub' onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}

export default Cart;
