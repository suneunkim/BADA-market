"use client";
import { ImageProps } from "@/app/products/[productId]/ProductClient";
import { fromNow } from "@/helpers/dayjs";
import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";
import NoImage from "./UI/NoImage";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product & { images: ImageProps[] };
  key: number;
}

const ProductCard = ({ data, key }: ProductCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/${data.id}`)}
      className="w-[200px] cursor-pointer sm:w-[260px]"
    >
      {data?.images.length > 0 ? (
        data?.images.map((img) => (
          <div
            key={img.url}
            className="relative aspect-square w-full overflow-hidden rounded-lg"
          >
            <Image
              className="w-full object-cover"
              src={img.url}
              fill
              sizes="auto"
              alt="상품 이미지"
            />
          </div>
        ))
      ) : (
        <NoImage />
      )}
      {/* 상품 정보 */}
      <div className="text-md my-[1px] mt-2 text-neutral-600">{data.title}</div>
      <div className="font-semibold">
        {data?.price.toLocaleString("ko-KR")}원
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <div className="space-x-2">
          <span>관심 0</span>
          <span>채팅 0</span>
        </div>
        <div>{fromNow(data.createAt)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
