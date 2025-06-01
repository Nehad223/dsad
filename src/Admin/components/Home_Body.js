import React from 'react'
import Rectangle from './Rectangle'

const Home_Body = () => {
  return (
    <div className='Home_Body'>
        <div className='row '>
            <div className='col-3'></div>
            <div className='col-2'><Rectangle value="اضافة" redrict="/admin/add" /></div>
            <div className='col-2'><Rectangle value="تعديل" redrict="/admin/edit" /></div>
            <div className='col-2'><Rectangle value="النقاط" redrict="/admin/points" /></div>
            <div className='col-3'></div>
        </div>
            <div className='row '>
            <div className='col-3'></div>
            <div className='col-2'><Rectangle value="الطلبات المعلقة" redrict="/admin/orders" /></div>
            <div className='col-2'><Rectangle value="سجل المشتريات" redrict="/admin/history" /></div>
            <div className='col-2'><Rectangle value="اليوزر" redrict="/admin/user" /></div>
            <div className='col-3'></div>
        </div>

     

    </div>
  )
}

export default Home_Body
