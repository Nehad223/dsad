import React, { useRef } from 'react'

const Image_Input = ({ value, setValue, val_in, oldImage }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue(file); 
    }
  };

  return (
    <div className="row input mt-1">
      <div className="col-4"></div>

      <div className="col-4">
        <div
          onClick={handleClick}
          className='img_input'
        >
          {val_in ? (
            <span>تم اختيار صورة جديدة</span>
          ) : oldImage ? (
            <span>صورة موجودة مسبقاً</span>
          ) : (
            <span>ادخل صورة</span>
          )}
        </div>

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
