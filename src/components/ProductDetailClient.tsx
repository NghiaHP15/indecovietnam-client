"use client";
import { useMemo, useState } from "react";
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
import { colorOptions, dataProducts } from "@/constants/data";
import { Product } from "@/constants/types";
import ImageView from "./ImageView";

const ProductDetailClient = ({ product }: { product: Product }) => {
  const variants = product.variants.map((item) => ({
    ...item,
  }));

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const filteredByColor = useMemo(() => {
    return selectedColor ? variants.filter(v => v.color === selectedColor) : variants;
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

  const availableColors = Array.from(new Set(variants.map(v => v.color)));
  const images = variants.map((v) => v.image).filter(Boolean);

  const productReplated = dataProducts.filter(
    (item) => item.category?.slug === product.category?.slug && item.slug !== product.slug
  );

  return (
    <div>
      <Breakcrum title={product.name} description="Thông tin sản phẩm" />
      <Container>
        <div className="py-10">
          <div className="flex flex-col md:flex-row gap-10">
            <ImageView images={images} is_active={selectedVariant?.image} />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <span className="text-sm">
                  SKU: <span className="text-lightColor">{selectedVariant?.sku}</span>
                </span>
                <span className="text-sm">
                  Danh mục:{" "}
                  <Link
                    href={`/product/${product.category?.subCategory?.slug}`}
                    className="text-primary"
                  >
                    {product.category?.subCategory?.title}
                  </Link>
                </span>
              </div>

              <PriceView
                price={selectedVariant?.price}
                discount={selectedVariant?.discount}
                className="text-xl"
              />

              {/* Màu sắc */}
              <div className="flex gap-2 flex-wrap items-center">
                <h3>Màu sắc: </h3>
                {availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setSelectedSize(null);
                    }}
                    className={`h-8 w-8 border rounded ${color} ${selectedColor === color ? "ring-2 ring-primary" : ""}`}
                    style={{ backgroundColor: colorOptions.find((c) => c.code === color)?.code }}
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

              <FormatAttribute text={product.description || ""} />

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <AddToCartButton variant={selectedVariant} product={product} className="w-full" />
                  <FavoriteButton
                    showProduct={true}
                    variant={selectedVariant}
                    product={product}
                  />
                </div>
                <CheckoutButton product={product} variant={selectedVariant} className="w-full" />
              </div>
            </div>
          </div>

          <div className="py-10">
            {product.body ? (
              <div dangerouslySetInnerHTML={{ __html: product.body }} />
            ) : (
              <span>Đang cập nhật ...</span>
            )}
          </div>

          {productReplated.length > 0 && (
            <div>
              <Title className="uppercase text-xl">Sản phẩm liên quan</Title>
              <ProductList data={productReplated} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailClient;
