import React, { useState } from "react";

const Nav = ({ onSelect }) => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ["أطباء", "طلاب", "بكجات"];
  const values = [0, 1, 2];

  const handleClick = (index) => {
    setActiveButton(index);
    onSelect(values[index]);
  };

  return (
    <div className="NavBar">
      {buttons.map((text, index) => (
        <button
          key={index}
          className="Button_Nav"
          onClick={() => handleClick(index)}
          style={{
            color: activeButton === index ? "#1C458D" : "#77838F",
            backgroundColor: activeButton === index ? "white" : "#F5F5F5",
            border: activeButton === index ? "2px solid white" : "0px solid ",
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Nav;
