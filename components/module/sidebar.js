'use client'

import { usePathname } from 'next/navigation';
import { useState } from 'react'
import SheetSearch from './sheetSearch';

const Sidebar = ({session}) => {
    let pathname = usePathname()
    let [state , setState] = useState(false);
  return (
    <>    
        <div onClick={() => setState(true)} className="cursor-pointer">
            <img className="mr-6" src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/burger2.svg"/>
        </div>
        {
        state 
        ?
        <div className="fixed top-0 right-0  w-72 h-full bg-gray-50 side-bar" >
            <div onClick={() => setState(false)} className="cursor-pointer">
                <img className="mr-10 mt-6" src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/close.svg"/>
            </div>
            <ul className="paddingUl gap-9 flex flex-col">
                <div className="navigation-card menu-navigation">
                {
                  session ? 
                  <>
                    <a href='/cart'><img className="tab" src="/logo/cart.svg" /></a>
                    <a href='/profile' className="tab">
                      <svg
                        width="104"
                        height="100"
                        viewBox="0 0 104 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="21.5"
                          y="3.5"
                          width="60"
                          height="60"
                          rx="30"
                          stroke="black"
                          strokeWidth="7"
                        ></rect>
                        <g clipPath="url(#clip0_41_27)">
                          <mask
                            id="mask0_41_27"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="61"
                            width="104"
                            height="52"
                          >
                            <path
                              d="M0 113C0 84.2812 23.4071 61 52.1259 61C80.706 61 104 84.4199 104 113H0Z"
                              fill="white"
                            ></path>
                          </mask>
                          <g mask="url(#mask0_41_27)">
                            <path
                              d="M-7 113C-7 80.4152 19.4152 54 52 54H52.2512C84.6973 54 111 80.3027 111 112.749H97C97 88.0347 76.9653 68 52.2512 68H52C27.1472 68 7 88.1472 7 113H-7ZM-7 113C-7 80.4152 19.4152 54 52 54V68C27.1472 68 7 88.1472 7 113H-7ZM52.2512 54C84.6973 54 111 80.3027 111 112.749V113H97V112.749C97 88.0347 76.9653 68 52.2512 68V54Z"
                              fill="black"
                            ></path>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_41_27">
                            <rect
                              width="104"
                              height="39"
                              fill="white"
                              transform="translate(0 61)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </> 
                  : null 
                }
                  <SheetSearch />
                </div>
               {
                session || pathname == '/sign' ? null 
                : <a href='/sign' className='md:mt-3 -mt-3'><span>ثبت نام / ورود</span></a>
               } 
               {
                pathname != '/' ? <a href='/' style={{fontFamily : 'bold-vazir'}}>صفحه اصلی</a> : null
               }
                <a href='/dress'>
                تیشرت
                </a>
                <a href='/dress'>
                پیراهن
                </a>
                <a href='/dress'>
                کت و شلوار
                </a>
                <a href='/dress'>
                شلوار و شلوارک
                </a>
                <a href='/dress'>
                کلاه و جوراب
                </a>
                <a href='/dress'>
                هودی و کاپشن
                </a>
                <a href='/dress'>
                ساعت و گردنبند
                </a>
                
            </ul>
        </div>
        : null
        
        }
    </>

  )
}

export default Sidebar