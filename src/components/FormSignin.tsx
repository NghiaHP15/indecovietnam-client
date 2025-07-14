import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const FormSignin = () => {
  return (
    <form className="grid gap-5">
        <div className="py-4 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-2">
                <Input
                    id="firtstName"
                    type="firtstName"
                    placeholder="Họ"
                    required
                />
                <Input
                    id="lastname"
                    type="lastname"
                    placeholder="Tên"
                    required
                />
            </div>
            <div className="grid gap-2">
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div className="grid gap-2">
                <Input id="password" type="password" placeholder="Mật khẩu" required />
            </div>
        </div>
        <div>
            <Button className="bg-btn_dark_brownish hover:bg-btn_light_brownish hoverEffect w-full font-bold">Login</Button>
        </div>
    </form>
  );
};

export default FormSignin;
