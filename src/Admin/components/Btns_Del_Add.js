import React from 'react'
import Delete_Btn from './Delete_Btn'
import Btn_Add from './Btn_Add'
const Btns_Del_Add = ({ onClick ,deleteClick}) => {
  return (
    <div className='btns_del_add mt-4'>
            <button className='add_Btns' onClick={onClick} >
         تعديل
      </button>
      <button  className='delete_Btns' onClick={deleteClick}>حذف</button>  
    </div>
  )
}

export default Btns_Del_Add
