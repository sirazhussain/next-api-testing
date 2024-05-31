"use client";
import React, { useEffect, useState } from "react";
import RecordCard from "./RecordCard";
import Record from "../records.json";

const ProductList = React.memo(function ProductList() {
  const [products, setProducts] = useState([]);


  return (
    <div className="text-center my-20">
      <div className="text-3xl my-10"> Products</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Record.map((item: any, key) => (
          <RecordCard key={key} productData={item} />
        ))}
      </div>
    </div>
  );
});

export default ProductList;
