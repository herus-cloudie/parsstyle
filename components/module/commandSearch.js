

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export default function CommandSearch() {
  return (
    <Command className="rounded-lg border shadow-md w-4/5 md:w-3/5 flex justify-center">
      <CommandInput placeholder="سوییشرت , هودی ..." />
      <CommandList>
        <CommandEmpty>نتیجه ای یافت نشد!</CommandEmpty>
        <CommandGroup>
        {/* heading="پیشنهادات" */}
          <CommandItem>
            <span>لباس و تیشرت</span>
          </CommandItem>
          
          <CommandItem>
            <span>شلوار</span>
          </CommandItem>
                
          <CommandItem>
            <span>ساعت</span>
          </CommandItem>

          
          <CommandItem>
            <span>کت و مجلسی</span>
          </CommandItem>

        </CommandGroup>
      </CommandList>
    </Command>
  )
}
