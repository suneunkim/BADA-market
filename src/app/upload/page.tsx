"use client";
import ImageUploader from "@/components/ImageUploader";
import KakaoMap from "@/components/KakaoMap";
import Container from "@/components/Layout/Container";
import Button from "@/components/UI/Button";
import Heading from "@/components/UI/Heading";
import Input from "@/components/UI/Input";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const UploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      imageSrc: [],
      title: "",
      description: "",
      price: "",
      latitude: 31.5523,
      longitude: 122.7951,
    },
  });
  const imageSrc = watch("imageSrc");
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  // 빌드할 때 말고 런타임 때 동작해야 함
  const KakaoMap = dynamic(() => import("../../components/KakaoMap"), {
    ssr: false,
    loading: () => <div>로딩중...</div>,
  });

  // 현재 위치로 지도를 설정. Map의 center를 수정해준다.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setValue("latitude", position.coords.latitude);
        setValue("longitude", position.coords.longitude);
      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

  const customSetValue = (id: string, value: string[] | number) => {
    // ImageUploader에서 onChange -> 등록한 이미지의 배열을 value 받고 RHF의 setValue 이용해서 값을 업데이트
    // KakaoMap에서 유저가 선택한 위도와 경도를 받아서 값을 업데이트
    setValue(id, value);
  };

  const onValid: SubmitHandler<FieldValues> = async (formData) => {
    // if (imageSrc.length === 0) {
    //   alert("판매하려는 상품의 이미지를 꼭 등록해주세요");
    //   return;
    // }
    try {
      const { data } = await axios.post("/api/products/upload", formData);
      router.push(`/products/${data.product.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onValid)}
        className="h-full w-[85%] space-y-8 pb-10 pt-5 sm:w-[650px]"
      >
        <Heading
          title="내 물건 팔기"
          subtitle="물건을 등록하면 물물교환 신청도 가능해요!"
        />
        <ImageUploader
          value={imageSrc}
          onChange={(value) => customSetValue("imageSrc", value)}
        />
        <Input
          id="title"
          label="제목"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}
          required
        />
        <Input
          textarea
          id="description"
          label="설명"
          register={register}
          errors={errors}
          disabled={isLoading}
          required
        />
        <Input
          id="price"
          label="가격"
          type="number"
          register={register}
          errors={errors}
          disabled={isLoading}
          formatPrice
          required
        />
        <hr />
        <Suspense fallback={<p>로딩중입니다.</p>}>
          <KakaoMap
            customSetValue={customSetValue}
            latitude={latitude}
            longitude={longitude}
          />
        </Suspense>
        <Button label="제출하기" />
      </form>
    </Container>
  );
};

export default UploadPage;
