"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useState } from "react"

const frameworks = [
  {
    label: "hii",
    value: "۲۵۰,۰۰۰",
  },
  {
    value: "sveltekit",
    label: "۲۵۰,۰۰۰",
  },
  {
    value: "nuxt.js",
    label: "۵۰۰,۰۰۰",
  },
  {
    value: "remix",
    label: "۵۵۰,۰۰۰",
  },
]

export default function ComboboxFilterLow() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "از"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
