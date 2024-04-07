'use client'

import { useState } from 'react'

const Sidebar = () => {
    let [state , setState] = useState(false);
  return (
    <>    
        <div onClick={() => setState(true)} className="cursor-pointer">
            <img className="mr-6" src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/burger2.svg"/>
        </div>
        {
        state 
        ?
        <div className="fixed top-0 right-0  w-72 h-full bg-gray-50">
            <div onClick={() => setState(false)} className="cursor-pointer">
                <img className="mr-10 mt-6" src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/close.svg"/>
            </div>
            <ul className="paddingUl gap-9 flex flex-col">
                <div className="navigation-card menu-navigation">
                <img className="tab-img" src="/logo/cart.svg"/>

                  <a href="#" className="tab">
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
                        stroke-width="7"
                      ></rect>
                      <g clip-path="url(#clip0_41_27)">
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

                  <a href="#" className="tab">
                    <svg
                      width="101"
                      height="114"
                      viewBox="0 0 101 114"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="46.1726"
                        cy="46.1727"
                        r="29.5497"
                        transform="rotate(36.0692 46.1726 46.1727)"
                        stroke="black"
                        stroke-width="7"
                      ></circle>
                      <line
                        x1="61.7089"
                        y1="67.7837"
                        x2="97.7088"
                        y2="111.784"
                        stroke="black"
                        stroke-width="7"
                      ></line>
                    </svg>
                  </a>
                </div>
                <a href='/sign'>
                    <span>ثبت نام / ورود</span>
                </a>
                <a>
                تیشرت
                </a>
                <a>
                پیراهن
                </a>
                <a>
                کت و شلوار
                </a>
                <a>
                شلوار و شلوارک
                </a>
                <a>
                کلاه و جوراب
                </a>
                <a>
                هودی و کاپشن
                </a>
                <a>
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