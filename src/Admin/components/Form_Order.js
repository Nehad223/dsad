import React from 'react'
import Form from '../../components/Form_Cart'
const Form_Order = (props) => {
  return (
    <div>

 
    <div className='order_form mb-5'>
      <h1>الاسم الكامل</h1>
        <input
          type="text"
          name="name"
          disabled={true}
          value={props.name}
        />

        <h1>رقم الموبايل</h1>
     
          <input
            type="text"
            name="phone_number"          
          disabled={true}
          value={props.phone}

          />
        <h1>العنوان</h1>
        <input
          type="text"
          name="address"
          disabled={true}
          value={props.adress}
        />

    </div> 
            <div className='form_btns '>
            <button className='form-btn complete-btn'> اكتمل</button>
            <button className='form-btn delivery-btn'> توصيل</button>
            <button className='form-btn rufus-btn'> رفض</button>


        </div>
      </div>
    
  )
}

export default Form_Order
