"use client";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onValid: SubmitHandler<FieldValues> = async (formData: any) => {
    setIsLoading(true);
    try {
      await signIn("credentials", formData);
      router.replace("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  // router.push("/auth/login");
  // 로딩 시 ui disable로 보여주기
  return (
    <section className="pt-10">
      <form
        onSubmit={handleSubmit(onValid)}
        className="mx-auto flex w-[75%] flex-col justify-center space-y-5 sm:w-[500px]"
      >
        <h1 className="pb-5 text-center text-lg font-semibold text-neutral-700">
          바다 마켓을 둘러보고 물건을 사고 팔거나 교환해보세요!
        </h1>
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
        <Button label="로그인하기" disabled={isLoading} />
      </form>
      <div className="pt-8">
        <p className="p-2 text-center text-sm text-stone-500">
          아직 회원이 아니신가요?{" "}
          <Link
            className="text-sm text-stone-700 hover:underline"
            href="/auth/register"
          >
            회원가입 하러 가기
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
