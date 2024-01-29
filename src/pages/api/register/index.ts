import bcrypt from "bcryptjs";
import prisma from "@/helpers/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  // 존재하는 이메일이면 클라이언트에서 표시해주기 추가해야 함
  if (existingUser) {
    return res.json({ ok: false, errorMessage: "이미 가입된 메일입니다." });
  }

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });
  return res.json({ ok: true, user });
}
