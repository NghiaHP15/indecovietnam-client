"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from 'next/navigation';
import { Product, ProductVariant } from "@/constants/types";
import useStore from "../../store";

interface Props {
  product: Product;
  variant: ProductVariant;
  className?: string;
}

const CheckoutButton = ({ product, variant, className }: Props) => {

    const { addItem } = useStore();
    const router = useRouter();
    const isOutOfStock = variant?.inventoryitems === 0;

    const handleCheckout = () => {
        addItem(product, variant);
        router.push('/checkout'); 
    };
    
    return (
        <div className="w-full flex items-center">
         <button
            onClick={handleCheckout}
            disabled={isOutOfStock}
            className={cn("px-4 py-1 relative overflow-hidden border rounded-sm border-gray-300 group", className)}
            >
            
            <span className="relative text-sm md:text-base z-10 text-darkColor group-hover:text-white hoverEffect">{isOutOfStock ? "Không còn hàng" : "Mua ngay"}</span>
            <div className="absolute inset-0 bg-btn_light_brownish transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
            </button>
        </div>
    );
};

export default CheckoutButton;
