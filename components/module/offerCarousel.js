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

import { useRouter } from "next/navigation"
export default function OfferCarousel({data}) {
    let router = useRouter()
    let dataWithDiscount = data.filter(item => item.discount != 'no')
    let sortedArray = dataWithDiscount.sort((a, b) => +b.discount - +a.discount)
  return (
    <div dir="ltr" >
        <Carousel
        opts={{
            align: "start",
        }}
        className="w-full max-w-[270px] md:max-w-md lg:max-w-3xl"
        >
        <CarouselContent >
        
            {sortedArray.slice(0, 7).map((item , index) => (
                <>
                    <CarouselItem onClick={() => router.push(`/dress/${item.id}`)} key={index} className="md:basis-1/2 lg:basis-1/3 cursor-pointer">
                        <div className="">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-between">
                                <div className=" bg-[#F9546B] text-white text-center w-full">{sp(item.discount)}% off</div>
                                <img className="text-3xl p-1" src={item.img[0]}/>
                            </CardContent>
                        </Card>
                        </div>
                        <div className="flex justify-around items-center mt-2">
                            <div className="flex flex-row-reverse justify-between items-center"><span className="text-xl mr-1">{sp(item.price  - (item.price  / 100 * item.discount))}</span><span className="text-xs mr-1">تومان</span></div>
                            <del className="text-decoration">{sp(item.price)}</del>
                        </div>
                    </CarouselItem>
                </>
             ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}
