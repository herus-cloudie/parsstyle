'use client'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import FilterPrice from "./filterPrice"
import { NavigationFilter } from "./navigationFilter"
import { Checkbox } from "../ui/checkbox"
import { usePathname, useSearchParams , useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

const SheetFilter = () => { 
  const pathname = usePathname();
  let searchParams = useSearchParams();
  let router = useRouter();
  const [state , setState] = useState('no');

  const createQueryString = useCallback((name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    if(searchParams.get('off')) setState(searchParams.get('off'))
  }, [])
  const setQuery = () => {
    if(state == 'yes') setState('no')
    else setState('yes')

    if(state == 'no')router.push(pathname + '?' + createQueryString('off' , 'yes')) 
    else router.push(pathname + '?' + createQueryString('off' , 'no'))
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>فیلتر محصولات</Button>
      </SheetTrigger>
      <SheetContent  side='left'>
        
      <div className='mt-16 flex flex-col' style={{borderBottom:' 1px solid #00000030'}}>
      <SheetClose asChild><img src="/logo/close.svg" className="cursor-pointer" width={15} /></SheetClose>
            <div className='flex text-center flex-col'>
                <FilterPrice />
            </div>
            <div className='mt-10 mb-8  flex flex-wrap gap-4 justify-evenly items-end'>
                <NavigationFilter/> 
            </div>
            <div className="flex flex-row-reverse gap-2 justify-center items-center mb-10 mt-5">
              <Checkbox checked={searchParams.get('off') == 'yes' ? true : false} id="terms1"  onClick={setQuery}/>
              <div className="grid gap-1.5 leading-none">
                  <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                  تخفیف دار
                  </label>
              </div>
            </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">اعمال</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


export default SheetFilter