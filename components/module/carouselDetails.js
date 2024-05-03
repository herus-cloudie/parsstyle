'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { sp } from "@/utils/changeFormat"

export default function CarouselDetails({img , id , discount}) {
  return (
    <div dir="ltr">
      <Carousel className="w-full md:max-w-[480px] sm:max-w-[400px]">
   
        <CarouselContent>
          <div className='ribbon-box'>
              {
                  discount !== 'no' ? 
                  <div className='ribbon'><span className="ribbon-text">{sp(discount) + '%'}</span></div> : null
              } 
          </div>
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
