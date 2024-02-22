import client from "@/helpers/client";

export default async function getProductById(productId: string) {
  if (!productId) return;

  try {
    const product = await client.product.findUnique({
      where: {
        id: Number(productId),
      },
      include: {
        user: true,
        images: true,
      },
    });

    if (!product) return null;

    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
