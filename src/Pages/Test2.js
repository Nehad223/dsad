import React from 'react'
import DeletBtn from '../components/DeletBtn';
import Add_sub from '../components/add_sub';
import { useCart } from "../context/CartContext";

const Test2 = () => {
const { cart, updateQuantity, clearCart } = useCart();
  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className='item_Cart '>
      
          {Object.entries(cart).map(([id, item]) => (
            <div key={id}>
              <h1> {id}</h1>
              <h1>{item.name}</h1>
              <h1>{item.price}</h1>
            {item.photo?(<div>{item.photo}</div>):<div>False</div> }
            <img  src={`https://res.cloudinary.com/dgocqho3b/${item.photo}`} />
            </div>
          ))}

    
    </div>
  )
}

export default Test2;
