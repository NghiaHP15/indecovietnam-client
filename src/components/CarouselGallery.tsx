"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { galleryData } from "@/constants/data";

const CarouselGallery = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement, 
    })
  );

  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [autoplay.current]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="flex-[0_0_33.3333%] md:flex-[0_0_16.6667%] p-2"
          >
            <div className="hover:scale-105 transition-transform duration-300">
              <Image
                src={item.image}
                alt=""
                width={300}
                height={400}
                className="h-[250px] w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselGallery;
