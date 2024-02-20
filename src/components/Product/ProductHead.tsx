import React from "react";
import Image from "next/image";
import NoImage from "../UI/NoImage";

interface ProductHeadProps {
  imageSrc: string[];
  id: number;
}

const ProductHead = ({ imageSrc, id }: ProductHeadProps) => {
  return (
    <>
      <div className="relative h-[30vh] w-full overflow-hidden rounded-lg sm:h-[50vh]">
        {imageSrc.length > 0 ? (
          imageSrc.map((img) => (
            <Image
              key={img}
              className="w-full object-cover"
              src={img}
              fill
              alt="Product"
            />
          ))
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gray-200">
            <NoImage />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductHead;
