import Container from "@/components/Layout/Container";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

// 1. 로그인, 회원가입 페이지 UI
// 2. prisma 스키마 설정
// 3. 회원가입 기능, 로그인 시 세션 데이터 생성하기

export default function Home() {
  return (
    <main>
      <Container>
        <p>사용하지 않는 물건을 거래하거나 교환해보세요!</p>
        {/* 상품 목록 */}
        <div className="grid grid-cols-2 gap-12 pb-10 pt-5 md:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </main>
  );
}
