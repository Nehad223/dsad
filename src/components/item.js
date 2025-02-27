import React from 'react'

const Item = (props) => {
  return (
    <div className='Item'>
        <img className='Item_Image'    src={props.item.img} />
        <div className='Item_inf'>
            <h1>{props.item.name}</h1>
            <h1>{props.item.price}</h1>
        </div>

      
    </div>
  )
}

export default Item;

