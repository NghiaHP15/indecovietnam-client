import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div>
        <Breakcrum title="Trang cá nhân" description="Thông tin tài khoản cá nhân" />
        <Container>
            <div className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div>
                        <h3>Tài khoản</h3>
                        <div className="flex flex-col gap-2 mt-6">
                            <Link href="/profile">Thông tin tài khoản</Link>
                            <Link href="/profile">Danh sách địa chỉ</Link>
                            <Link href="/profile">Đăng xuất</Link>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-3">
                        <h3>Thông tin tài khoản</h3>
                        <form className="mt-6 flex flex-col gap-4">
                            <div className="flex gap-2">
                                <Label htmlFor="email" className="w-25">Email</Label>
                                <Input id="email" name="email" type="text" placeholder="Email" className="w-full md:w-80" />
                            </div>
                            <div className="flex gap-2">
                                <Label htmlFor="firstName" className="w-25">Họ và tên đệm</Label>
                                <Input id="firstName" name="firtName" type="text" placeholder="Họ và tên đệm" className="w-full md:w-80" />
                            </div>
                            <div className="flex gap-2">
                                <Label htmlFor="lastName" className="w-25">Tên</Label>
                                <Input id="lastName" name="lastName" type="text" placeholder="Tên" className="w-full md:w-80" />
                            </div>
                            <div className="flex gap-2">
                                <Label htmlFor="lastName" className="w-25">Giới tính</Label>
                                <RadioGroup defaultValue="male" name="gender" className="flex gap-2">
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
                            <div className="flex gap-2">
                                <Label htmlFor="dateOfBirth" className="w-25">Ngày sinh</Label>
                                <Input id="dateOfBirth" name="dateOfBirth" type="text" placeholder="mm/dd/yyyy" className="w-full md:w-80" />
                            </div>
                            <button className="py-2 px-4 bg-light_brownish w-40 text-white rounded-[2px] hover:bg-dark_brownish hoverEffect">Cập nhật</button>
                        </form>
                        <div className="mt-6">
                            <h4>Đơn hàng đã mua</h4>
                            <div className="mt-4 p-4 bg-gray-100">
                                <span className="text-lightColor">Bạn chưa có đơn hàng nào</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Profile;
