import React, { useState } from "react";

const Form = () => {
  // تخزين بيانات الفورم
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  // تحديث القيم عند الكتابة
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // عرض البيانات عند الضغط على "شراء"
  const handleSubmit = (event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    console.log("🚀 البيانات المدخلة:", formData);
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
        <div>
          <button className="submit" type="submit">شراء</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
