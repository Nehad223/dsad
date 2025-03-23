import React, { useState } from "react";
import Test from "../Pages/Test";
const Form = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    quantity: 1, 
  });


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("🚀 البيانات المدخلة:", formData);
  };
  const handleQuantityChange = (newQuantity) => {
    setFormData({ ...formData, quantity: newQuantity });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>الاسم الكامل</h1>
        <input
          type="text"
          name="fullName"
          placeholder="أدخل الاسم"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <h1>رقم الموبايل</h1>
        <input
          type="text"
          name="phone"
          placeholder="رقم الموبايل"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <h1>العنوان</h1>
        <input
          type="text"
          name="address"
          placeholder="العنوان"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="ff">
        <Test quantity={formData.quantity} setQuantity={handleQuantityChange} />
          <button className="submit" type="submit">شراء</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
