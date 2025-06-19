import NoAccess from "@/components/NoAccess";
import WishListProduct from "@/components/WishListProduct";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const WishListPage = async () => {
    const use = await currentUser();
    return (
        <>
            {use ? (
                <WishListProduct />
            ) : (
                <NoAccess details="Log in to view your wishlist items. Don't miss out on your favorite products!" />
            )}
        </>
    );
};

export default WishListPage;
