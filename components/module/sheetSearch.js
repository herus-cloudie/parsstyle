'use client'

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import CommandSearch from "./commandSearch"
import { useCallback, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SheetSearch({ children }) {
  let searchParams = useSearchParams();
  let router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)

    return params.toString()
  },
  [searchParams]
)
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent  style={{zIndex : '1032'}} side={'top'}>
        <SheetHeader className={'mt-2'}>
          <SheetTitle className="flex mb-10">سرچ محصول</SheetTitle>
          <CommandSearch setSearchValue={setSearchValue} placeholder='سوییشرت ، پیراهن , کفش و...'/>
        </SheetHeader>

        <SheetFooter>
            <div className="block mx-auto mt-10 w-2/5">
            <SheetClose asChild>
              <div onClick={() =>router.push('/dress' + '?' + createQueryString('search', searchValue))}><Button className="block w-full" type="submit">جستجو</Button></div>  
            </SheetClose>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
