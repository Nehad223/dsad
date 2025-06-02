import React, { useState } from 'react'
import axios from 'axios'

const User_Body = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleUpdate = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('كلمة السر الجديدة وتأكيدها غير متطابقين')
      return
    }

    try {
      const checkOldRes = await axios.post('/api/check-old-password', {
        oldPassword,
      })

      if (!checkOldRes.data.valid) {
        setMessage('كلمة السر القديمة غير صحيحة')
        return
      }

      const updateRes = await axios.post('/api/update-password', {
        newPassword,
      })

      if (updateRes.data.success) {
        setMessage('تم تغيير كلمة السر بنجاح')
      } else {
        setMessage('فشل في تغيير كلمة السر')
      }
    } catch (err) {
      setMessage('حدث خطأ في الاتصال بالخادم')
    }
  }

  return (
    <div className='mt-5'>
      <div className='row input mt-1'>
        <div className='col-4'></div>
        <div className='col-5'>
          <input
            type='password'
            placeholder=' كلمة السر القديمة'
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className='col-3 mt-1'>
          <h1 className='text nn'>كلمة السر القديمة</h1>
        </div>
      </div>

      <div className='row input mt-1'>
        <div className='col-4'></div>
        <div className='col-5'>
          <input
            type='password'
            placeholder='كلمة السر الجديدة'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className='col-1 mt-1'>
          <h1 className='text rr'>الجديدة</h1>
        </div>
      </div>

      <div className='row input mt-1'>
        <div className='col-4'></div>
        <div className='col-5'>
          <input
            type='password'
            placeholder='تأكيد كلمة السر الجديدة'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='col-1 mt-1'>
          <h1 className='text'>تأكيد</h1>
        </div>
      </div>

      {message && (
        <div className='row mt-3'>
          <div className='col-5'></div>
          <div className='col-4 text-end spp text-danger'>{message}</div>
        </div>
      )}

      <button className='Btn_Add mt-4' onClick={handleUpdate}>
        تعديل
      </button>
    </div>
  )
}

export default User_Body
