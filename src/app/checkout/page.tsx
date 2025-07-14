"use client";
import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { momo, techcombank, vnpay } from "@/images";
import { Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useStore from "../../../store";
import PriceFormatter from "@/components/PriceFormatter";

const Checkout = () => {
    const { getItemCount, getTotalPrice, getSubTotalPrice } = useStore();
    const groupedItems = useStore((state) => state.getGroupedItems());

    return (
        <div>
            <Breakcrum title="Thanh toán" description="Thanh toán đơn hàng" />
            <div className="py-10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        <div className="col-span-3 flex flex-col gap-4">
                            <form className="grid grid-cols-3 gap-4">
                                <h2 className="text-xl ">Thông tin giao hàng</h2>
                                <span className="col-span-3">Quý khách đã có tài khoản? <Link href="/login" className="text-blue-400">Đăng nhập</Link></span>
                                <Input name="fullname" placeholder="Họ và tên" className="col-span-3" />
                                <Input name="email" placeholder="Email" className="col-span-2" />
                                <Input name="phone" placeholder="Số điện thoại" className="col-span-1" />
                                <Input name="address" placeholder="Địa chỉ" className="col-span-3"/>
                                <div className="col-span-1">
                                    <Select name="city">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Chọn tỉnh/thành"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="a">a</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="col-span-1">
                                    <Select name="city">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Chọn quận/huyện" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="a">a</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="col-span-1">
                                    <Select name="city">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Chọn phường/xã" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="a">a</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Textarea name="note" placeholder="Thông tin thêm" className="col-span-3" />
                            </form>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl ">Thông tin vận chuyển</h2>
                                <div className="w-full h-30 border border-gray-200 rounded-md flex flex-col items-center justify-center">
                                    <Truck className="w-15 h-15 text-gray-400"/>
                                    <span className="text-gray-400">Vui lòng chọn tỉnh / thành để có thống tin vận chuyển.</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl ">Phương thức thanh toán</h2>
                                <div className="flex flex-col border border-gray-200 rounded-md">
                                    <div className="p-4 gap-3">
                                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                                            <Checkbox id="bank" />
                                            <Label htmlFor="bank" className="text-darkGray text-base font-normal cursor-pointer">
                                                <Image src={techcombank} alt="techcombank" className="w-10 h-10 border border-gray-200 rounded-md" />
                                                <span>Thanh toán qua ngân hàng</span>
                                            </Label>
                                        </div>
                                        <div className="pt-4 flex flex-col gap-2 items-center justify-center text-darkGray">
                                            <span>Số tài khoản: 123456789</span>
                                            <span>Ngân hàng: Teckcombank</span>
                                            <span>Nội dung: Họ tên + Số điện thoại</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border border-gray-200 rounded-md">
                                    <div className="p-4 flex items-center gap-3">
                                        <Checkbox id="vnpay" />
                                        <Label htmlFor="vnpay" className="text-darkGray text-base font-normal cursor-pointer">
                                            <Image src={vnpay} alt="techcombank" className="w-10 h-10 border border-gray-200 rounded-md" />
                                            <span>Thanh toán qua vnpay</span>
                                        </Label>
                                    </div>
                                </div>
                                <div className="flex flex-col border border-gray-200 rounded-md">
                                    <div className="p-4 flex items-center gap-3">
                                        <Checkbox id="momo" />
                                        <Label htmlFor="momo" className="text-darkGray text-base font-normal cursor-pointer">
                                            <Image src={momo} alt="techcombank" className="w-10 h-10 border border-gray-200 rounded-md" />
                                            <span>Thanh toán qua momo</span>
                                        </Label>
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
                                                                <span className={`w-5 h-5 border border-gray-200 rounded-[5px] ${item?.variant?.color}`}></span>
                                                                <span>{item?.variant?.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <PriceFormatter amount={item?.variant?.price} />
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
                                <button className="bg-light_brownish text-white py-2 px-4 rounded-md hover:bg-dark_brownish/80 hoverEffect">Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>  
        </div>
    );
};

export default Checkout;
