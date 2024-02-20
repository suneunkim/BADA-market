import client from "@/helpers/client";

interface ProductParams {
  productId: string;
}

export default async function getProductById(params: ProductParams) {
  try {
    const { productId } = params;

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
