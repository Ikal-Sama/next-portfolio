"use client";
import { useEffect, useState } from "react";
import { DesignData } from "@public/data/DesignData";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function DesignCard() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[59rem]"
    >
      <CarouselContent>
        {DesignData.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <Link href={item.link}>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={item.image}
                      alt="design"
                      width={400}
                      height={500}
                      className="w-full max-h-[29rem] object-cover "
                    />
                  </CardContent>
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {!isSmallScreen && (
        <>
          <CarouselPrevious className="carousel-previous" />
          <CarouselNext className="carousel-next" />
        </>
      )}
    </Carousel>
  );
}
