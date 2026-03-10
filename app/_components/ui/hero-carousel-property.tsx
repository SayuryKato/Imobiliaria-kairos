import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

interface HeroCarouselProps {
  images: string[];
}

export function HeroCarouselProperty({ images }: HeroCarouselProps) {
  return (
    <Carousel className="w-full bg-black relative h-140">
      <CarouselContent className="w-full h-140">
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="flex aspect-square items-center justify-center relative w-full h-140">
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

      <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4" />
      <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4" />
    </Carousel>
  );
}
