import React from 'react'
import Delete_Btn from './Delete_Btn'
import Btn_Add from './Btn_Add'
const Btns_Del_Add = ({ onClick ,deleteClick}) => {
  return (
    <div className='row mt-5  '>
      <div className='col-3 '></div>
      <div className='col-3 d-flex justify-content-end'>      
            <button className='add_Btns ' onClick={onClick} >
         تعديل
      </button> </div>
      <div className='col-3 d-flex justify-content-end '>      <button  className='delete_Btns' onClick={deleteClick}>حذف</button> </div>
      <div className='col-3'
      ></div>
 
    </div>
  )
}

export default Btns_Del_Add
