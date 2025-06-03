import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const User_Body = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  

  const handleUpdate = async () => {
    setMessage('');

    if (!oldPassword || !newPassword || !confirmPassword) {
              toast.error('يرجى ملء جميع الحقول');
    
      return
    }

    if (newPassword !== confirmPassword) {
      toast.error('كلمة السر الجديدة وتأكيدها غير متطابقين')
      return
    }

    try {
      const response = await axios.patch(
        'https://market-cwgu.onrender.com/updatepassword/',
        {
          old_password: oldPassword,
          new_password: newPassword,
        }
      )

      toast.success("تم التعديل بنجاح");
      setMessage('')
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
      
    } catch (err) {
      console.log(err);
        toast.error('حدث خطأ أثناء تحديث كلمة السر')
      
    }
  }

  return (
  <div className='mt-5'>
          <ToastContainer rtl position="top-center" autoClose={3000} />
    
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
