import getProductById from "@/app/actions/getProductById";
import React from "react";
import ProductClient from "./ProductClient";

interface Params {
  productId: string;
}

const ProductPage = async ({ params }: { params: Params }) => {
  const product = await getProductById(params);

  if (!product) {
    return <div>상품이 존재하지 않습니다.</div>;
  }

  return <ProductClient product={product} />;
};

export default ProductPage;
