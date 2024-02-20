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
          <div className=" flex h-full w-full flex-col items-center justify-center bg-gray-200">
            <svg
              className="h-32 w-32"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              />
            </svg>
            <p className="text-sm font-semibold text-gray-600">
              등록된 이미지가 없습니다.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductHead;
