import Image from "next/image";
import React, { useState } from "react";

const ProductCard = React.memo(function ProductCard({
  productData,
}: {
  productData: any;
}) {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveImage(index);
  };

  return (
    <div className="border border-gray-300 p-6 rounded-lg">
      <div className="flex justify-center">
        <Image
          src={productData?.images[activeImage]}
          alt="Product Image"
          className="rounded-lg"
          height={200}
          width={200}
        />
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        {productData?.images.map((image: string, index: number) => (
          <Image
            key={index}
            src={image}
            height={50}
            width={50}
            alt={`Product Image ${index}`}
            className={`cursor-pointer rounded-lg ${
              index === activeImage ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold">{productData?.title}</p>
        <p className="text-gray-600">{productData?.brand}</p>
        <p className="mt-2 text-lg font-bold">${productData?.price}</p>
      </div>
    </div>
  );
});

export default ProductCard;
