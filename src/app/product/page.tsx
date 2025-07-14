import ProductView from "@/components/ProductView";
import React from "react";

const ProductPage = async ({ searchParams }: { searchParams?: Promise<{ room?: string; category?: string; }>}) => {
    const { room, category } = await searchParams || {};
    console.log(room, category);
    

    return (
        <ProductView room={room} category={category}  />
    );
};

export default ProductPage;
