import React from 'react'

const Btn_Add = ({ onClick,disabled}) => {
  return (
    <div className='row'>
      <div className='col-4'></div>
      <div className='col-4'>
      <button className='Btn_Add mt-5' onClick={onClick}
      disabled={disabled}
  
      >
        إضافة
      </button></div>



    </div>
  )
}

export default Btn_Add
