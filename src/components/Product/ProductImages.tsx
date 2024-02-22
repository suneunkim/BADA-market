import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProductImagesProps {
  imageSrc: string[];
}

const ProductImages = ({ imageSrc }: ProductImagesProps) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
    >
      {imageSrc?.map((image, i) => (
        <SwiperSlide key={i}>
          <img
            key={i}
            src={image}
            alt="상세이미지"
            className="h-[30vh] w-full object-cover sm:h-[50vh]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductImages;
