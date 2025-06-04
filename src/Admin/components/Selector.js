import React from 'react'

const Selector = ({ value, setValue }) => {
  return (
    <div>
      <div className='row input mt-1'>
        <div className='col-4'></div>
        <div className='col-4 d-flex justify-content-end'>
          <select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="">اختر الفئة</option>
            <option value="student">طلاب</option>
            <option value="doctor">اطباء</option>
          </select>
        </div>
        <div className='col-1 mt-3'>
          <h1 className='text text-start'>الفئة</h1>
        </div>
      </div>
    </div>
  )
}

export default Selector
