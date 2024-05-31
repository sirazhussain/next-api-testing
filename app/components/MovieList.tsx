"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Movie from "../movie.json";

const ProductList = React.memo(function ProductList() {
  const [products, setProducts] = useState([]);

  return (
    <div className="text-center my-20">
      <div className="text-3xl my-10"> Imdb</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Movie.map((item: any, key) => (
          <MovieCard key={key} productData={item} />
        ))}
      </div>
    </div>
  );
});

export default ProductList;


