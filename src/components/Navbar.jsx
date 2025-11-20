import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { LogoImg } from "../utils/url";
const Navbar = () => {
  const itemLenght = useSelector((state) => state.cart.cartItem);
  return (
    <div className="flex justify-between px-10 py-3 items-center shadow-xl">
      <Link to="/">
        <img className="w-23 h-20" src={LogoImg} alt="logo" />
      </Link>
      <ul className="flex gap-10 text-lg">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/wishList">Wish List</Link>
        </li>
        <li className="cursor-pointer relative">
          <Link to="/cart">
            Cart{" "}
            {itemLenght.length > 0 && (
              <span className="absolute bottom-3 text-xs bg-red-500 rounded-full text-white font-semibold p-1">
                {itemLenght.length}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <CgProfile className=" text-2xl cursor-pointer" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
