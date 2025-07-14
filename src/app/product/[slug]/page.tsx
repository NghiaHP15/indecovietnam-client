import { dataProducts } from "@/constants/data";
import { Product } from "@/constants/types";
import ProductDetailClient from "@/components/ProductDetailClient";


const ProductDetailPage =  async ({ params }: {params: Promise<{ roomslug: string; categoryslug: string; slug: string }>}) => {
  const { slug } = await params;
  const product = dataProducts.find((item: Product) => item?.slug === slug);

  if (!product) return <div className="p-10 text-center text-red-500">Sản phẩm không tồn tại</div>;

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;
