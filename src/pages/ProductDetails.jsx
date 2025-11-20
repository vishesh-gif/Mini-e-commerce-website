import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();

  if (!id) return <div>no Product</div>;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const respose = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await respose.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  const handleClick = () => {
    toast.success("Item added to cart!");
    dispatch(addToCart(product));
  };

  const { image, price, title, description, category, rating } = product || {};

  return (
    <div className="flex mt-10 bg-gray-100 ">
      <div className="w-1/3 flex items-center justify-center">
        <img className="w-58" src={image} alt={title} />
      </div>
      <div className="w-2/3 p-4 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>
          {rating?.rate} {"⭐".repeat(Math.round(rating?.rate))}{" "}
        </p>
        <h4 className="font-semibold  bg-[#d14900] w-fit text-[10px] px-2 py-1 rounded-md ">
          {rating?.rate >= 4 ? <span># Best Seller in </span> : ""}
          {category}
        </h4>
        <p className="text-sm">{description}</p>
        <p className="bg-[#cc0c39] text-white font-semibold px-3 py-1 text-xs rounded-md w-fit">
          Limited time deal
        </p>
        <h2 className="flex items-center font-bold text-xl">
          <FaRupeeSign />
          {price}
        </h2>
        <button
          onClick={() => handleClick()}
          className="bg-amber-400 w-fit cursor-pointer my-3 p-2 rounded-xl"
        >
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
