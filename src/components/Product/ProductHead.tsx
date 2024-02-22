import React from "react";
import Image from "next/image";
import NoImage from "../UI/NoImage";
import ProductImages from "./ProductImages";

interface ProductHeadProps {
  imageSrc: string[];
  id: number;
}
// 여기서 이미지 보여주다가 컴포넌트로 변경함
const ProductHead = ({ imageSrc, id }: ProductHeadProps) => {
  return (
    <>
      <div className="relative h-[30vh] w-full overflow-hidden rounded-lg sm:h-[50vh]">
        {imageSrc && imageSrc.length > 0 ? (
          <ProductImages imageSrc={imageSrc} />
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

{
  /* <Image
    key={i}
    className="w-full object-cover"
    src={image}
    fill
    alt="Product"
  /> */
}
