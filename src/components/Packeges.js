import React from "react";
import Item_Package from "./Item_Package";

const Packeges = (props) => {
  return (
    <div>
      <div className="items_Packages">
        {props.items.map((item, index) => (   
            <Item_Package items={item} currency={props.currency} />
        ))}
      </div>
      <div className="spacer" style={{ height: "75px" }}></div>
    </div>
  );
};

export default Packeges;

