'use client'

import { sp } from "@/utils/changeFormat";
import { usePathname, useSearchParams , useRouter} from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const FilterPrice = () => {
    useEffect(() => {
      if(searchParams.get('low') && searchParams.get('high')) setState({
        high : searchParams.get('high'),
        low : searchParams.get('low')
      })
      else if(searchParams.get('high') && !searchParams.get('low')) setState({high : searchParams.get('high') , low : ''})
      else if(searchParams.get('low') && !searchParams.get('high')) setState({low : searchParams.get('low') , high : ''} )
    }, [])
        
  const pathname = usePathname();
  let searchParams = useSearchParams();
  let router = useRouter();

  const createQueryString = useCallback((name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
    let [state , setState] = useState({
        low : '',
        high : '',
    });
    const changeHandler = (e) => {
        setState({...state , [e.target.name] : e.target.value})
        router.push(pathname + '?' + createQueryString(e.target.name , e.target.value))
    }
  return (
    <>
        <span className='mb-3'>قیمت<span className='text-zinc-700 text-sm'> (تومان)</span></span>
        <div>
            <input onFocus={() => {
              setState({...state , low : ''})
              router.push(pathname + '?' + createQueryString('low', ''))}
              } value={state.low} name='low' onChange={changeHandler} className='input-price' placeholder='از'/>
            <input  onFocus={() => {
              setState({...state , high : ''})
              router.push(pathname + '?' + createQueryString('high', ''))}
              } value={state.high} name='high' onChange={changeHandler} className='input-price mr-3'  placeholder='تا'/>
        </div>
    </>
  )
}

export default FilterPrice;