import React from "react";
import Item_Package from "./Item_Package";

const Packeges = (props) => {
  return (
      <div className="items_Packages ">
        {props.items.map((item, index) => (
         
            <Item_Package items={item} currency={props.currency} />
       
        ))}
        <div className="spacer" style={{ height: "70px" }}></div>
      </div>

  );
};

export default Packeges;

