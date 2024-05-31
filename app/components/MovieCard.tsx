import Image from "next/image";
import React, { useState } from "react";

const MovieCard = React.memo(function MovieCard({
  productData,
}: {
  productData: any;
}) {
  return (
    <div className="border border-gray-300 p-6 rounded-lg">
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold">{productData?.title}</p>
        <p className="text-gray-600">{productData?.year}</p>
        <p className="text-gray-600">{productData?.genre}</p>
        <p className="mt-2 text-lg font-semibold">
          rating: {productData?.rating}
        </p>
      </div>
    </div>
  );
});

export default MovieCard;
