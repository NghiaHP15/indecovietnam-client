import React from "react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const FromLogin = () => {
  return (
    <form className="grid gap-5">
        <div className="py-4 flex flex-col gap-6">
          <div className="grid gap-2">
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Input id="password" type="password" required />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <Checkbox id="toggle" />
              <Label htmlFor="toggle" className="text-darkGray cursor-pointer">Remenber me</Label>
            </div>
            <a
              href="#"
              className="ml-auto text-primary inline-block text-sm underline-offset-4 hover:opacity-80 hoverEffect"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <Button className="bg-btn_dark_brownish hover:bg-btn_light_brownish hoverEffect w-full font-bold">Login</Button>
        </div>
    </form>
  );
};

export default FromLogin;
