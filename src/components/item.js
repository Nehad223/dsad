import React from 'react'
const Item = (props) => {
  return (
    <div className='Item mb-4 '>
        <img className='Item_Image'    src={`https://res.cloudinary.com/dgocqho3b/${props.item.photo}`} referrerPolicy="no-referrer"   loading="lazy"/>
        <div className='Item_inf'>
            <h5 className='Item_Name'>{props.item.name}</h5>
            <p className='Item_Price'>{props.item.price.toLocaleString()}</p>
        </div>
    </div>
  )
}

export default Item;

