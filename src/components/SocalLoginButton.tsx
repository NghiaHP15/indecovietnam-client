import React from "react";
import { Button } from "./ui/button";
import { FacebookIcon, GoogleIcon } from "@/icons";
import { signIn } from "next-auth/react";

const SocalLoginButton = () => {
  return (
    <div className="flex items-center justify-center gap-4">
        <Button
            onClick={() => signIn("google")}
            className="bg-gray-50 hover:bg-gray-100 text-darkColor"
        >
            <GoogleIcon className="size-5"/> Google Login
        </Button>
        <Button
            onClick={() => signIn("facebook")}
            className="bg-gray-50 hover:bg-gray-100 text-darkColor"
        >
            <FacebookIcon className="size-5" />Facebook Login
        </Button>
    </div>
  );
};

export default SocalLoginButton;
