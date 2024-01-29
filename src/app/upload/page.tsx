"use client";
import ImageUploader from "@/components/ImageUploader";
import Container from "@/components/Layout/Container";
import Heading from "@/components/UI/Heading";
import Input from "@/components/UI/Input";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

// input과 사진이 담길 UI가 필요
// 이미지 업로드 위한 CDN과 업로드 함수 만들기
// 카카오 지도 API 이용해야함

const UploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      latitude: 31.5523,
      longitude: 122.7951,
      imageSrc: "",
      price: "",
    },
  });
  return (
    <Container>
      <form className="w-[85%] space-y-8 pb-10 pt-5 sm:w-[650px]">
        <Heading
          title="내 물건 팔기"
          subtitle="물건을 등록하면 물물교환 신청도 가능해요!"
        />
        <ImageUploader />
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
      </form>
    </Container>
  );
};

export default UploadPage;
