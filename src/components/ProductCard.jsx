import React from "react";

const ProductCard = ({ product }) => {
  const { image, price, title, description, category, rating } = product || {};
  return (
    <div className=" p-1 w-[300px] m-1 bg-gray-100">
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
        <button className="bg-amber-400 cursor-pointer my-3 p-2 rounded-xl">
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
