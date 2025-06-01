import React from 'react'
import Input from './Input'
import Btn_Add from './Btn_Add'

const User_Body = () => {
  return (
    <div className='mt-5'>
 
        <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-5'>
        <input
          type='password'
          placeholder=' كلمة السر القديمة'
         
        />
      </div>
        <div className='col-3 mt-1  '>
          <h1 className='text nn '> كلمة السر القديمة</h1>
        </div>

    </div>
            <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-5'>
        <input
          type='password'
          placeholder=' كلمةالسر الجديدة'

         
        />
      </div>
        <div className='col-1 mt-1'>
          <h1 className='text rr '>الجديدة</h1>
        </div>

    </div>
                <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-5'>
        <input
          type='password'
          placeholder='تأكيد كلمة السر الجديدة'
         
        />
      </div>
        <div className='col-1 mt-1 '>
          <h1 className='text'> تأكيد</h1>
        </div>

    </div>

<Btn_Add/>

    </div>
  )
}

export default User_Body
