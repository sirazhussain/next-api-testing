"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = React.memo(function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="text-center my-20">
      <div className="text-3xl my-10"> Products</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((item: any, key) => (
          <ProductCard key={key} productData={item} />
        ))}
      </div>
    </div>
  );
});

export default ProductList;


