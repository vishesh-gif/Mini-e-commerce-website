import React from "react";
import { FiSearch } from "react-icons/fi";

const Category = () => {
  const categroyName = [
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
    "electronics",
  ];
  return (
    <div className="flex gap-9 items-center px-9 mx-3 justify-between w-full">
      <div>
        <ul className="flex gap-4 h-14 items-center bg-gray-300 p-1 px-2 rounded-2xl">
          {categroyName.map((categroy, index) => (
            <li
              className="cursor-pointer hover:bg-white duration-200 ease-in-out rounded-xl p-1"
              key={index}
            >
              {categroy}
            </li>
          ))}
        </ul>
      </div>
      <div className=" px-5 py-1 flex items-center justify-between gap-2">
        <input
          type="text"
          className="border rounded-xl px-3  py-1"
          placeholder="Search Product"
        />
        <button className="bg-gray-500 text-white px-3 cursor-pointer py-2 rounded-2xl">
          <FiSearch />
        </button>
      </div>
    </div>
  );
};

export default Category;
