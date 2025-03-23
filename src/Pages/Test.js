import React, { useEffect } from 'react';

const Test = ({ quantity, setQuantity }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--main", "white");
  }, []);

  return (
    <div className='qq'>
      <button type="button" className='add' onClick={() => setQuantity(quantity + 1)}>+</button>
      <span>{quantity!=null? quantity:1}</span>
      <button type="button" className='sub' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
    </div>
  );
}

export default Test;
