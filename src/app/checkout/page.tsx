"use client";
import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import useStore from "../../../store";
import PriceFormatter from "@/components/PriceFormatter";
import { PaymentMethod } from "@/constants/enum";
import { momo, vnpay, zalopay } from "@/images";
import { createdPayment } from "@/services/paymentService";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { shoppingCart } from "@/images";

const Checkout = () => {
    const { user, address, getItemCount, getTotalPrice, getSubTotalPrice } = useStore();
    const groupedItems = useStore((state) => state.getGroupedItems());
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState({
        order_date: new Date().toISOString(),
        address: address?.address_line + " - " + address?.ward + " - " + address?.district + " - " + address?.city,
        note: "",
        paymentmethod: "",
        total_amount: getTotalPrice(),
        customer: {
            id: user?.id,
        },
        products: groupedItems.map((item) => ({
            name: item.product.name,
            quantity: item.quantity,
            product_variant: {
                id: item.variant.id
            },
        })),
    }); 

    const handleCheckout = useCallback(async () => {
        if(groupedItems.length === 0){
            toast.error("Bạn chưa cho san phẩm trong giỏ hàng");
        }
        else if(!data.paymentmethod){
            toast.error("Vui lòng chọn phương thức thanh toán");
        } 
        else {
            try {
                setLoading(true);
                const res = await createdPayment(data);
                if(res.data.success){
                    window.location.href = res.data.data.paymentUrl;
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    },[data, groupedItems])

    const handleChange = useCallback((value: string, name: string) => {
        setData({
            ...data,
            [name]: value,
        });
    },[data])

    return (
        <div>
            <Breakcrum title="Thanh toán" description="Thanh toán đơn hàng" />
            <div className="py-10">
                <Container>
                    {groupedItems.length >  0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                            <div className="col-span-3 flex flex-col gap-4">
                                <form className="grid grid-cols-3 gap-4">
                                    <h2 className="text-xl col-span-3">Thông tin giao hàng</h2>
                                    {!user?.id && <span className="col-span-3">Quý khách đã có tài khoản? <Link href="/login" className="text-blue-400">Đăng nhập</Link></span>}
                                    <Input name="fullname" value={(user?.firstname + " " + user?.lastname) || ""} readOnly placeholder="Họ và tên" className="col-span-3 " />
                                    <Input name="email" value={(user?.email) || ""} readOnly placeholder="Email" className="col-span-2" />
                                    <Input name="phone" value={(user?.phone) || ""} readOnly placeholder="Số điện thoại" className="col-span-1" />
                                    <Input name="address" value={data.address} onChange={(e) => handleChange(e.target.value, "address")} placeholder="Địa chỉ" className="col-span-3"/>
                                    <Textarea name="note" value={data.note} onChange={(e) => handleChange(e.target.value, "note")} placeholder="Thông tin thêm" className="col-span-3" />
                                    <Link href="/profile" className="col-span-3 text-base text-blue-400 underline underline-offset-3">Thông tin khách hàng</Link>
                                </form>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl ">Thông tin vận chuyển</h2>
                                    <div className="w-full h-20 md:h-30 border border-gray-200 rounded-md flex flex-col items-center justify-center">
                                        {data.address ? (
                                            <>
                                            <span className="text-gray-400">Chi phí vận chuyển chúng tôi sẽ liên hệ trao đổi với quý khách.</span>
                                            </>
                                        ) : (
                                            <>
                                            <Truck className="w-15 h-15 text-gray-400"/>
                                            <span className="text-gray-400">Vui lòng chọn tỉnh / thành để có thống tin vận chuyển.</span>
                                            </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl ">Phương thức thanh toán</h2>
                                    <div className="flex flex-col border border-gray-200 rounded-md">
                                        <div className="p-4 flex flex-col gap-4">
                                            <div className="flex items-center border-b border-gray-200 pb-4 gap-3">
                                                <Checkbox id={PaymentMethod.MOMO as string} checked={PaymentMethod.MOMO === data.paymentmethod} onCheckedChange={() => handleChange(PaymentMethod.MOMO, "paymentmethod")} />
                                                <Label htmlFor={PaymentMethod.MOMO as string} className="text-darkGray text-base font-normal cursor-pointer">
                                                    <Image src={momo.src} width={100} height={100} alt="techcombank" className="w-10 h-10 border border-gray-200 rounded-md" />
                                                    <span>Momo</span>
                                                </Label>
                                            </div> 
                                            <div className="flex items-center border-b border-gray-200 pb-4 gap-3">
                                                <Checkbox id={PaymentMethod.VNPAY as string} checked={PaymentMethod.VNPAY === data.paymentmethod} onCheckedChange={() => handleChange(PaymentMethod.VNPAY, "paymentmethod")} />
                                                <Label htmlFor={PaymentMethod.VNPAY as string} className="text-darkGray text-base font-normal cursor-pointer">
                                                    <Image src={vnpay.src} width={100} height={100} alt="techcombank" className="w-10 h-10 border border-gray-200 rounded-md" />
                                                    <span>VNPay</span>
                                                </Label>
                                            </div> 
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                                                    <Checkbox id={PaymentMethod.BANK as string} checked={PaymentMethod.BANK === data.paymentmethod} onCheckedChange={() => handleChange(PaymentMethod.BANK, "paymentmethod")} />
                                                    <Label htmlFor={PaymentMethod.BANK as string} className="text-darkGray text-base font-normal cursor-pointer">
                                                        <Image src={zalopay.src} width={100} height={100} alt="techcombank" className="w-10 h-10 border border-gray-200 rounded-md" />
                                                        <span>Chuyển khoản ngân hàng</span>
                                                    </Label>
                                                </div>
                                                <div className="pt-4 flex flex-col gap-2 items-center justify-center text-darkGray">
                                                    <span>Số tài khoản: 123456789</span>
                                                    <span>Ngân hàng: Teckcombank</span>
                                                <span>Nội dung: Họ tên + Số điện thoại</span>
                                            </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col gap-4">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-xl">Thông tin đơn hàng</h2>
                                    <div className="flex flex-col gap-2">
                                        {groupedItems?.map((item ) => {
                                            const itemCount = getItemCount(item?.variant?.id);
                                            return (
                                                <div
                                                key={item?.variant?.id}
                                                className="border-b p-2.5 last:border-b-0 flex items-center justify-between g"
                                                >
                                                    <div className="flex flex-1 items-start gap-4">
                                                        {item?.product?.image && (
                                                            <div className="relative">
                                                                <Image
                                                                    src={item.product?.image}
                                                                    alt="productImage"
                                                                    width={500}
                                                                    height={500}
                                                                    loading="lazy"
                                                                    className="w-20 h-auto object-cover border border-gray-200 rounded-md"
                                                                />
                                                                <span className="absolute top-[-5px] right-[-5px] bg-gray-400 text-white h-5 w-5 rounded-full text-xs font-semibold flex items-center justify-center">{itemCount}</span>
                                                            </div>
                                                        )}
                                                        <div className="h-full flex flex-1 items-center justify-between py-1">
                                                            <div className="flex flex-col gap-0.5 md:gap-1.5">
                                                                <h2 className="text-base line-clamp-1">
                                                                {item?.product?.name}
                                                                </h2>
                                                                <div className="flex items-center gap-3">
                                                                    <span className={`w-5 h-5 border border-gray-200 rounded-[5px] ${item?.variant?.color?.code}`}></span>
                                                                    <span>{item?.variant?.size}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <PriceFormatter amount={item?.variant?.price} className="text-base" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-base text-darkGray">Tạm tính:</span>
                                        <PriceFormatter
                                        amount={getSubTotalPrice()}
                                        className={"text-darkColor text-lg font-normal"}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-base text-darkGray">Đã giảm:</span>
                                        <PriceFormatter
                                        amount={getSubTotalPrice() - getTotalPrice()}
                                        className={"text-darkColor text-lg font-normal"}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-base text-darkGray">Tổng cộng:</span>
                                        <PriceFormatter
                                        amount={getTotalPrice()}
                                        className={"text-darkColor text-lg font-normal"}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <Link href="/cart" className="text-base text-blue-400 underline underline-offset-3">Trở lại giỏ hàng</Link>
                                    <Button className="bg-light_brownish text-white py-2 px-4 rounded-md hover:bg-dark_brownish/80 hoverEffect" onClick={handleCheckout} isLoading={loading}>Thanh toán</Button>
                                </div>
                            </div>
                        </div>
                    ): (
                        <div className="flex min-h-[400px] flex-col items-center justify-center space-y-6 px-4 text-center">
                            <div className="relative mb-4">
                                <div className="absolute -top-1 -right-1 h-4 w-4 animate-ping rounded-full bg-muted-foreground/20" />
                                <Image
                                    src={shoppingCart.src}
                                    alt="Shopping cart"
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    className="w-25 h-auto object-contain"
                                />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                Danh sách giỏ hàng trống
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                Các sản phẩm của bạn sẽ xuất hiện tại đây
                                </p>
                            </div>
                            <Button>
                                <Link href="/product">Tiếp tục mua sắm</Link>
                            </Button>
                        </div>
                    )}
                </Container>
            </div>  
        </div>
    );
};

export default Checkout;
