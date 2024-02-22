import { User } from "@prisma/client";
import React from "react";
import { fromNow } from "@/helpers/dayjs";
import Avatar from "../UI/Avatar";

interface ProductInfoProps {
  user: User;
  title: string;

  createAt: Date;
  price: number;
  description: string;
}

const ProductInfo = ({
  user,
  title,
  createAt,
  price,
  description,
}: ProductInfoProps) => {
  return (
    <div>
      <div>
        <div className="text-md flex items-center gap-2">
          <Avatar src={user?.image} />
          <p>{user?.name}</p>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col space-y-3">
        <div className="text-xl font-semibold">{title}</div>
        <div className="flex gap-1 text-sm text-gray-500">
          <span>{fromNow(createAt)}</span>
        </div>
        <div className="font-medium">{price.toLocaleString("ko-KR")}원</div>
        <div>{description}</div>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default ProductInfo;
