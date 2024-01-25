import Container from "@/components/Layout/Container";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
// 홈 화면에서 만들것
// mock 배열속 객체에 이미지와 상품 이름, 가격정도 보이게하고 레이아웃 만들기
// 아이템은 한줄에 2개씩, sm이상은 3개씩
//

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
