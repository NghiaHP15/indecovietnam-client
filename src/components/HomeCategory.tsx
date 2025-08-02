"use client";
import React, { useEffect, useState } from "react";
import { Title } from "./ui/text";
import Container from "./Container";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import ItemImage from "./ItemImage";
import { RoomCategory } from "@/constants/types";
import { getAllRooms } from "@/services/roomCategoryService";

const HomeCategories = () => {
  const [data, setData] = useState<RoomCategory[]>([]);

  useEffect(() => {
    fetchRoomCategory();
  }, []);

  const fetchRoomCategory = async () => {
    try {
      const res = await getAllRooms();
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="py-10">
      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <span className="text-darkColor" >Lựa chọn hàng đầu</span>
          <Title className="mb-6 uppercase" >Danh mục sản phẩm</Title>
        </div>
        <Carousel data-aos="fade-up">
          <CarouselContent>
            {data.map((item: RoomCategory, subIdx) => (
              <CarouselItem  data-aos="fade-up" data-aos-delay={(subIdx + 1) * 100} key={subIdx} className="basis-1/2 md:basis-1/4">
                <ItemImage item={item} className="h-[400px] w-full rounded-2xl" href={`/product?room=${item.slug}`}  />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
      
    </div>
  );
};

export default HomeCategories;