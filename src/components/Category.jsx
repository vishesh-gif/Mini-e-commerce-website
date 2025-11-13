import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

import { useDispatch } from "react-redux";
import {
  filterProduct,
  clearFilter,
  searchFilter,
} from "../redux/productSlice";
const Category = ({ products }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => handleChangle(), 400);
    return () => clearTimeout(timer);
  }, [input]);

  const handleChangle = () => {
    dispatch(searchFilter({ input, products }));
  };

  const categroyName = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  const handleFilter = (index) => {
    const categoryIndex = categroyName[index];
    dispatch(filterProduct({ categroy: categoryIndex, products: products }));
  };
  return (
    <div className="flex flex-wrap gap-9 items-center px-9 mx-3 justify-between w-full">
      <div>
        <ul className="flex gap-4 h-14 items-center bg-gray-300 p-1 px-2 rounded-2xl">
          {categroyName.map((categroy, index) => (
            <button onClick={() => handleFilter(index)} key={index}>
              <li className="cursor-pointer hover:bg-white duration-200 ease-in-out rounded-xl p-1">
                {categroy}
              </li>
            </button>
          ))}
          <button
            onClick={() => {
              dispatch(clearFilter());
            }}
          >
            <li className="cursor-pointer hover:bg-gray-400 bg-white duration-200 ease-in-out rounded-xl p-1">
              Clear Filter
            </li>
          </button>
        </ul>
      </div>
      <div className=" px-5 py-1 flex items-center justify-between gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded-xl px-3  py-1"
          placeholder="Search Product"
          // onChange={() => handleChange()}
        />
        <button
          onClick={() => setInput("")}
          title="Clear Input"
          className="bg-gray-500 hover:bg-red-600 ease-in-out duration-400 text-white px-3 cursor-pointer py-2 rounded-2xl"
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default Category;
