// components/Cart.js
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, clearCart } = useCart();

  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-6 p-4 border rounded-lg">
      <h2 className="text-xl font-bold">Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <div>
          {Object.entries(cart).map(([id, item]) => (
            <div key={id} className="flex justify-between items-center p-2 border-b">
              <p>{item.type}</p>
              <div>
                <button
                  onClick={() => updateQuantity(id, 1)}
                  className="bg-green-500 text-white px-3 mx-1 rounded"
                >
                  ➕
                </button>
                <button
                  onClick={() => updateQuantity(id, -1)}
                  className="bg-red-500 text-white px-3 mx-1 rounded"
                >
                  ➖
                </button>
              </div>
            </div>
          ))}
          <h3 className="mt-4 text-lg font-semibold">
            Total Price : {totalPrice} ل.س
          </h3>
          <div className="flex gap-2">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 mt-4 rounded"
            >
              Clear
            </button>
            <button
              onClick={() => console.log("🚀 إرسال الطلب:", cart)}
              className="bg-purple-500 text-white px-4 py-2 mt-4 rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <p>The cart is empty</p>
      )}
    </div>
  );
}
