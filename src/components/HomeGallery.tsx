import React from "react";
import Container from "./Container";
import { Title } from "./ui/text";
import CarouselGallery from "./CarouselGallery";

const HomeGallery = () => {
  return (
    <div className="py-10">
    <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <span className="text-darkColor">Nổi bật trên mạng xã hội</span>
          <Title className="mb-6 uppercase">Hình ảnh nổi bật</Title>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <CarouselGallery/>
        </div>
    </Container>
    </div>
  );
};

export default HomeGallery;
