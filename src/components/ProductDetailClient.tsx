"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import Breakcrum from "@/components/Breakcrum";
import CheckoutButton from "@/components/CheckoutButton";
import Container from "@/components/Container";
import FavoriteButton from "@/components/FavoriteButton";
import FormatAttribute from "@/components/FormatAttribute";
import PriceView from "@/components/PriceView";
import ProductList from "@/components/ProductList";
import { Title } from "@/components/ui/text";
import { Product, ProductVariant, } from "@/constants/types";
import ImageView from "./ImageView";
import { getAllProducts, getProductBySlug } from "@/services/productService";
import useStore from "../../store";
import Loading from "./Loading";

const ProductDetailClient = ({ slug }: { slug: string }) => {
  const [product, setProducts] = useState<Product | null>(null);
  const [productReplate, setProductReplate] = useState<Product[]>([]);
  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { getItemCount } = useStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductBySlug(slug);
        if (res.data.success) {
          const variants = res.data.data.variants.map((item: ProductVariant) => ({
            ...item,
          }));
          setProducts(res.data.data);
          setVariants(variants);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[slug])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProducts({params: {limit: 10, productCategory: product?.productCategory?.id}});
      if (res.data.success) {
        setProductReplate(res.data.data);
      }
    }
    fetchData();
  },[product?.productCategory?.id])


  const filteredByColor = useMemo(() => {
    return selectedColor ? variants.filter(v => v.color.code === selectedColor) : variants;
  }, [selectedColor, variants]);

  const filteredBySize = useMemo(() => {
    return selectedSize ? filteredByColor.filter(v => v.size === selectedSize) : filteredByColor;
  }, [filteredByColor, selectedSize]);

  const selectedVariant = useMemo(() => {
    return filteredBySize[0] ?? filteredByColor[0] ?? variants[0];
  }, [filteredBySize, filteredByColor, variants]);

  const availableSizes = useMemo(() => {
    return Array.from(new Set(filteredByColor.map(v => v.size)));
  }, [filteredByColor]);

  const availableColors = useMemo(() => {
    return Array.from(new Set(variants.map(v => v.color)));
  },[variants])

  const images = useMemo(() => {
    return variants.map((v) => v.image).filter(Boolean);
  },[variants]);

  return (
    <div>
      <Breakcrum title={product?.name || "Sản phẩm"} description="Thông tin sản phẩm" />
      <Container>
        {product === null ? (
          <Loading/>
        ) : (
          <div className="py-10">
            <div className="flex flex-col md:flex-row gap-10">
              <ImageView images={images} is_active={selectedVariant?.image} />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">{product?.name}</h1>
                  <span className="text-sm">
                    SKU: <span className="text-lightColor">{selectedVariant?.sku}</span>
                  </span>
                  <span className="text-sm">
                    Danh mục:{" "}
                    <Link
                      href={`/product?category=${product?.productCategory?.slug}&room=${product?.productCategory?.roomCategory?.slug}`}
                      className="text-primary text-base"
                    >
                      {product?.productCategory?.title}
                    </Link>
                  </span>
                </div>

                <PriceView
                  price={(selectedVariant?.price * getItemCount(selectedVariant?.id)) || product?.min_price}
                  discount={selectedVariant?.discount}
                  className="text-xl"
                />

                {/* Màu sắc */}
                <div className="flex gap-2 flex-wrap items-center">
                  <h3>Màu sắc: </h3>
                  {availableColors.map((color) => (
                    <button
                      key={color?.code}
                      onClick={() => {
                        setSelectedColor(color?.code);
                        setSelectedSize(null);
                      }}
                      className={`h-8 w-8 border rounded ${color.code} ${selectedColor === color?.code ? "ring-2 ring-primary" : ""}`}
                    />
                  ))}
                </div>

                {/* Kích cỡ */}
                <div className="flex gap-2 flex-wrap items-center">
                  <h3>Kích cỡ: </h3>
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-sm border rounded 
                        ${selectedSize === size ? "bg-primary text-white" : "bg-white border-gray-300"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <FormatAttribute text={product?.description || ""} />

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {product && <AddToCartButton variant={selectedVariant} product={product} className="w-full" />}
                    {product && <FavoriteButton
                      showProduct={true}
                      variant={selectedVariant}
                      product={product}
                    />}
                  </div>
                  {product && <CheckoutButton product={product} variant={selectedVariant} className="w-full" />}
                </div>
              </div>
            </div>

            <div className="py-10">
              {product?.body ? (
                <div dangerouslySetInnerHTML={{ __html: product.body }} />
              ) : (
                <span>Đang cập nhật ...</span>
              )}
            </div>

            <div>
              <Title className="uppercase text-xl">Sản phẩm liên quan</Title>
              <ProductList data={productReplate} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailClient;
