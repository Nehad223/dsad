import React, { useState } from "react";
import Cart_point from './Cart_Point';
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
name: "",
    phone: "",
    address: "", 
  });
  const [errors, setErrors] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      if (!/^[0-9]*$/.test(value)) return; 
      if (value.length > 9) return; 
    }
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = { name: "", phone: "", address: "" };
    const nameRegex = /^[a-zA-Z؀-ۿ]{3,}$/; 
    
    if (!formData.name || !nameRegex.test(formData.name)) 
      newErrors.name = "يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    
    if (!formData.address || !nameRegex.test(formData.address)) 
      newErrors.address ="يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    if (!formData.phone || formData.phone.length !== 9) 
      newErrors.phone = "يرجى ادخال رقم موبايل صالح";
    
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (event) => {
    navigate('/dsad/home');
    event.preventDefault(); 
    setSubmitted(true);
    
    if (!validateForm()) return;
    console.log(formData);
  };



  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} className="mt-4">
        <h1>الاسم الكامل</h1>
        <input
          type="text"
          name="name"
          placeholder="أدخل الاسم"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {submitted && errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
       
        <h1>رقم الموبايل</h1>
        <div className="phone_Num">
          <span>+963</span>
          <input
            type="text"
            name="phone"
            placeholder="رقم الموبايل"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {submitted && errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        
        <h1>العنوان</h1>
        <input
          type="text"
          name="address"
          placeholder="أدخل العنوان"
          value={formData.address}
          onChange={handleChange}
          required
        />
        {submitted && errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        
        <div className="mt-5">
          <button className="oreder_btn_cart  mx-4" type="submit">شراء</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
