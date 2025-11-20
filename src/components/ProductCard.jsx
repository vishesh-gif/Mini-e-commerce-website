import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addToWishList } from "../redux/wishListSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart!");
  };
  const { image, price, id, title, description, category, rating } =
    product || {};
  return (
    <div className=" p-1 w-[300px] m-1 bg-gray-100">
      <div onClick={() => navigate(`/productDetails/${id}`)}>
        <div className="px-8 py-3 flex justify-center items-center bg-white">
          <img className="w-36 h-58" src={image} alt="" />
        </div>
        <div className="px-3 mt-6">
          <h2 className="text-lg ">{title}</h2>
          <p className="text-sm text-gray-600">
            {description?.slice(0, 70) + "..."}
            {/* {description?.slice(40, 70) + "..."} */}
          </p>
          <p>
            {" "}
            {rating?.rate} {"⭐".repeat(Math.round(rating?.rate))}{" "}
          </p>
          <span className="text-sm text-gray-600">
            {rating?.count} + bought in past month
          </span>
          <h2 className="font-bold text-xl">
            <i className="font-semibold text-sm mr-1">₹</i> {price}
          </h2>
        </div>
      </div>
      <div className="flex  justify-between px-2">
        <button
          onClick={() => handleClick()}
          className="bg-amber-400 cursor-pointer my-2 mx-3 p-2 rounded-xl"
        >
          Add To cart
        </button>
        <button
          onClick={() => dispatch(addToWishList(product))}
          className="cursor-pointer hover:scale-150 duration-200 ease-in p-2"
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
