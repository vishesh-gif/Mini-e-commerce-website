import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-3 items-center shadow-xl">
      <img
        className="w-23 h-20"
        src="https://static.vecteezy.com/system/resources/thumbnails/020/662/330/small_2x/store-icon-logo-illustration-vector.jpg"
        alt="logo"
      />
      <ul className="flex gap-10 text-lg">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/wishList">Wish List</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <CgProfile className=" text-2xl cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
