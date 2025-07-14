// import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProduct";
import React from "react";

const WishListPage = async () => {
    // const use = await currentUser();
    return (
        <>
            {/* {use ? ( */}
                <WishListProducts />
            {/* ) : (
                <NoAccess details="Log in to view your wishlist items. Don't miss out on your favorite products!" />
            )} */}
        </>
    );
};

export default WishListPage;