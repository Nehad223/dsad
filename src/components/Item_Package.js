import React from 'react'
import item_Img from './Assests/item.png';
const Item_Package = () => {
  return (
    <div className='Item_Package'>
      <img  src={item_Img} className='Item_Image' />
      <div className='Item_Info_Pack'></div>
    </div>
  )
}

export default Item_Package
