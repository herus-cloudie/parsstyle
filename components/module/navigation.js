'use client'

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo({staticData}) {

  return (
  <>
  {
    staticData.map((data) => (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={data.title} />
            </SelectTrigger>
            <SelectContent>
                
                <SelectGroup>
                    <SelectLabel>{data.title}</SelectLabel>
                    {
                        data.option.map(option => <SelectItem value={option}>{option}</SelectItem>)
                    }
                </SelectGroup>
            </SelectContent>
        </Select>  
    ))
  }
  </>

  )
}
