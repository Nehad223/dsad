import React from "react";
const Item_Package = (props) => {
  return (
    <div className="Item_Package">
      <img
        src={`https://res.cloudinary.com/dgocqho3b/${props.items.photo}`}
        className="Item_Image"
      />

      <div className="Item_Info_Pack">
        <div className="Item_Price_Pack_Box">    
            {props.currency=="sp"? <h5 className="Item_Price_Pack">
              {props.items.price.toLocaleString()}
           <span>sp</span></h5> :<h5 className="Item_Price_Pack">
          {props.items.points}
            <span> &nbsp;نقطة</span>
        
           </h5>}
         
        </div>

        <h1 className="Item_Pack_Name">{props.items.name}</h1>
      </div>

    </div>
  );
};

export default Item_Package;


