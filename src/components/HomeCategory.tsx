import React from "react";
import { Title } from "./ui/text";
import Container from "./Container";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { categoryProduct } from "@/constants/data";
import ItemImage from "./ItemImage";



const HomeCategories = () => {
  return (
    <div className="py-10">
      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <span className="text-darkColor" >Lựa chọn hàng đầu</span>
          <Title className="mb-6 uppercase" >Danh mục sản phẩm</Title>
        </div>
        <Carousel data-aos="fade-up">
          <CarouselContent>
            {categoryProduct.map((item, subIdx) => (
              <CarouselItem  data-aos="fade-up" data-aos-delay={(subIdx + 1) * 100} key={subIdx} className="basis-1/2 md:basis-1/4">
                <ItemImage item={item} className="h-[400px] w-full rounded-2xl"  />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
      
    </div>
  );
};

export default HomeCategories;