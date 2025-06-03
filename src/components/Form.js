import React, { useState, useEffect } from "react";
import Cart_point from './Cart_Point';
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {
  const navigate = useNavigate();
  const { userData } = useCart();
  const [points, setPoints] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    profile_id: userData.id,
    active_type: "point",
    point_items: [{
      point_item_id: props.id_item,
      quantity: 1,
    }],
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
    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]{3,}$/;
    if (!formData.name || !nameRegex.test(formData.name))
      newErrors.name = "يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    if (!formData.address || !nameRegex.test(formData.address))
      newErrors.address = "يرجى ادخال 3 أحرف على الأقل بدون أرقام أو رموز";
    if (!formData.phone_number || formData.phone_number.length !== 9)
      newErrors.phone_number = "يرجى ادخال رقم موبايل صالح";
    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e);
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

  const handleInitialClick = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (!validateForm()) return;
    setConfirmStage(true);
  };


  const handleConfirm = async () => {
    const requiredPoints = formData.point_items[0].quantity * props.points;
    if (points < requiredPoints) {
      toast.error("نقاطك غير كافية لإتمام عملية الشراء");
      setConfirmStage(false);
      return;
    }
  if (isSubmitting) return; 
    setIsSubmitting(true);

    try {
      await axios.post(
        'https://market-cwgu.onrender.com/createorder/',
        formData
      );
      toast.success("تم ارسال الطلب بنجاح");
              setTimeout(() => {
        navigate('/dsad/home');
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("حصل خطأ أثناء ارسال الطلب، الرجاء المحاولة لاحقاً");
      setConfirmStage(false);
    }
  };

  const handleCancel = () => {
    setConfirmStage(false);
  };

  useEffect(() => {
    const fetchPoints = async () => {

      if (!userData?.id) return;
      try {
        const response = await axios.get(
          `https://market-cwgu.onrender.com/bot/getpoints/${userData.id}/`
        );
        setPoints(Object.values(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchPoints();
    setConfirmStage(false);

  }, [userData]);

  return (
    <div>
      <ToastContainer rtl position="top-center" autoClose={3000} />
      <form className={`${confirmStage ? 'blurred' : ''}`}>
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
          <Cart_point
            quantity={formData.point_items[0].quantity}
            setQuantity={handleQuantityChange}
          />
          {!confirmStage ? (
            <button className="submit" onClick={handleInitialClick}>شراء</button>
          ) : null}
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
