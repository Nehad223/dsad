import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Form_Order = (props) => {
  const navigate = useNavigate()
  const hasSent = useRef(false);

  const handlePatch = async (status) => {
    if (hasSent.current) return; 

    if (status === 'delivery' && props.status === 'delivery') {
      toast.error("تم التوصيل مسبقاً، لا يمكن التوصيل مرة أخرى");
      return;
    }

    if (status === 'finished' && props.status !== 'delivery') {
      toast.error("لا يمكن الاستكمال قبل التوصيل");
      return;
    }

    hasSent.current = true;

    try {
      let url = ''
      let response;
      
      if (status === 'finished') {
        url = `https://market-cwgu.onrender.com/makeorderfinished/${props.id}/`
        response = await axios.patch(url)
      } else if (status === 'delivery') {
        url = `https://market-cwgu.onrender.com/makeorderdelivery/${props.id}/`
        response = await axios.patch(url)
      } else if (status === 'refused') {
        url = `https://market-cwgu.onrender.com/deleteorder/${props.id}/`
        response = await axios.delete(url)
      }

      toast.success("تمت العملية بنجاح", {
        onClose: () => navigate(-1),
        autoClose: 1500,
      });
    } catch (error) {
      console.error(error)
      toast.error("حدث خطأ أثناء الإرسال");
      hasSent.current = false; 
    }
  }

  return (
    <div>
      <ToastContainer rtl position="top-center" autoClose={3000} />

      <div className='order_form mb-5'>
        <h1>الاسم الكامل</h1>
        <input type="text" disabled value={props.name} />

        <h1>رقم الموبايل</h1>
        <input type="text" disabled value={props.phone} />

        <h1>العنوان</h1>
        <input type="text" disabled value={props.adress} />
      </div>

      <div className='form_btns'>
        <button className='form-btn complete-btn' onClick={() => handlePatch('finished')}>
          اكتمل
        </button>
        <button className='form-btn delivery-btn' onClick={() => handlePatch('delivery')}>
          توصيل
        </button>
        <button className='form-btn rufus-btn' onClick={() => handlePatch('refused')}>
          رفض
        </button>
      </div>
    </div>
  )
}

export default Form_Order
