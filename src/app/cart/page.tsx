"use client";
import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import NoAccess from "@/components/NoAccess";
import PriceFormatter from "@/components/PriceFormatter";
import ProductSideMenu from "@/components/ProductSideMenu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Title } from "@/components/ui/text";
import QuantityButtons from "@/components/QuantityButton";
import useStore from "../../../store";
import Breakcrum from "@/components/Breakcrum";
import { Address } from "@/constants/types";
import { getCustomerById } from "@/services/userService";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import PriceView from "@/components/PriceView";

const CartPage = () => {
    const {
        deleteCartProduct,
        getTotalPrice,
        getItemCount,
        getSubTotalPrice,
        resetCart,
    } = useStore();
    const groupedItems = useStore((state) => state.getGroupedItems());
    const [addresses, setAddresses] = useState<Address[]>([]);
    const { user, address, addAddress } = useStore();

    useEffect(() => {
        const fetchUser = async (id: string) => {
            try {
                const res = await getCustomerById({ id });
                if (res.data.success) {
                    setAddresses(res.data.data.addresses);
                }
            } catch (error) {
            console.log(error);
            } 
        };
        if (user?.id) {
            fetchUser(user.id);
        }
    }, [user]);

    const handleResetCart = useCallback(() => {
        resetCart();
        toast.success("Giỏ hàng được đặt lại!");
    }, [resetCart]);

    const handleUpdate = useCallback((data: Address) => {
        addAddress(data);
    }, [addAddress]);

    return (
        <>
            {user?.id ? (
            <>
                <Breakcrum title="Giỏ hàng" description="Chi tiết giỏ hàng" />
                {groupedItems?.length ? (
                <div className="py-5 md:py-10">
                    <Container>
                        <>
                        <div className="flex items-center gap-2 py-5">
                            <ShoppingBag className="text-darkColor" />
                            <Title className="text-base md:text-xl uppercase">Giỏ hàng của bạn</Title>
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
                                        <div className="h-full flex flex-1 flex-col justify-between py-1 gap-2 md:gap-4">
                                        <div className="flex flex-col gap-0.5 md:gap-1.5">
                                            <h2 className="text-lg line-clamp-1">
                                            {product?.name}
                                            </h2>
                                            <div className="flex items-center flex-nowrap gap-2 text-base capitalize">
                                            <span>Màu: </span>
                                            <span className={`w-6 h-6 block rounded-[5px] border border-gray-300 ${variant.color.code}`}></span>
                                            </div>
                                            <div className="flex items-center flex-nowrap gap-2 text-base capitalize">
                                            <span>Size:</span>
                                            <span className="pl-1">
                                                {variant?.size}
                                            </span>
                                            </div>
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
                                                    className="w-8 h-8 p-2 md:w-8 md:h-8 mr-1 text-gray-500 hover:text-red-600 hoverEffect"
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
                                    <div className="flex flex-col items-end justify-between h-30 md:h-38 p-0.5 md:p-1">
                                        <PriceView
                                            price={variant?.price * itemCount}
                                            discount={variant?.discount}
                                            className="text-base font-medium"
                                        />
                                        <QuantityButtons variant={variant} product={product} />
                                    </div>
                                </div>
                                );
                                })}
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button
                                            className="m-5 font-semibold"
                                            >
                                            Đặt lại
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Bạn có muốn xóa?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Hành động này không thể hoàn tác, bán có muốn tiếp tục.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Hủy</AlertDialogCancel>
                                            <AlertDialogAction onClick={handleResetCart}>Tiếp tục</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                            </div>
                            <div>
                            <div className="lg:col-span-1">
                                <div className="w-full bg-white p-6 rounded-lg border">
                                    <h2 className="text-lg md:text-xl font-medium mb-4">
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
                                        <div className="flex items-center justify-between font-medium text-lg">
                                        <span>Tổng tiền</span>
                                        <PriceFormatter
                                            amount={getTotalPrice()}
                                            className="text-lg font-medium text-black"
                                        />
                                        </div>
                                        <div className="flex items-center justify-center mt-4">
                                            <Link
                                                className="w-max rounded-xl text-base font-medium tracking-wide bg-light_brownish hover:bg-light_brownish/80 py-2 px-4 text-white hoverEffect"
                                                href="/checkout"
                                            >
                                                Tiến hành thanh toán
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {addresses && (
                                <div className="w-full bg-white p-6 rounded-lg border mt-5">
                                    <h2 className="text-lg md:text-xl font-medium mb-4">
                                        Địa chỉ vận chuyển
                                    </h2>
                                     <div className="space-y-4">
                                        {addresses?.map((item) => (
                                            <div
                                            key={item?.id}
                                            className={`${item?.id === address?.id && "text-light_brownish"} flex items-center gap-4 cursor-pointer pb-3 mb-3 border-b border-dashed border-b-gray-200 last:border-b-0 last:mb-0 last:pb-0 `}
                                            >
                                            <Checkbox id={item.id} checked={address.id === item.id} onCheckedChange={() => handleUpdate(item)} />
                                            <Label
                                                htmlFor={item?.id}
                                                className="grid gap-1.5 flex-1 cursor-pointer"
                                            >
                                                <span className="text-base font-medium">
                                                {item?.receiver_name}
                                                </span>
                                                <span className="text-base line-clamp-1 text-black/60">
                                                {item?.ward}, {item?.district}, {item?.city}
                                                </span>
                                            </Label>
                                            </div>
                                        ))}
                                        <div className="flex items-center justify-center mt-4">
                                            <Link href="/address" className="w-max text-base text-blue-500 hover:text-blue-600 underline underline-offset-2 tracking-wide hoverEffect">
                                                Thêm địa chỉ
                                            </Link>
                                        </div>
                                     </div>
                                </div>
                                )}
                            </div>
                            </div>
                        </div>
                        </>
                    </Container>
                </div>
                    ) : (
                        <EmptyCart />
                    )}
            </>
            ) : (
                <NoAccess />
            )}
        </>
    );
};

export default CartPage;