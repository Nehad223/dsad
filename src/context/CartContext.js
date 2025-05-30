import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [userData, setUserData] = useState(null);
  
  const deleteFromCart = (itemId) => {
  setCart((prev) => {
    const newCart = { ...prev };
    delete newCart[itemId];
    return newCart;
  });
};

  const addToCart = (item, quantity = 1, type) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...prev[item.id], quantity: prev[item.id].quantity + quantity, type }
        : { name: item.name, price: item.price, quantity, photo: item.photo, type,id:item.id },
    }));
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prev) => {
      const item = prev[itemId];
      if (!item) return prev;

      const currentQty = item.quantity;
      const newQty = currentQty + delta;

      // لا تعدل إذا رح تصير أقل من 1
      if (newQty < 1) return prev;

      return {
        ...prev,
        [itemId]: {
          ...item,
          quantity: newQty,
        },
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <CartContext.Provider
      value={{ userData, setUserData, cart, addToCart, updateQuantity,deleteFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
