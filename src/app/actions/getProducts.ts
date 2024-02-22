import client from "@/helpers/client";

export default async function getProducts() {
  try {
    const products = await client.product.findMany({
      orderBy: {
        createAt: "desc",
      },
      include: {
        images: true,
      },
    });

    return {
      data: products,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
