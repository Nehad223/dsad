import React from 'react'
import Rectangle from '../components/Rectangle'
import Header from '../components/Header'
const Add = () => {
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-5'>إضافة</h1>
      <div className='row mt-5'>
                    <div className='col-2'></div>
            <div className='col-2'><Rectangle value="كاتيغوري" redrict="category" /></div>
            <div className='col-2'><Rectangle value="بكج" redrict="pacakges" /></div>
            <div className='col-2'><Rectangle value="بضاعة بسعر" redrict="money" /></div>
            <div className='col-2'><Rectangle value="بضاعة بنقاط" redrict="points" /></div>
            <div className='col-2'></div>

      </div>
    </div>
  )
}

export default Add
