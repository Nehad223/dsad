import React from 'react';
import item_Img from './Assests/item.png';
const Item_Package = (props) => {
  return (
    <div className='Item_Package'>
      <img  src={item_Img} className='Item_Image' />
      <div className='Item_Info_Pack'>
        <h1 className='Item_Pack_Name'>{props.items}</h1>
        </div>
    </div>
  )
}

export default Item_Package

