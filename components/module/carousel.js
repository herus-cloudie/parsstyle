'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo({img , id}) {
  return (
    <div dir="ltr">
      <Carousel className="w-full md:max-w-[480px] sm:max-w-[400px]">
        <CarouselContent>
          {
            img.map(img => (
              <CarouselItem key={id}>
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={img}/>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious  className="left-0"/>
        <CarouselNext  className="right-0"/>
      </Carousel>
    </div>
  )
}
