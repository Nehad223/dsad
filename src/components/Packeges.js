import React from "react";
import Item_Package from "./Item_Package";
import Item_Points from './Item_Points';
import Item_Search from './Item_search';
const Packeges = (props) => {
  const F=()=>{
    if(props.type=="packages"){
      return       <div className="items_Packages">
        {props.items.map((item, index) => (   
            <Item_Package items={item} currency={props.currency} />
        ))}
      </div>
    }
        else if(props.type=="points"){
      return       <div className="items_Packages">
        {props.items.map((item, index) => (   
            <Item_Points items={item} currency={props.currency} />

        ))}
      </div>
    }
            else if(props.type=="items"){
      return       <div className="items_Packages">
        {props.items.map((item, index) => (   
            <Item_Search items={item} currency={props.currency} />
            
        ))}
      </div>
    }
  }
  return (
    <div>
      {F()}

      <div className="spacer" style={{ height: "75px" }}></div>
    </div>
  );
};

export default Packeges;

