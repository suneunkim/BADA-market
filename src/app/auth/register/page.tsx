"use client";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      paswword: "",
    },
  });

  const onValid = async (formData: any) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register", formData);
      if (data.ok) {
        router.push("/auth/login");
      } else {
        alert(data.errorMessage);
      }
    } catch (error) {
      console.log(error);
      alert("네트워크 오류 또는 서버 문제가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  // 로딩 시 ui disable로 보여주기
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="pt-10">
      <form
        onSubmit={handleSubmit(onValid)}
        className="mx-auto flex w-[75%] flex-col justify-center space-y-5 sm:w-[500px]"
      >
        <h1 className="pb-5 text-center text-lg font-semibold text-neutral-700">
          바다 마켓에 지금 바로 가입하세요!
        </h1>
        <Input
          id="name"
          type="text"
          label="닉네임"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Input
          id="email"
          type="text"
          label="이메일"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Input
          id="password"
          type="password"
          label="비밀번호"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Button label="가입하기" disabled={isLoading} />
      </form>
      <div className="pt-8">
        <p className="p-2 text-center text-sm text-stone-500">
          이미 회원이신가요?{" "}
          <Link
            className="text-sm text-stone-700 hover:underline"
            href="/auth/login"
          >
            로그인 하러 가기
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
