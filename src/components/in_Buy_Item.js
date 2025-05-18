import React, { useState } from 'react';
import Points_Number from './Points_Number';
import { useCart } from '../context/CartContext';
import Cart from './Cart_Point'
const In_Buy_Item = (props) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const confirmAdd = () => {
    addToCart(props.item, quantity);
    console.log(props.item,quantity)
  };

  return (
    <div className='in_Buy_Item'>
      <Points_Number title={props.item.name} points={props.item.price} />
      <h1 className='mt-4'>{props.item.name}</h1>
      <p>{props.item.description}</p>
      <div className='btns_buys'>
            <Cart quantity={quantity} setQuantity={setQuantity} />
        <button className='confirm_add' onClick={confirmAdd}>
          أضف للسلة
        </button>
      </div>

      </div>
  );
};

export default In_Buy_Item;
