import React from 'react'
import Delete_Btn from './Delete_Btn'
import Btn_Add from './Btn_Add'
const Btns_Del_Add = () => {
  return (
    <div className='btns_del_add mt-5'>
            <button className='add_Btns' >
        إضافة
      </button>
      <button  className='delete_Btns'>حذف</button>  
    </div>
  )
}

export default Btns_Del_Add
