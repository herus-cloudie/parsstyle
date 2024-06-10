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

export function SelectForCity({address , setAddress , value}) {

  const changeHandler = (data) => setAddress({...address , city : data})
  
  return (
    <div className="flex flex-col justify-center">
        <div className="text-sm mb-2 text-zinc-800">
        شهر
        </div>
        <Select value={value} onValueChange={changeHandler}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={value}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {cityData.map(item => <SelectItem value={item}>{item}</SelectItem>) }
                </SelectGroup>
            </SelectContent>
        </Select>  
    </div>
    )
}
