import React from 'react'
import { useCart } from "../context/CartContext";

const DeletBtn = (props) => {
      const {  deleteFromCart } = useCart();
  
  return (
    <div>
                  
            <button className='delete_Btn' onClick={() => deleteFromCart(props.id)}><span>حذف</span></button >
    </div>
  )
}

export default DeletBtn
