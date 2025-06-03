import React, { useEffect, useState } from "react";
import Cart_point from './Cart_Point';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from "../context/CartContext";
import axios from "axios";
const Form = () => {
  const{cart,clearCart,userData}=useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    profile_id: 1345963635,
    active_type: "price",
    items: transformItems(cart,"items"),
    packages:transformItems(cart,"packages"),
    name: "",
    phone_number: "",
    address: "", 
  });
  const [errors, setErrors] = useState({ name: "", phone_number: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const [confirmStage, setConfirmStage] = useState(false);
  
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
    const nameRegex = /^[a-zA-Z؀-ۿ]{3,}$/; 
    
    if (!formData.name || !nameRegex.test(formData.name)) 
      newErrors.name = "يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    
    if (!formData.address || !nameRegex.test(formData.address)) 
      newErrors.address ="يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    if (!formData.phone_number || formData.phone_number.length !== 9) 
      newErrors.phone_number = "يرجى ادخال رقم موبايل صالح";
    
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };
function transformItems(cartDict, type) {
  const items = [];

  for (const key in cartDict) {
    const item = cartDict[key];
    if (item.type === type) {
      items.push({
        [`${type.slice(0, -1)}_id`]: item.id,
        quantity: item.quantity
      });
    }
  }

  return items;
}



const handleConfirm = async () => {
  if (isSubmitting) return; 

  if (!validateForm()) return;


  try {
    await axios.post(
      'https://market-cwgu.onrender.com/createorder/',
      formData
    );
    setIsSubmitting(true); 
    toast.success("تم ارسال الطلب بنجاح");
    clearCart();
        setTimeout(() => {
      navigate('/dsad/home');
    }, 1500);
  } catch (error) {
    console.error(error);
    toast.error("حصل خطأ أثناء ارسال الطلب، الرجاء المحاولة لاحقاً");
    setConfirmStage(false);
  } finally {
    setIsSubmitting(false); 
    

  }
};



  const handleSubmit =async(event) => {


    event.preventDefault(); 
    setConfirmStage(true);
    setSubmitted(true);
    
  };

  const handleCancel = () => {
    setConfirmStage(false);
    setSubmitted(false);
  };
  useEffect(()=>{ setConfirmStage(false);
      setSubmitted(false);},[])

  return (
    <div className="form-box">
          <ToastContainer rtl position="top-center" autoClose={3000} />
      <form onSubmit={handleSubmit}  className={`mt-4 ${confirmStage ? 'blurred' : ''}`}>
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
        
        <div className="mt-5">
          <button className="oreder_btn_cart  mx-4" type="submit"
          
          >شراء</button>
        </div>
      </form>
                 {confirmStage && (
  <div className="form-overlay2">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex space-x-4 ">
            <h1 className="Confirm_Buy_Text">تأكيد عملية الشراء</h1>
            <button
              type="button"
              className="btn btn-success mx-4 mt-3"
              onClick={handleConfirm}
            >
              تأكيد
            </button>
            <button
              type="button"
              className=" btn btn-danger mx-4 mt-3"
              onClick={handleCancel}
            >
              إلغاء
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
