import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function CustomSlider({ data }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data?.map((v, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="p-1">
                  <div className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[32rem]">
                    <Image src={v?.img} fill alt="image" className="rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <div className="flex justify-center mt-4 space-x-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
