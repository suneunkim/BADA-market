"use client";
import ImageUploader from "@/components/ImageUploader";
import Container from "@/components/Layout/Container";
import Button from "@/components/UI/Button";
import Heading from "@/components/UI/Heading";
import Input from "@/components/UI/Input";
import axios from "axios";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

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
      imageSrc: [],
      title: "",
      description: "",
      price: "",
      latitude: 31.5523,
      longitude: 122.7951,
    },
  });

  const imageSrc = watch("imageSrc");
  const customSetValue = (id: string, value: string[]) => {
    // onChange로 value 받고 RHF의 setValue 이용
    setValue(id, value);
  };

  const onValid: SubmitHandler<FieldValues> = async (formData) => {
    // if (imageSrc.length === 0) {
    //   alert("판매하려는 상품의 이미지를 꼭 등록해주세요");
    //   return;
    // }

    const { data } = await axios.post("/api/products/upload", formData);
    console.log("data", data);
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
        <Button label="제출하기" />
      </form>
    </Container>
  );
};

export default UploadPage;
