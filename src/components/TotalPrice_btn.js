import React from 'react'

const TotalPrice_btn = (props) => {
    const x=4000000;
  return (
    <div className='TotalPrice_Btn'>
        <div className='totalPrice'><p>{x.toLocaleString()}</p></div>
        <div className='totalPrice_Word'><p>المجموع</p></div>

      
    </div>
  )
}

export default TotalPrice_btn
