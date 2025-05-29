import React, { useState } from "react";
import Cart_point from './Cart_Point';
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';

const Form = (props) => {
  const navigate=useNavigate();
    const { userData } = useCart();
  const [formData, setFormData] = useState({
    profile_id:userData.id,
    active_type: "point",
    point_items:[{
      point_item_id:props.id,
      quantity: 1, 
    }],
    name: "",
  phone_number: "",
    address: "",
    
  });
  const [errors, setErrors] = useState({ name: "", phone_number: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

const handleChange = (event) => {
  const { name, value } = event.target;

  if (name === "phone_number") {
    if (!/^[0-9]*$/.test(value)) return; 
    if (value.length > 9) return; 
  }

  setFormData({ ...formData, [name]: value });
};


  const validateForm = () => {
    let newErrors = { name: "", phone_number: "", address: "" };
    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]{3,}$/;
    
    if (!formData.name || !nameRegex.test(formData.name)) 
      newErrors.name = "يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    
    if (!formData.address || !nameRegex.test(formData.address)) 
      newErrors.address ="يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    if (!formData.phone_number || formData.phone_number.length !== 9) 
      newErrors.phone_number = "يرجى ادخال رقم موبايل صالح";
    
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

const handleSubmit = async (event) => {
  event.preventDefault(); 
  setSubmitted(true);
  
  if (!validateForm()) return;

  try {
    const response = await axios.post('https://market-cwgu.onrender.com/createorder/', formData);
    console.log(response.data);
    
    navigate('/dsad/home');
  } catch (error) {
    console.error('حدث خطأ أثناء الإرسال:', error);
    
  }
};


const handleQuantityChange = (newQuantity) => {
  setFormData({
    ...formData,
    point_items: [{
      ...formData.point_items[0],
      quantity: newQuantity
    }]
  });
};


  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            name="phone_number"
            placeholder="رقم الموبايل"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        {submitted && errors.phone_number && <p style={{ color: "red" }}>{errors.phone_number}</p>}
        
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
        
        <div className="ff">
          <Cart_point quantity={formData.point_items[0].quantity} setQuantity={handleQuantityChange} />
          <button className="submit" type="submit">شراء</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
