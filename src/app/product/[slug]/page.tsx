import ProductDetailClient from "@/components/ProductDetailClient";

const ProductDetailPage =  async ({ params }: {params: Promise<{ roomslug: string; categoryslug: string; slug: string }>}) => {
  const { slug } = await params;

  return <ProductDetailClient slug={slug} />;
};

export default ProductDetailPage;
