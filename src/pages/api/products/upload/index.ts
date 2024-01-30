import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/helpers/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const currentUser = await getCurrentUser(req, res);
  // 로그인 확인
  if (!currentUser) {
    return res
      .status(401)
      .json({ ok: false, errorMessage: "로그인이 필요합니다." });
  }

  const { imageSrc, title, description, price, latitude, longitude } = req.body;
  console.log(
    "api console",
    imageSrc,
    title,
    description,
    price,
    latitude,
    longitude,
  );

  const product = await prisma.product.create({
    data: {
      title,
      description,
      price: +price,
      latitude,
      longitude,
      userId: currentUser.id,
    },
  });

  await Promise.all(
    imageSrc.map((url: string) => {
      return prisma.image.create({
        data: {
          url,
          productId: product.id,
        },
      });
    }),
  );

  return res.json({ ok: true, product });
}
