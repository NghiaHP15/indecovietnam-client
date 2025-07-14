import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { defautUser } from "@/images";
import Link from "next/link";

const UserButton = () => {
  return (
    <Popover>
        <PopoverTrigger asChild className="items-center">
            <Avatar className="cursor-pointer">
                <AvatarImage src={defautUser.src} className="h-7 w-7" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-50 mt-3 border-none shadow-xl">
            <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={defautUser.src}/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="">Bui Minh Nghia</span>
                    <span className="text-lightColor text-sm">Khách hàng</span>
                </div>
            </div>
            <div className="flex flex-col pt-3">
                <Link href={"/profile"} className="text-darkColor p-2 rounded-sm hover:bg-gray-100">Tài khoản của bạn</Link>
                <Link href={"/address"} className="text-darkColor p-2 rounded-sm hover:bg-gray-100">Danh sách địa chỉ</Link>
                <Link href={"/login"} className="text-darkColor p-2 rounded-sm hover:bg-gray-100">Đăng xuất</Link>
            </div>
        </PopoverContent>
    </Popover>
  );
};

export default UserButton;
