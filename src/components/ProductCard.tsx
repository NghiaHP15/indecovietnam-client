import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Product } from "@/constants/types";
import { ProductStatus } from "@/constants/enum";
import PriceView from "./PriceView";
import ProductSideMenu from "./ProductSideMenu";

const ProductCard = ({ product, basic = false } : { product: Product, basic?: boolean }) => {

  const productVariant = product?.variants.find((item) => item.show === true);
  
  return (
    <>
    <div className={`text-sm group p-3 ${!basic && "hover:bg-white hover:shadow-[0_7px_20px_rgba(0,0,0,.05)] hover:scale-105"} hoverEffect`}>
      <div className="relative  ">
        {product?.image && (
          <div className={`shadow-[0_7px_20px_rgba(0,0,0,.05)] ${!basic && "group-hover:shadow-none"} hoverEffect`}>
            <Link href={`/product/${product?.slug}`} className="relative">
              <Image
                src={productVariant?.image || product?.image}
                alt="productImage"
                width={400}
                height={600}
                priority
                className={`w-full h-auto object-contain`}
              />
              <div className={`${product?.status === ProductStatus.HOT ? "bg-dark_brownish" : product?.status === ProductStatus.NEW ? "bg-light_brownish" : "bg-red-500/70"} absolute opacity-0 group-hover:opacity-100 group-hover:left-3 left-0 top-3 z-10 text-xs text-white px-3 py-1 rounded-[2px] hoverEffect`}>{product?.status === ProductStatus.HOT ? "Hot" : product?.status === ProductStatus.NEW ? "New" : "Sale"}</div>
            </Link>
          </div>
        )}
        <ProductSideMenu product={product} variant={product?.variants[0]} className="opacity-0 group-hover:opacity-100 group-hover:right-3 hoverEffect" />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <Link href={`/product/${product?.slug}`} >
          <h3 className="text-base text-darkColor">{product.name}</h3>
        </Link>
        <div className=" relative h-6 overflow-hidden ">
          <div className="opacity-100 absolute top-0 group-hover:opacity-0 group-hover:top-[-20px] hoverEffect">
            <PriceView
              price={productVariant?.price || product.variants[0].price}
              discount={productVariant?.discount || product.variants[0].discount}
              className="text-sm"
            />
          </div>
          <Link href={`/product/${product?.slug}`} className={`absolute top-0 underline underline-offset-2 opacity-0 group-hover:opacity-100 group-hover:top-0 hoverEffect`}>Mua sản phẩm</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;