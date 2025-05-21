import React, { useState } from 'react';
import Points_Number from './Points_Number';
import { useCart } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import Cart from './Cart_Point'
import Price_Btn from './Price_Btn';
import { useNavigate } from 'react-router-dom';
const In_Buy_Item = (props) => {
  const navigat=useNavigate();
  const parmas = useParams();
  const type = parmas.itemORpackage;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const confirmAdd = () => {
    addToCart(props.item, quantity, type);
    console.log(props.item, quantity, type);
    navigat('/dsad/home')
  };

  return (
    <div className='in_Buy_Item'>
      <Price_Btn title={props.item.name} points={props.item.price} items={true} />
      
      {type === "packages" ? (
        <div>
          <h1 className='mt-4 Name_Buy'>بكج {props.item.name}</h1>
          <h1 className='Contents_Packages'>المحتويات</h1>
        </div>
      ) : (
        <h1 className='mt-4 Name_Buy'>{props.item.name}</h1>
      )}

      <p className='kk'>{props.item.description}</p>

      {/* Spacer ليدفش الزر لتحت */}
      <div className="spacer"></div>

      <div className='btns_buys'>
        <Cart quantity={quantity} setQuantity={setQuantity} />
        <button className='confirm_add' onClick={confirmAdd}>
          إضافة الى السلة
        </button>
      </div>
    </div>
  );
};

export default In_Buy_Item;

