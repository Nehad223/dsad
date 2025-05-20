import React from 'react'
import { useNavigate } from 'react-router-dom';
const Item_Search = (props) => {
    const navigate=useNavigate();
const Go_To_Item=()=>{
  navigate(`buy/items/${props.items.id}`)}
  return (
    <div onClick={Go_To_Item}>
          <div className="Item_Package" >
            {props.item.photo && (      <img
        src={`https://res.cloudinary.com/dgocqho3b/${props.items.photo}`}
        className="Item_Image"
      />)}
  {props.item.photo && (
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
      </div>)}


    </div>
    </div>
  )
}

export default Item_Search;
