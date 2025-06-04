import React from 'react';
import '../../style/All.css';
import Item_cart_Admin from './Item_cart_Admin';
import photo from '../../Assests/item.png';

const Inf_Order = ({ totalPrice, date,items,pacakges }) => {
  const formatDate = (isoString) => {
    const d = new Date(isoString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); 
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <div>
      <h1 className='add_text mt-5 '>معلومات الطلب</h1>
      <div className='row mt-5'>
        <div className='col-5'></div>
        <div className='col-5'>
          <div style={{ transform: 'scale(1.2)' }} className='mx-4'>
            {items && 
            <Item_cart_Admin cart={items} type={"item"}  />
            }
            {pacakges && 
            <Item_cart_Admin cart={pacakges} type={"packages"}  />
            }

          </div>
          
          
          <div className='TotalPrice_Btn mx-5'>
            <div className='totalPrice'><p>{totalPrice}</p></div>
            <div className='totalPrice_Word'><p>المجموع</p></div>
          </div>

          <div className='TotalPrice_Btn mx-5'>
            <div className='totalPrice'><p>{formatDate(date)}</p></div>
            <div className='totalPrice_Word'><p>التاريخ</p></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Inf_Order;
