import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWishListItem } from "../redux/wishListSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wish.wishList);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">My Wishlist</h1>

      {wishList.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishList.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow-sm hover:shadow-md transition p-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain mb-2"
              />

              <h2 className="text-sm font-medium line-clamp-2">{item.title}</h2>

              <p className="text-lg font-bold mt-1">₹{item.price}</p>

              <Link
                to={`/productDetails/${item?.id}`}
                className="block mt-2 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Product
              </Link>
              <button
                onClick={() => dispatch(removeWishListItem(item.id))}
                className="block w-full mt-2 bg-red-600 text-white text-center py-2 rounded-lg hover:bg-red-400 cursor-pointer transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
