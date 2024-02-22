import Container from "@/components/Layout/Container";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import getProducts from "./actions/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Container>
        <p>사용하지 않는 물건을 거래하거나 교환해보세요!</p>
        {/* 상품 목록 */}
        <div className="grid min-w-96 grid-cols-2 gap-12 pb-10 pt-5 md:grid-cols-3">
          {products.data.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>
      </Container>
    </main>
  );
}
