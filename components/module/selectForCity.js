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
import { cityData } from "@/constant/data"

export function SelectForCity() {

  const changeHandler = (data) => {
    console.log(data)
  }


  return (
    <div className="flex flex-col justify-center">
        <div className="text-sm mb-2 text-zinc-800">
        شهر
        </div>
        <Select key={'item'} onValueChange={changeHandler}>
            <SelectTrigger className="w-[180px]">
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel></SelectLabel>
                    {cityData.map(item => <SelectItem value={item}>{item}</SelectItem>) }
                </SelectGroup>
            </SelectContent>
        </Select>  
    </div>
    )
}
