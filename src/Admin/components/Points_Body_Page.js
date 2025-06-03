import React, { useState } from 'react'
import axios from 'axios'
import Btn_Add from './Btn_Add'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Points_Body_Page = () => {
  const navigate=useNavigate();
  const [buyerPrice, setBuyerPrice] = useState('')
  const [referralPrice, setReferralPrice] = useState('')
  const [pointsCount, setPointsCount] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.patch('https://market-cwgu.onrender.com/global-points/update/', {
        purchase_points: Number(buyerPrice),
        referral_purchase_points: Number(referralPrice),
        referral_points: Number(pointsCount),
      });
      
      setBuyerPrice('');
      setReferralPrice('');
      setPointsCount('');
            toast.success("تمت العملية بنجاح", {
        onClose: () => navigate('/admin/home'),
        autoClose: 1500,
      });
      
    } catch (error) {
      console.error( error);
        toast.error("حدث خطأ أثناء الإرسال");
      
    }
  }

  return (
    <div className='mt-5'>
                  <ToastContainer rtl position="top-center" autoClose={3000} />
      
      <div>
  
        <div className='row input mt-1'>
          <div className='col-4'></div>
          <div className='col-5'>
            <input
              type='number'
              placeholder='أدخل السعر'
              value={buyerPrice}
              onChange={(e) => setBuyerPrice(e.target.value)}
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
              value={referralPrice}
              onChange={(e) => setReferralPrice(e.target.value)}
            />
          </div>
          <div className='col-3 mt-1'>
            <h1 className='text kk'>سعر النقطة-إحالة</h1>
          </div>
        </div>
        <div className='row input mt-1'>
          <div className='col-4'></div>
          <div className='col-5'>
            <input
              type='number'
              placeholder='أدخل عدد النقاط'
              value={pointsCount}
              onChange={(e) => setPointsCount(e.target.value)}
            />
          </div>
          <div className='col-2 mt-1'>
            <h1 className='text so'>رابط الاحالة</h1>
          </div>
        </div>
      </div>

     
      <Btn_Add onClick={handleSubmit} />
    </div>
  )
}

export default Points_Body_Page
