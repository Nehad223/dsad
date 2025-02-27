import React, { useState } from 'react';

const Nav = ({ onSelect }) => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ['أطباء','طلاب', 'بكجات'];
  const values = [0, 1, 2]; // القيم المتوافقة مع الأزرار

  const handleClick = (index) => {
    setActiveButton(index);
    onSelect(values[index]); // إرسال القيمة المتوافقة مع الزر للأب
  };

  return (
    <div className="NavBar">
      {buttons.map((text, index) => (
        <button
          key={index}
          className="Button_Nav"
          onClick={() => handleClick(index)}
          style={{
            color: activeButton === index ? 'blue' : 'gray',
            backgroundColor: activeButton === index ? 'white' : 'hwb(0 84% 16%)',
            border: activeButton === index ? '2px solid white' : '0px solid ',
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Nav;
