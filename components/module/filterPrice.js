'use client'

import { sp } from "@/utils/changeFormat";
import { usePathname, useSearchParams , useRouter} from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const FilterPrice = () => {

    useEffect(() => {
      if(searchParams.get('low') && searchParams.get('high')) setState({
        high : sp(+searchParams.get('high')),
        low : sp(+searchParams.get('low'))
      })
      else if(searchParams.get('high') && !(searchParams.get('low'))) setState({high : sp(+searchParams.get('high')) , low : ''})
      else if(searchParams.get('low') && !(searchParams.get('high'))) setState({low : sp(+searchParams.get('low')) , high : ''} )
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

    let lowValue = document.querySelector('#lowValue')
    let lowHigh = document.querySelector('#lowHigh')
    if(lowValue) {
      lowValue.addEventListener("focusout", (e) => {
      setState({low : sp(+state.low) , high : state.high})
    })
  }
    if(lowHigh) {
      lowHigh.addEventListener("focusout", (e) => {
      setState({high : sp(+state.high) , low : state.low})
    })
  }
  return (
      <div className="mt-8">
        <span className=''>قیمت<span className='text-zinc-700 text-sm'> (تومان)</span></span>
        <div className="flex flex-col justify-center items-center mt-3">
            <input onFocus={() => {
              setState({...state , low : ''})
              router.push(pathname + '?' + createQueryString('low', ''))}
              } value={state.low} name='low' onChange={changeHandler} id="lowValue" onf className='input-price' placeholder='از'/>
            <input  onFocus={() => {
              setState({...state , high : ''})
              router.push(pathname + '?' + createQueryString('high', ''))}
              } value={state.high} name='high' onChange={changeHandler} id="lowHigh" className='input-price mt-3'  placeholder='تا'/>
        </div>
      </div>
)
}

export default FilterPrice;