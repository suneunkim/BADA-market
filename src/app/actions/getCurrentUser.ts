import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import client from "@/helpers/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getCurrentUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user?.email) {
      return null;
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
      return null;
    }

    return currentUser;
  } catch (error) {
    console.error("Error in getCurrentUser", error);
    return null;
  }
}
