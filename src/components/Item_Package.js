import React from "react";
import { useNavigate } from "react-router-dom";
const Item_Package = (props) => {
const navigate=useNavigate();
  const x=400000000;
const Go_To_Item=()=>{
  navigate(`buy/packages/${props.items.id}`)}
  return (
    <div className="Item_Package" onClick={Go_To_Item} >
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


