import React from "react";
import Image from "next/image";

interface ProductHeadProps {
  imageSrc: string[];
  id: number;
}

const ProductHead = ({ imageSrc, id }: ProductHeadProps) => {
  return (
    <>
      <div className="relative h-[50vh] w-full overflow-hidden rounded-lg">
        {imageSrc.map((img) => (
          <Image
            key={img}
            className="w-full object-cover"
            src={img}
            fill
            alt="Product"
          />
        ))}
      </div>
    </>
  );
};

export default ProductHead;
