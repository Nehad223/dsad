import React from 'react'
import Header from '../components/Header'
import Rectangle from '../components/Rectangle'
const Edit = () => {
  return (
    <div>
        <Header/>
      <h1 className='add_text mt-5'>تعديل</h1>
      <div className='row mt-5'>
                    <div className='col-2'></div>
            <div className='col-2'><Rectangle value="كاتيغوري" redrict="category" /></div>
            <div className='col-2'><Rectangle value="بكج" redrict="packages" /></div>
            <div className='col-2'><Rectangle value="بضاعة بسعر" redrict="money" /></div>
            <div className='col-2'><Rectangle value="بضاعة بنقاط" redrict="points" /></div>
            <div className='col-2'></div>

      </div>
    </div>
  )
}

export default Edit
