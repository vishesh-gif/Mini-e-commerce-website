import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
const Checkout = () => {
  const items = useSelector((state) => state.cart.cartItem);

  // Calculate totals
  const { totalPrice, totalItems } = useMemo(() => {
    const total = items.reduce(
      (acc, item) => {
        acc.totalItems += item.qty || 1;
        acc.totalPrice += item.price * (item.qty || 1);
        return acc;
      },
      { totalItems: 0, totalPrice: 0 }
    );
    return total;
  }, [items]);

  const sendToWhatsApp = () => {
    const mobileNumber = +919009801788;

    const message = `
📦 *Your Checkout Bill*

🛍️ Total Items: ${totalItems}
💰 Total Price: ₹${Math.round(totalPrice)}
🚚 Shipping: Free

--------------------------------
🔢 *Grand Total:* ₹${Math.round(totalPrice)}

Thank you for shopping!
`;

    const url = `https://wa.me/${mobileNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      {items.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Items */}
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border p-4 rounded-xl shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-sm font-medium line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 mt-1 font-semibold">
                    ₹{item.price}
                  </p>
                  <p className="text-gray-500">Qty: {item.quantity || 1}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="border p-4 rounded-xl shadow-sm h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Items:</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-lg font-bold mb-3">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mb-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Place Order
            </button>
            <button
              onClick={() => sendToWhatsApp()}
              className="w-full flex gap-2 items-center px-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              <h2> Bill On Your WhatsApp </h2>
              <span>
                <FaWhatsapp />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
