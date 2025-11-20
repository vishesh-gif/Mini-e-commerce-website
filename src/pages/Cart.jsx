import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(items);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const handleCheckOut = () => {
    navigate("/checkOut");
  };

  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600 text-xl">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-xl shadow-sm"
          >
            {/* Left section */}
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">₹{item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>

                  <span className="px-3">{item.qty}</span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right side */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600 cursor-pointer hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-6 text-right text-xl font-semibold">
        <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
        <button
          onClick={() => handleCheckOut()}
          className="bg-green-400 text-white p-2 hover:scale-110 duration-200 cursor-pointer rounded-lg"
        >
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
