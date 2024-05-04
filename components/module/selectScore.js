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
import { scoreData } from "@/constant/data"

export function SelectScore({setCommentData , commentData}) {

  const changeHandler = (data) => setCommentData({...commentData , 'score' : data})

  return (
    <div className="flex flex-col justify-center">
        <div className="text-sm mb-2 text-zinc-800">
        امتیاز
        </div>
        <Select key={'item'} onValueChange={changeHandler}>
            <SelectTrigger className="w-[180px]">
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel></SelectLabel>
                    {scoreData.map(item => <SelectItem value={item}>{item}</SelectItem>) }
                </SelectGroup>
            </SelectContent>
        </Select>  
    </div>
    )
}
