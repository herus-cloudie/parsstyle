'use client'

import { useSearchParams , useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import CommandSearch from "./commandSearch";

const FilterSearch = () => {
    let searchParams = useSearchParams();
    let router = useRouter();
    let pathName = usePathname()
    const [searchValue, setSearchValue] = useState();
  
    const createQueryString = useCallback((name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
  
      return params.toString()
    },
    [searchParams]
  )
  return (
    <div className="flex  justify-center items-center w-full" onChange={() => router.push(pathName + '?' +  createQueryString('search' , searchValue))}>
        <CommandSearch setSearchValue={setSearchValue} searchValue={searchValue} placeholder='جستجو'/>
    </div>
  )
}

export default FilterSearch