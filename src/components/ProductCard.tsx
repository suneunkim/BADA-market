import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[210px] sm:w-[260px]">
      <div className="aspect-square w-full rounded-lg bg-stone-400">이미지</div>
      {/* 상품 정보 */}
      <div className="my-[1px] mt-2 text-lg text-neutral-600">상품 이름</div>
      <div className="font-semibold">10,000원</div>
      <div className="flex justify-between text-sm text-gray-400">
        <div className="space-x-2">
          <span>관심 0</span>
          <span>채팅 0</span>
        </div>
        <div>1시간 전</div>
      </div>
    </div>
  );
};

export default ProductCard;
