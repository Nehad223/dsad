import React from 'react';
import Item_Package from './Item_Package';

const Packeges = (props) => {
  return (
    <div>
      <div className="items_Packages">
  {props.items.map((item, index) => (
    <div key={index} className=" ">
      <Item_Package items={item}  />
    </div>
    
  ))}
</div>

    </div>
  )
}

export default Packeges;


