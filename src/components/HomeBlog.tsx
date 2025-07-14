"use client";
import React, { useState } from "react";
import { Title } from "./ui/text";
import { blogData } from "@/constants/data";
import Container from "./Container";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import BlogCard from "./BlogCard";

const HomeBlog = () => {
  const [blogs, ] = useState(blogData);

  return (
    <div className="my-10">
      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <span className="text-darkColor">Bài viết của Indeco</span>
          <Title className="mb-6 uppercase">Bài viết mới nhất</Title>
        </div>
        <Carousel className="mt-6" data-aos="fade-up">
            <CarouselContent>
              {blogs.map((blog, subIdx) => (
                <CarouselItem key={subIdx} data-aos="fade-up" data-aos-delay={(subIdx + 1) * 100} className="basis-1/2 md:basis-1/4">
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeBlog;