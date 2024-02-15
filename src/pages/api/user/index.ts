import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import client from "@/helpers/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user?.email) {
      return res.status(401).json({ ok: false, error: "로그인이 필요합니다." });
    }
    // 로그인 한 유저의 DB 정보
    const currentUser = await client.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        favs: true,
      },
    });

    if (!currentUser) {
      return res
        .status(404)
        .json({ ok: false, error: "사용자를 찾을 수 없습니다." });
    }

    return res.json({ ok: true, currentUser });
  } catch (error) {
    console.error("Error in getCurrentUser", error);
    return res
      .status(500)
      .json({ ok: false, error: "서버 내부 에러가 발생했습니다." });
  }
}
