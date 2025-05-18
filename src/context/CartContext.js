import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({}); 
  const[userData,setUserData]=useState(null);



const addToCart = (item, quantity = 1) => {
  setCart((prev) => ({
    ...prev,
    [item.id]: prev[item.id]
      ? { ...prev[item.id], quantity: prev[item.id].quantity + quantity }
      : { name: item.name, price: item.price, quantity: quantity },
  }));
};


  // تعديل الكمية أو حذف العنصر
  const updateQuantity = (itemId, delta) => {
    setCart((prev) => {
      if (!prev[itemId]) return prev; // إذا العنصر مش موجود بالسلة

      const newQty = prev[itemId].quantity + delta;
      if (newQty <= 0) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }

      return { ...prev, [itemId]: { ...prev[itemId], quantity: newQty } };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <CartContext.Provider value={{ userData,setUserData,cart,addToCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}


