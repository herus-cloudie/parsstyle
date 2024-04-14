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

export default function SheetSearch() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        
        <a className="tab">
                  <svg
                    width="101"
                    height="114"
                    viewBox="0 0 101 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="46.1726"
                      cy="46.1727"
                      r="29.5497"
                      transform="rotate(36.0692 46.1726 46.1727)"
                      stroke="black"
                      strokeWidth="7"
                    ></circle>
                    <line
                      x1="61.7089"
                      y1="67.7837"
                      x2="97.7088"
                      y2="111.784"
                      stroke="black"
                      strokeWidth="7"
                    ></line>
                  </svg>
        </a>
      </SheetTrigger>
      <SheetContent  style={{zIndex : '1032'}} side={'top'}>
        <SheetHeader className={'mt-2'}>
          <SheetTitle className="flex mr-10 mb-10">سرچ دسته بندی</SheetTitle>
          <CommandSearch />
        </SheetHeader>

        <SheetFooter>
            <div className="block mx-auto mt-10 w-2/5">
            <SheetClose asChild>
                <Button className="block w-full" type="submit">جستجو</Button>
            </SheetClose>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
