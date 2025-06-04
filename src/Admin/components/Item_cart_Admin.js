import React from 'react'
import '../../style/All.css';
import DeleteBtn from '../../components/DeletBtn';
import Add_sub from '../../components/add_sub';
const Item_cart_Admin = ({cart,type}) => {
  return (
    <div>
       {Object.entries(cart).map(([id, item]) => (
        <div key={id} className='item_Cart mt-4'>
          <div className="col-1 Delete_btn_grid">
            <DeleteBtn />
          </div>

          <div className="col-7 center_item_grid">
            <div className='row high_row'>
              <div className='col-5 add_sub_grid'>
                <Add_sub />
              </div>
              <div className='col-7 text_grid'>
              {type === 'packages' ?<h1>بكج {item.item_name}</h1> : <h1>{item.item_name}</h1>}
   
                <p>عدد {item.quantity}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-7 total_Price'>
                <span style={{ direction: 'rtl', unicodeBidi: 'isolate' }}>
                  {item.quantity * item.price} ل.س
                </span>
              </div>
              <div className='col-5 Price'>المبلغ النهائي</div>
            </div>
          </div>

          <div className="col-3 img_grid">
            <img src={item.photo} className='img' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Item_cart_Admin
