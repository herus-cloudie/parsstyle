'use client'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command"
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CommandSearch({setSearchValue , placeholder , searchValue}) {
  
  let searchParams = useSearchParams();
  let [state , setState]= useState(searchParams.get('search'));
  
  const changeHandler = text =>{
    setSearchValue(text);
    setState(text)
  } 

  return (
    <Command className="rounded-lg border shadow-md w-4/5 flex justify-center">
      <CommandInput placeholder={placeholder} value={state} onValueChange={changeHandler}/>
      <CommandList>
        {/* <CommandEmpty>نتیجه ای یافت نشد!</CommandEmpty> */}
        <CommandGroup>
        {/* heading="پیشنهادات" */}
          {/* <CommandItem >
            <span className='cursor-pointer'>لباس و تیشرت</span>
          </CommandItem>
          
          <CommandItem className='cursor-pointer'>
            <span>شلوار</span>
          </CommandItem>
                
          <CommandItem className='cursor-pointer'>
            <span>ساعت</span>
          </CommandItem>

          
          <CommandItem className='cursor-pointer'>
            <span>کت و مجلسی</span>
          </CommandItem> */}

        </CommandGroup>
      </CommandList>
    </Command>
  )
}
