"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface HeroCarouselProps {
  images: string[];
  height?: number;
}

export default function HeroCarousel({ images, height }: HeroCarouselProps) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className={`w-full ${height ? `h-${height}` : "h-screen"} `}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div
              className={`relative w-full ${height ? `h-${height}` : "h-screen"}`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
