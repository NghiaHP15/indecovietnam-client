"use client";

import { useState } from "react";
import Container from "./Container";
import { Heart, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import Image from "next/image";
import PriceFormatter from "./PriceFormatter";
// import AddToCartButton from "./AddToCartButton";
import useStore from "../../store";
import { FavoriteItem } from "@/constants/types";
import Breakcrum from "./Breakcrum";
import AddToCartButton from "./AddToCartButton";

const WishListProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(7);
  const { favoriteProduct, removeFromFavorite, resetFavorite } = useStore();
  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 5, favoriteProduct.length));
  };

  const handleResetWishlist = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset your wishlist?"
    );
    if (confirmReset) {
      resetFavorite();
      toast.success("Wishlist reset successfully");
    }
  };

  return (
    <Container>
        <Breakcrum title="Yêu thích" description="Danh sách yêu thích của bạn" />
        <div className="py-10">
        {favoriteProduct?.length > 0 ? (
            <>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                <thead className="border-b border-gray-100">
                    <tr className="bg-black/5">
                    <th className="p-2 pl-10 text-left">Hình ảnh</th>
                    <th className="p-2 text-left">Tên sản phẩm</th>
                    <th className="p-2 text-left hidden md:table-cell">Loại</th>
                    <th className="p-2 text-left hidden md:table-cell">Danh mục</th>
                    <th className="p-2 text-left hidden md:table-cell">Trạng thái</th>
                    <th className="p-2 text-left ">Giá</th>
                    <th className="p-2 text-center md:text-left">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {favoriteProduct
                    ?.slice(0, visibleProducts)
                    ?.map((item: FavoriteItem) => (
                        <tr key={item?.variant?.id} className="border-b border-gray-100">
                        <td className="px-2 py-4 flex items-center gap-3">
                            <X
                                onClick={() => {
                                    removeFromFavorite(item?.variant?.id);
                                    toast.success("Đã xóa sản phẩm!");
                                }}
                                size={18}
                                className="hover:text-primary hover:cursor-pointer hoverEffect"
                            />
                            {item?.variant?.image && (
                            <Link
                                href={`/product/${item?.product?.slug}`}
                                className="rounded-md group"
                            >
                                <Image
                                src={item?.variant?.image}
                                alt={"product image"}
                                width={80}
                                height={80}
                                className="rounded-md group-hover:scale-105 hoverEffect h-20 w-20 object-contain"
                                />
                            </Link>
                            )}
                        </td>
                        <td className="p-2">
                            <span className="line-clamp-1">{item?.product?.name}</span>
                        </td>
                        <td className="p-2 capitalize hidden md:table-cell">
                            <div className="flex items-center gap-3">
                                <span className={`w-5 h-5 border border-gray-200 rounded-[5px] ${item?.variant?.color}`}></span>
                                <span>{item?.variant?.size}</span>
                            </div>
                        </td>
                        <td className="p-2 capitalize hidden md:table-cell">
                            {item?.product?.category && (
                            <p className="uppercase line-clamp-1 text-xs font-medium">
                                {item?.product?.category?.subCategory?.title}
                            </p>
                            )}
                        </td>
                        <td
                            className={`p-2 w-24 ${
                            (item?.variant?.inventoryitems as number) > 0
                                ? "text-green-600"
                                : "text-red-600"
                            } font-medium text-sm hidden md:table-cell`}
                        >
                            {(item?.variant?.inventoryitems as number) > 0
                            ? "Còn hàng"
                            : "Hết hàng"}
                        </td>
                        <td className="p-2">
                            <PriceFormatter amount={item?.variant?.price || 0} />
                        </td>
                        <td className="p-2">
                            <AddToCartButton product={item?.product} variant={item?.variant} />
                        </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <div className="flex items-center gap-2 justify-end">
                {visibleProducts < favoriteProduct?.length && (
                <div className="my-5">
                    <Button variant="outline" onClick={loadMore}>
                    Load More
                    </Button>
                </div>
                )}
                {visibleProducts > 10 && (
                <div className="my-5">
                    <Button
                    onClick={() => setVisibleProducts(10)}
                    variant="outline"
                    >
                    Load Less
                    </Button>
                </div>
                )}
                {favoriteProduct?.length > 0 && (
                <Button
                    onClick={handleResetWishlist}
                    className="my-5 font-semibold"
                    size="lg"
                    >
                    Đặt lại
                </Button>
            )}
            </div>
            </>
        ) : (
            <div className="flex min-h-[400px] flex-col items-center justify-center space-y-6 px-4 text-center">
            <div className="relative mb-4">
                <div className="absolute -top-1 -right-1 h-4 w-4 animate-ping rounded-full bg-muted-foreground/20" />
                <Heart
                className="h-12 w-12 text-muted-foreground"
                strokeWidth={1.5}
                />
            </div>
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                Danh sách yêu thích trống
                </h2>
                <p className="text-sm text-muted-foreground">
                Các sản phẩm yêu thích của bạn sẽ xuất hiện tại đây
                </p>
            </div>
            <Button asChild>
                <Link href="/product">Tiếp tục mua sắm</Link>
            </Button>
            </div>
        )}
        </div>
    </Container>
  );
};

export default WishListProducts;