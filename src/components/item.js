import React from 'react';

import LazyImage from './LazyImage'; // استيراد LazyImage

const Item = (props) => {

  return (
    <div className='Item mb-4'>
      <LazyImage
        className='Item_Image'
        src={`https://res.cloudinary.com/dgocqho3b/${props.item.photo}`}
        alt={props.item.name}
        placeholder="https://via.placeholder.com/150" // Placeholder image before the actual image is loaded
      />
      <div className='Item_inf'>
        <h5 className='Item_Name'>{props.item.name}</h5>
        <p className='Item_Price'>{props.item.price.toLocaleString()}</p>
      </div>
      {/* Commented out button */}
    </div>
  );
}

export default Item;