import React, { useState } from 'react';
import Nav from './TestButton2'; // استدعاء الكمبوننت الابن

const ParentComponent = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <Nav onSelect={handleSelection} />
      <p>القيمة المحددة: {selectedValue}</p> {/* عرض القيمة المحددة */}
    </div>
  );
};

export default ParentComponent;
