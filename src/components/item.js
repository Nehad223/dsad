import React from 'react';
import { useCart } from './CartContext';
import LazyImage from './LazyImage'; // استيراد LazyImage

const Item = (props) => {
  const { addToCart } = useCart();

  return (
    <div className='Item mb-4'>
      <LazyImage
        className='Item_Image'
        src={`https://res.cloudinary.com/dgocqho3b/${props.item.photo}`}
        alt={props.item.name}
      />
      <div className='Item_inf'>
        <h5 className='Item_Name'>{props.item.name}</h5>
        <p className='Item_Price'>{props.item.price.toLocaleString()}</p>
      </div>
      {/*
      <button
        onClick={() => addToCart(props.item)}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        ➕ إضافة للسلة
      </button>*/}
    </div>
  );
}

export default Item;
