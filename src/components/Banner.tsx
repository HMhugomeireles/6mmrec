'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export function Banner() {
    return (
        <Carousel
         className="p-10"
         plugins={[
          Autoplay({
            delay: 9000,
          }),
        ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="aspect-video w-full relative">
                <Image className="object-cover" src="/gallery/DSCF5307.jpg" fill alt="Teams image" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="aspect-video w-full relative">
                <Image className="object-cover" src="/gallery/DSCF5308.jpg" fill alt="Teams image" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="aspect-video w-full relative">
                <Image className="object-cover" src="/gallery/DSCF5327.jpg" fill alt="Teams image" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    )
}