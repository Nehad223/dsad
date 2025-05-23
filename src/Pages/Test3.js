import React from 'react'
import DeleteBtn from '../components/DeletBtn'
import Add_sub from '../components/add_sub'
import item from '../Assests/item.png'
import Totlaprice_Item from '../style/Totlaprice_Item'
import { useCart } from "../context/CartContext";
import photo from "../Assests/item.png"
const Test3 = () => {
  const { cart, updateQuantity, clearCart } = useCart();
  console.log(cart.item.name)
  return (


  <div className="row item_Cart">
    <div className="col-1 Delete_btn_grid">
        <DeleteBtn/> 
    </div>
    <div className="col-7 center_item_grid">
        <div className='row high_row'>
            <div className='col-5 add_sub_grid'><Add_sub/></div>
            <div className='col-7  text_grid'>
                <h1>مسبر اسنان</h1>
                <p>عدد 1</p>
            </div>
            </div>
        
        <div className='row'><div className='col-7 total_Price'>
        400 ل.س
        </div>
        <div className='col-5 Price'>  المبلغ النهائي</div>
        
        </div>
 </div>
    <div className="col-3 img_grid"><img src={item} className='img' /></div>
  </div>


  )
}

export default Test3 ;
