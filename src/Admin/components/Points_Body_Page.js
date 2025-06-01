import React, { useState } from 'react'
import Price_input from './Price_input'
import Btn_Add from './Btn_Add';
import Btn_Delete from './Delete_Btn'
import Btns_Del_Add from './Btns_Del_Add';
const Points_Body_Page = () => {
    const[price,setPrice]=useState(0);

  return (
    <div className='mt-5'>
   <div>
        <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-5'>
        <input
          type='number'
          placeholder='أدخل السعر'
         
        />
      </div>
        <div className='col-3 mt-1 yy'>
          <h1 className='text gg'>سعر النقاط-مشتري</h1>
        </div>

    </div>
            <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-5'>
        <input
          type='number'
          placeholder='أدخل السعر'

         
        />
      </div>
        <div className='col-3 mt-1 '>
          <h1 className='text kk'>سعر النقطة-إحالة</h1>
        </div>

    </div>
                <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-5'>
        <input
          type='number'
          placeholder='أدخل عدد النقاط'
         
        />
      </div>
        <div className='col-2 mt-1 '>
          <h1 className='text so '>رابط الإحالة</h1>
        </div>

    </div>
    </div>

<Btn_Add/>

    </div>
  )
}

export default Points_Body_Page
