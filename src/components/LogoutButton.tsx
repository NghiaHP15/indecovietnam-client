"use client";
import { logout } from "@/services/authService";
import React from "react";
import useStore from "../../store";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const LogoutButton = ({ className }: { className?: string }) => {
    const { addUser, addToken, resetCart, resetFavorite } = useStore();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await logout();
            if(res.data.success){
                localStorage.removeItem("accessToken");
                addUser({ id: "" , email: "", firstname: "", lastname: "", avatar: "", provider: ""});
                resetFavorite();
                resetCart();
                addToken("");
                await signOut({ redirect: false });
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <span 
            onClick={handleLogout}
            className={className + " cursor-pointer"}
        >
            Đăng xuất
        </span>
    );
};

export default LogoutButton;
