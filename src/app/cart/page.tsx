"use client";
import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
// import NoAccess from "@/components/NoAccess";
import PriceFormatter from "@/components/PriceFormatter";
import ProductSideMenu from "@/components/ProductSideMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Title } from "@/components/ui/text";
import QuantityButtons from "@/components/QuantityButton";
import useStore from "../../../store";
import Breakcrum from "@/components/Breakcrum";
import { dataAddress } from "@/constants/data";
import { Address } from "@/constants/types";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useStore();
  const [loading, setLoading] = useState(false);
  const groupedItems = useStore((state) => state.getGroupedItems());
  const [addresses, ] = useState<Address[] | null>(dataAddress);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);


  useEffect(()=>{
    setLoading(false)
  },[])

  const handleResetCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset your cart?"
    );
    if (confirmed) {
      resetCart();
      toast.success("Cart reset successfully!");
    }
  };


  return (
    <>
        <Breakcrum title="Giỏ hàng" description="Chi tiết giỏ hàng" />
        <div className="py-10">
            {true? (
                <Container>
                {groupedItems?.length ? (
                    <>
                    <div className="flex items-center gap-2 py-5">
                        <ShoppingBag className="text-darkColor" />
                        <Title>Giỏ hàng của bạn</Title>
                    </div>
                    <div className="grid lg:grid-cols-3 md:gap-8">
                        <div className="lg:col-span-2 rounded-lg">
                        <div className="rounded-md">
                            {groupedItems?.map(({ variant, product }) => {
                            const itemCount = getItemCount(variant?.id);
                            return (
                                <div
                                key={variant?.id}
                                className="border-b p-2.5 last:border-b-0 flex items-center justify-between gap-5"
                                >
                                <div className="flex flex-1 items-start gap-2 h-30 md:h-38">
                                    {variant?.image && (
                                    <Link
                                        href={`/product/${product?.slug}`}
                                        className="p-0.5 md:p-1 mr-2 rounded-md
                                        overflow-hidden group"
                                    >
                                        <Image
                                        src={variant?.image}
                                        alt="productImage"
                                        width={500}
                                        height={500}
                                        loading="lazy"
                                        className="w-auto md:w-40 h-30 md:h-38 object-cover group-hover:scale-105 hoverEffect"
                                        />
                                    </Link>
                                    )}
                                    <div className="h-full flex flex-1 flex-col justify-between py-1 gap-4">
                                    <div className="flex flex-col gap-0.5 md:gap-1.5">
                                        <h2 className="text-lg font-semibold line-clamp-1">
                                        {product?.name}
                                        </h2>
                                        <p className="text-base capitalize">
                                        Màu:{" "}
                                        <span className={`w-6 h-6 rounded-[5px] ${variant.color}`}></span>
                                        </p>
                                        <p className="text-base capitalize">
                                        Size:{" "}
                                        <span className="font-semibold">
                                            {variant?.size}
                                        </span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                            <ProductSideMenu
                                                product={product}
                                                variant={variant}
                                                className="relative top-0 right-0"
                                            />
                                            </TooltipTrigger>
                                            <TooltipContent className="font-bold">
                                            Thêm yêu thích
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger>
                                            <Trash
                                                onClick={() => {
                                                deleteCartProduct(product?.id);
                                                toast.success(
                                                    "Xóa thành công!"
                                                );
                                                }}
                                                className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-500 hover:text-red-600 hoverEffect"
                                            />
                                            </TooltipTrigger>
                                            <TooltipContent className="font-bold">
                                            Xóa sản phẩm
                                            </TooltipContent>
                                        </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between h-30 md:h-38 p-0.5 md:p-1">
                                    <PriceFormatter
                                    amount={(variant?.price as number) * itemCount}
                                    className="font-bold text-lg"
                                    />
                                    <QuantityButtons variant={variant} product={product} />
                                </div>
                                </div>
                            );
                            })}
                            <Button
                            onClick={handleResetCart}
                            className="m-5 font-semibold"
                            >
                            Đặt lại
                            </Button>
                        </div>
                        </div>
                        <div>
                        <div className="lg:col-span-1">
                            <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
                            <h2 className="text-xl font-semibold mb-4">
                                Thông tin đơn hàng
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                <span>Tổng phụ</span>
                                <PriceFormatter amount={getSubTotalPrice()} />
                                </div>
                                <div className="flex items-center justify-between">
                                <span>Giảm giá</span>
                                <PriceFormatter
                                    amount={getSubTotalPrice() - getTotalPrice()}
                                />
                                </div>
                                {/* <Separator /> */}
                                <div className="flex items-center justify-between font-semibold text-lg">
                                <span>Tổng tiền</span>
                                <PriceFormatter
                                    amount={getTotalPrice()}
                                    className="text-lg font-bold text-black"
                                />
                                </div>
                                <Button
                                className="w-full rounded-full text-base font-bold tracking-wide hoverEffect"
                                size="lg"
                                disabled={loading}
                                //   onClick={handleCheckout}
                                >
                                {loading ? "Vui lòng đợi..." : "Tiến hành thanh toán"}
                                </Button>
                            </div>
                            </div>
                            {addresses && (
                            <div className="bg-white rounded-md mt-5">
                                <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">Địa chỉ vận chuyển</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <RadioGroup
                                    defaultValue={addresses
                                        ?.find((addr) => addr.isDefault)
                                        ?.id.toString()}
                                    >
                                    {addresses?.map((address) => (
                                        <div
                                        key={address?.id}
                                        onClick={() => setSelectedAddress(address)}
                                        className={`flex items-center space-x-2 mb-4 cursor-pointer ${selectedAddress?.id === address?.id && "text-dark_brownish"}`}
                                        >
                                        <RadioGroupItem
                                            id={address?.id.toString()}
                                            value={address?.id.toString()}
                                        />
                                        <Label
                                            htmlFor={address?.id}
                                            className="grid gap-1.5 flex-1 cursor-pointer"
                                        >
                                            <span className="text-base font-bold">
                                            {address?.receiverName}
                                            </span>
                                            <span className="text-base text-black/60">
                                            {address?.ward}, {address?.district}, {address?.city}
                                            </span>
                                        </Label>
                                        </div>
                                    ))}
                                    </RadioGroup>
                                    <Button variant="outline" className="w-full text-base mt-4">
                                        Thêm địa chỉ
                                    </Button>
                                </CardContent>
                                </Card>
                            </div>
                            )}
                        </div>
                        </div>
                        {/* Order summary for mobile view */}
                        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white pt-2">
                        <div className="bg-white p-4 rounded-lg border mx-4">
                            <h2>Order Summary</h2>
                            <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>SubTotal</span>
                                <PriceFormatter amount={getSubTotalPrice()} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Discount</span>
                                <PriceFormatter
                                amount={getSubTotalPrice() - getTotalPrice()}
                                />
                            </div>
                            {/* <Separator /> */}
                            <div className="flex items-center justify-between font-semibold text-lg">
                                <span>Total</span>
                                <PriceFormatter
                                amount={getTotalPrice()}
                                className="text-lg font-bold text-black"
                                />
                            </div>
                            <Button
                                className="w-full rounded-full font-semibold tracking-wide hoverEffect"
                                size="lg"
                                disabled={loading}
                                // onClick={handleCheckout}
                            >
                                {loading ? "Please wait..." : "Proceed to Checkout"}
                            </Button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </>
                ) : (
                    <EmptyCart />
                )}
                </Container>
            ) : (
                // <NoAccess />
                <></>
            )}
        </div>
    </>
  );
};

export default CartPage;