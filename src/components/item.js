import React from 'react';
import logo from './Assests/logo.png';
import LazyImage from './LazyImage';


const Item = (props) => {

  return (
    <div className='Item '>
      <LazyImage
        className='Item_Image'
        src={`https://res.cloudinary.com/dgocqho3b/${props.item.photo}`}
        alt={props.item.name}
        placeholder={logo} 
      />
      <div className='Item_inf'>
        <h5 className='Item_Name'>{props.item.name}</h5>
        <p className='Item_Price'>{props.item.price.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Item;

