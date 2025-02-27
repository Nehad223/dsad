import React from 'react'
import item_Img from './Assests/item.png'
const Item = (props) => {
  return (
    <div className='Item'>
        <img className='Item_Image'    src={item_Img} />
        <div className='Item_inf'>
            <h5 className='Item_Name'>{props.item.name}</h5>
            <p className='Item_Price'>{props.item.price.toLocaleString()}</p>
        </div>

      
    </div>
  )
}

export default Item;

