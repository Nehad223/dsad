import React from 'react';
import item_Img from './Assests/item.png';
const Item_Package = (props) => {
  return (
    <div className='Item_Package'>
      <img  src={`https://res.cloudinary.com/dgocqho3b/${props.items.photo}`} className='Item_Image' />
      <div className='Item_Info_Pack'>
        <div className='Item_Price_Pack_Box' ><h5 className='Item_Price_Pack'>{props.items.price}</h5></div>
        
        <h1 className='Item_Pack_Name'>{props.items.name}</h1>
        </div>
    </div>
  )
}

export default Item_Package

