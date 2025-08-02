"use client";
import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useEffect, useState } from "react";
import useStore from "../../../store";
import { Customer } from "@/constants/types";
import { getUserByEmail, updateCustomer } from "@/services/userService";
import { Button } from "@/components/ui/button";
import SideInfo from "@/components/SideInfo";
import NoAccess from "@/components/NoAccess";
import dayjs from "dayjs";
import BadgeOrderStatus from "@/components/BadgeOrderStatus";
import BadgePaymentStatus from "@/components/BadgePaymentStatus";
import PriceFormatter from "@/components/PriceFormatter";
import Link from "next/link";
import { EyeIcon, ListOrdered } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Loading from "@/components/Loading";

const defaultUser = {
    id: "",
    email: "",
    phone: "",
    firstname: "",
    lastname: "",
    gender: "male",
    date_of_birth: "",
    avatar: "",
    level: "",
    addressese: [],
    orders: [],
}

const Profile = () => {
    const [data, setData] = useState<Customer>(defaultUser)
    const { user } = useStore();
    const [loading, setLoading] = useState<boolean>(false);
    
    const fetchData = async (email: string) => {
        try{
            const res = await getUserByEmail({ email });
            if(res.data.success){
                setData(res.data.data);
            }
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(user?.email.trim() !== ""){
            fetchData(user?.email || "");
        }
    }, [user]);

    const handleChange = (value: string, name: string) => {
        setData({
            ...data,
            [name]: value,
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await updateCustomer({ data, id: data.id });
            if(res.data.success){
                console.log(res.data.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {user?.id ? (
                <>
                <Breakcrum title="Trang cá nhân" description="Thông tin tài khoản cá nhân" />
                <Container>
                    <div className="py-10">
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            <SideInfo/>
                            {!data?.id ? (
                                <div className="col-span-4 md:col-span-4">
                                    <Loading/>
                                </div>
                            ) : (
                                <div className="col-span-4 md:col-span-4 mt-6 md:mt-0">
                                    <h3 className="text-lg font-medium text-darkColor">Thông tin tài khoản</h3>
                                    <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                                        <div className="flex gap-2">
                                            <Label htmlFor="email" className="w-25">Email</Label>
                                            <Input 
                                                id="email" 
                                                name="email" 
                                                required 
                                                type="text" 
                                                placeholder="Email" 
                                                className="w-full md:w-80"
                                                value={data.email}
                                                onChange={(e) => handleChange(e.target.value, "email")}
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <Label htmlFor="phone" className="w-25">Số điện thoại</Label>
                                            <Input 
                                                id="phone" 
                                                name="phone" 
                                                required type="text" 
                                                placeholder="Số điện thoại" 
                                                className="w-full md:w-80" 
                                                value={data.phone || ""}
                                                onChange={(e) => handleChange(e.target.value, "phone")}
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <Label htmlFor="firstName" className="w-25">Họ</Label>
                                            <Input 
                                                id="firstName" 
                                                name="firtName" 
                                                required 
                                                type="text" 
                                                placeholder="Họ" 
                                                className="w-full md:w-80" 
                                                value={data.firstname}
                                                onChange={(e) => handleChange(e.target.value, "firstname")}
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <Label htmlFor="lastName" className="w-25">Tên</Label>
                                            <Input 
                                                id="lastName" 
                                                name="lastName" 
                                                required 
                                                type="text" 
                                                placeholder="Tên" 
                                                className="w-full md:w-80" 
                                                value={data.lastname}
                                                onChange={(e) => handleChange(e.target.value, "lastname")}
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <Label htmlFor="dateOfBirth" className="w-25">Ngày sinh</Label>
                                            <Input 
                                                id="dateOfBirth" 
                                                name="dateOfBirth" 
                                                type="text" 
                                                placeholder="mm/dd/yyyy" 
                                                className="w-full md:w-80"
                                                value={data.date_of_birth || ""}
                                                onChange={(e) => handleChange(e.target.value, "date_of_birth")}
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <Label htmlFor="lastName" className="w-25">Giới tính</Label>
                                            <RadioGroup name="gender" value={data.gender} className="flex gap-2" onValueChange={(value) => handleChange(value, "gender")}>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="male" defaultChecked id="male" />
                                                    <Label htmlFor="male" className="cursor-pointer font-normal">Nam</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="famale" id="female" />
                                                    <Label htmlFor="female" className="cursor-pointer font-normal">Nữ</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                        <Button className="py-2 px-4 bg-light_brownish w-40 text-white rounded-[2px] hover:bg-dark_brownish hoverEffect" type="submit" isLoading={loading}>Cập nhật</Button>
                                    </form>
                                    <div className="mt-8">
                                        <div className="flex items-center gap-3">
                                            <ListOrdered className="text-light_brownish"/>
                                            <h2>Danh sách đơn hàng của bạn</h2>
                                        </div>
                                        {data?.orders?.length <= 0 ? (
                                            <div className="mt-4 p-4 bg-gray-100">
                                                <span className="text-lightColor">Bạn chưa có đơn hàng nào</span>
                                            </div>
                                        ): (
                                            <div className="overflow-x-auto mt-4">
                                                <table className="w-[750px] md:w-full border-collapse">
                                                    <thead className="border-b border-gray-100">
                                                        <tr className="bg-gray-100/50">
                                                        <th className="p-2 text-left font-normal">Mã đơn hàng</th>
                                                        <th className="p-2 text-left font-normal">Ngày đặt hàng</th>
                                                        <th className="p-2 text-left font-normal ">Trang thái</th>
                                                        <th className="p-2 text-left font-normal ">Thanh toán</th>
                                                        <th className="p-2 text-right font-normal ">Tổng giá</th>
                                                        <th className="p-2 text-right font-normal ">Chi tiết</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data?.orders.map((item) => (
                                                            <tr key={item?.id} className="border-b border-gray-100 items-center">
                                                            <td className="p-3">
                                                                <span>{item?.txnRef}</span>
                                                            </td>
                                                            <td className="p-3">
                                                                <span>{dayjs(item?.order_date).format("DD/MM/YYYY")}</span>
                                                            </td>
                                                            <td className="p-3 capitalize">
                                                                {item?.status && <BadgeOrderStatus status={item?.status} />}
                                                            </td>
                                                            <td className="p-3 text-right capitalize">
                                                                {item?.payment_status && <BadgePaymentStatus status={item?.payment_status} />}
                                                            </td>
                                                            <td className="p-3 text-right capitalize">
                                                                <PriceFormatter amount={item?.total_amount} />
                                                            </td>
                                                            <td className="p-3 text-right capitalize ">
                                                                <Link href={`/order?txnRef=${item?.txnRef}`} className="flex items-center justify-end ">
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                    <EyeIcon className="text-blue-400" />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent className="font-bold">
                                                                    Xem chi tiết
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                                </Link>
                                                            </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
                </>
            ) : (
                <NoAccess details="Vui lòng đăng nhập để có thông tin" />
            )}
        </div>
    );
};

export default Profile;
