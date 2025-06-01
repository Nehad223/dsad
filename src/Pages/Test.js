// CategoryForm.jsx
import React from "react";

const formRowStyle = {
  display: "grid",
  gridTemplateColumns: "300px 12px auto",
  justifyContent: "end",    // يدفع شبكة الأعمدة كلها جمب اليمين
  alignItems: "center",
  marginBottom: "20px",
  width: "100%",            // يخلي الصف ياخد العرض الكلي للحاضنة
};

// الـ input دايمًا بالعمود الأول (عرض ثابت 300px)
const inputStyle = {
  gridColumn: 1,
  width: "100%",            // يغطي عمود ال 300px بالكامل
  height: "50px",
  borderRadius: "8px",
  border: "1px solid #E5E7EB",
  padding: "0 12px",
  direction: "rtl",         // النص و placeholder يطلعوا من اليمين
  textAlign: "right",       // الكتابة داخل الإنبوت من اليمين
  fontSize: "16px",
  flexShrink: 0,            // (طالما إحنا مش بنستعمل flex بالأساس، هالسطر مش ضروري)
};

// الـ select نفس فكرة الإنبوت بالضبط بس بظهر السهم مرفوع
const selectStyle = {
  ...inputStyle,
  appearance: "none",       // يلغي شكل السهم الافتراضي
  background: "#fff",
};

// الليبل (النص) دايمًا بالعمود الثالث (عرضه يتحدّد على أساس المحتوى)
const labelStyle = {
  gridColumn: 3,
  whiteSpace: "nowrap",     // يمنع انكسار الكلمة، فتمد شمال
  textAlign: "right",       // الكتابة من اليمين للشمال
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "12px",       // مسافة بسيطة بين الإنبوت والليبل
};

const FormRow = ({ label, placeholder, isSelect, options }) => {
  return (
    <div style={formRowStyle}>
      {isSelect ? (
        <select style={selectStyle}>
          <option value="">{placeholder}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input type="text" placeholder={placeholder} style={inputStyle} />
      )}
      <div style={labelStyle}>{label}</div>
    </div>
  );
};

const Test = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
      }}
    >
      {/* صف اسم الكاتيجوري */}
      <FormRow label="اسم الكاتيجوري" placeholder="أدخل الاسم" isSelect={false} />

      {/* صف الوصف */}
      <FormRow label="وصف" placeholder="أدخل الوصف" isSelect={false} />

      {/* صف الفئة (سلِكت) */}
      <FormRow
        label="الفئة"
        placeholder="اختر الفئة"
        isSelect={true}
        options={[
          { value: "1", label: "فئة 1" },
          { value: "2", label: "فئة 2" },
          { value: "3", label: "فئة 3" },
        ]}
      />
    </div>
  );
};

export default Test;
