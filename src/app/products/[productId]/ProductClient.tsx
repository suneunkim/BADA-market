"use client";
import Container from "@/components/Layout/Container";
import ProductHead from "@/components/Product/ProductHead";
import ProductInfo from "@/components/Product/ProductInfo";
import Button from "@/components/UI/Button";
import { Product, User } from "@prisma/client";
import dynamic from "next/dynamic";
import React from "react";

interface Image {
  url: string;
  id: number;
}

interface ProductClientProps {
  product: Product & { user: User } & { images: Image[] };
}

const ProductClient = ({ product }: ProductClientProps) => {
  const KakaoMap = dynamic(() => import("../../../components/KakaoMap"), {
    ssr: false,
    loading: () => <div>지도 로딩중...</div>,
  });
  return (
    <Container>
      <div className="mx-auto flex w-[350px] flex-col gap-5 sm:w-[650px]">
        <ProductHead
          imageSrc={product.images.map((img) => img.url)}
          id={product.id}
        />
        <ProductInfo
          user={product.user}
          title={product.title}
          createAt={product.createAt}
          price={product.price}
          description={product.description}
        />
        <KakaoMap
          detailPage
          latitude={product.latitude}
          longitude={product.longitude}
        />
        <Button label="대화하기" />
      </div>
    </Container>
  );
};

export default ProductClient;