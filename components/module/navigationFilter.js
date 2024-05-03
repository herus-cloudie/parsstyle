'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { staticData } from "@/constant/data";

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react";

export function NavigationFilter() {

  const pathname = usePathname();
  let searchParams = useSearchParams();
  let router = useRouter();

  const createQueryString = useCallback((name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const changeHandler = (data) => {
    if(data == 'S' || data == 'M' || data == 'L' || data == 'XL' || data == '2XL')  return router.push(pathname + '?' + createQueryString('size' , data))
    else if(data == 'red' || data == 'blue' || data == 'white' || data == 'black' || data == 'gray' || data == 'green' || data == 'brown' ||
    data == 'yellow' || data == 'orange' || data == 'purple')  return router.push(pathname + '?' + createQueryString('color' , data))
    else if(data == 'parsstyle' || data == 'calzino' || data == 'lebasina')  return router.push(pathname + '?' + createQueryString('seller' , data))
    else if(data == 'men' || data == 'women' || data == 'child')  return router.push(pathname + '?' + createQueryString('sex' , data))
    else if(data == 'allSize') return router.push(pathname + '?' + createQueryString('size' , ''))
    else if(data == 'allColor') return router.push(pathname + '?' + createQueryString('color' , ''))
    else if(data == 'allSeller') return router.push(pathname + '?' + createQueryString('seller' , ''))
    else if(data == 'allSex') return router.push(pathname + '?' + createQueryString('sex' , ''))
  }

  let dynamicValueSize , dynamicValueColor , dynamicValueSeller , dynamicValueSex;

  if(!searchParams.get('size'))  dynamicValueSize = 'همه';
   else if(searchParams.get('size') == 'S' ) dynamicValueSize = 'S';
   else if(searchParams.get('size') == 'M' ) dynamicValueSize = 'M';
   else if(searchParams.get('size') == 'L') dynamicValueSize = 'L';
   else if(searchParams.get('size') == 'XL') dynamicValueSize = 'XL';
   else if(searchParams.get('size') == '2XL') dynamicValueSize = '2XL';

  if(!searchParams.get('color')) dynamicValueColor = 'همه';
   else if(searchParams.get('color') == 'red') dynamicValueColor = 'قرمز';
   else if(searchParams.get('color') == 'blue') dynamicValueColor = 'آبی' ;
   else if(searchParams.get('color') == 'white') dynamicValueColor = 'سفید' ;
   else if(searchParams.get('color') == 'black') dynamicValueColor = 'مشکی' ;
   else if(searchParams.get('color') == 'gray') dynamicValueColor = 'خاکستری';
   else if(searchParams.get('color') == 'green') dynamicValueColor = 'سبز';
   else if(searchParams.get('color') == 'brown' ) dynamicValueColor = 'قهوه‌‌ای';
   else if(searchParams.get('color') == 'yellow') dynamicValueColor = 'زرد';
   else if(searchParams.get('color') == 'orange') dynamicValueColor = 'نارنجی';
   else if(searchParams.get('color') == 'purple') dynamicValueColor = 'بنقش';
  

  if(!searchParams.get('seller')) dynamicValueSeller = 'همه';
   else if(searchParams.get('seller') == 'parsstyle' )dynamicValueSeller = 'پارس استایل';
   else if(searchParams.get('seller') == 'calzino' ) dynamicValueSeller = 'کالزینو';
   else if(searchParams.get('seller') == 'lebasina') dynamicValueSeller = 'لباسینا';

   if(!searchParams.get('sex')) dynamicValueSex = 'همه';
   else if(searchParams.get('sex') == 'men' ) dynamicValueSex = 'مردانه';
   else if(searchParams.get('sex') == 'women' ) dynamicValueSex = 'زنانه';
   else if(searchParams.get('sex') == 'child') dynamicValueSex = 'بچگانه';

  return (

  <>

    {
      staticData.map(({title , option}) => (
        <div style={{zIndex : '1035'}} className="flex flex-col justify-center">
            <div className="text-sm mb-2 text-zinc-800">
              {title}
            </div>
            <Select className="max-w-10" key={title} onValueChange={changeHandler}>
                <SelectTrigger className="w-[100px] sm:w-[150px] ">
                    <SelectValue placeholder={title == 'سایز' ? dynamicValueSize : title == 'رنگ' ? dynamicValueColor
                     : title == 'فروشنده' ? dynamicValueSeller : title == 'جنسیت' ? dynamicValueSex : null } />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{title}</SelectLabel>
                        {option.map(option => <SelectItem value={option.value}>{option.context}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>  
        </div>
      ))
    }
  </>

  )
}
