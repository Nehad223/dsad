import React from 'react';
import logo from '../Assests/logo.png';
import LazyImage from './LazyImage';
import { useNavigate } from 'react-router-dom';
const Item = (props) => {
  const navigate=useNavigate();
const Go_To_Item=()=>{
  navigate(`buy/items/${props.item.id}`)
}
const x=100000000;
  return (
    <div className='Item' onClick={Go_To_Item}>
      <LazyImage
        className='Item_Image'
        src={`https://res.cloudinary.com/dgocqho3b/${props.item.photo}`}
        alt={props.item.name}
        placeholder={logo}
      />
      <div className='Item_inf'>
        <h5 className='Item_Name'>{props.item.name}</h5>

        <p className='Item_Price'>  <span style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>
    {props.item.price.toLocaleString()} sp
  </span></p>
      </div>
    </div>
  );
}

export default Item;
