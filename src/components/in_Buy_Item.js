import React, { useState } from 'react';
import Points_Number from './Points_Number';
import { useCart } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import Cart from './Cart_Point'
const In_Buy_Item = (props) => {
  const parmas=useParams();
  const type=parmas.itemORpackage;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const confirmAdd = () => {
    addToCart(props.item,quantity,type);
    console.log(props.item,quantity,type)
  };

  return (
    <div className='in_Buy_Item'>
      <Points_Number title={props.item.name} points={props.item.price} />
      {type=="packages"?
      <div> <h1 className='mt-4 Name_Buy'>بكج {props.item.name}</h1>
      <h1 className='Contents_Packages'>المحتويات</h1>
      </div>
      :
       <h1 className='mt-4 Name_Buy'>{props.item.name}</h1>}
      <p className='mt-5 kk'>{props.item.description}</p>
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
