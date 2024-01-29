// pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  // 로그인 페이지 접근 시도하고 토큰(로그인 세션)이 있으면 메인 페이지로 리디렉션
  if (pathname.startsWith("/auth/login") && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
