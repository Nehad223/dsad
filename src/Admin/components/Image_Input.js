import React, { useRef } from 'react'

const Image_Input = ({ value, setValue }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // فتح نافذة اختيار الصورة
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue(file); // أو file.name إذا بس بدك الاسم
    }
  };

  return (
    <div className="row input mt-1">
      <div className="col-4"></div>

      {/* مربع قابل للضغط */}
      <div className="col-4">
        <div
          onClick={handleClick}
          className='img_input'
        >
         <span>ادخل صورة</span>

        </div>

        {/* عنصر رفع الصورة (مخفي) */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
              <div className='col-1 mt-1'>
          <h1 className='text'>{value}</h1>
        </div>
    </div>
  );
};

export default Image_Input;
