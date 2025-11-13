import React, { useEffect, useState } from "react";
import Category from "./Category";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProduct] = useState([]);

  const filter = useSelector((state) => state.product.filtered);
  useEffect(() => {
    setFilterProduct(filter);
  }, [filter]);

  const productsFun = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productsFun();
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="bg-gray-200 h-22 flex items-center">
        <Category products={products} />
      </div>
      <div className="px-5 flex justify-center gap-3 flex-wrap">
        {filterProducts.length > 0
          ? filterProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductComponent;
