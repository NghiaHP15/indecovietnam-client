"use client";
import React, { useState } from "react";
import Container from "./Container";
import { dataProducts } from "@/constants/data";
import { Product } from "@/constants/types";
import ProductList from "./ProductList";
import { Title } from "./ui/text";
import { ProductStatus } from "@/constants/enum";


const HomeProduct = ({ type } : {type: ProductStatus}) => {

    const [data, ] = useState<Product[]>(dataProducts);
    const newData = data?.filter((item) => item?.status === type);


    return (
        <div className="py-10">
            <Container>
                <div data-aos="fade-up" data-aos-delay="100">
                    <Title  className="uppercase">{type === ProductStatus.HOT ? "Sản phẩm hot" : type === ProductStatus.NEW ? "Sản phẩm mới" : "Sản phẩm sale"}</Title>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <ProductList data={newData}  />
                </div>
            </Container>
        </div>
    );
};

export default HomeProduct;
