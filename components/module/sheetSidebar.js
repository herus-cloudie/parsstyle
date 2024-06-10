'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import SheetSearch from "./sheetSearch"

import { usePathname } from "next/navigation"

export default function SheetSide ({session}) {
    let pathname = usePathname()
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <div className="cursor-pointer">
                        <img alt='open hamburger menu logo' className="mr-6" src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/burger2.svg"/>
                    </div>
                </SheetTrigger>
                <SheetContent style={{zIndex : '1032'}} side='right'>
                    <ul className="paddingUl gap-9 flex flex-col mt-5">
                        <div className="navigation-card menu-navigation">
                        {session ? 
                        <>
                            <a href='/cart'><img className="tab" src="/logo/cart.svg" /></a>
                            <a style={{width : '60px'}} className="tab" href="/profile"><img src="/logo/user.png"/></a>
                        </> 
                        : null 
                        }
                        <SheetSearch>
                            <a className="tab">
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
                                    strokeWidth="7"
                                ></circle>
                                <line
                                    x1="61.7089"
                                    y1="67.7837"
                                    x2="97.7088"
                                    y2="111.784"
                                    stroke="black"
                                    strokeWidth="7"
                                ></line>
                                </svg>
                            </a>
                        </SheetSearch>
                        
                        </div>
                    {
                        session || pathname == '/sign' ? null 
                        : <a href='/sign' className='md:mt-3 -mt-3'><span>ثبت نام / ورود</span></a>
                    } 
                    {
                        pathname != '/' ? <a href='/' style={{fontFamily : 'bold-vazir'}}>صفحه اصلی</a> : null
                    }
                        <a href='/dress?sex=women'>
                        زنانه
                        </a>
                        <a href='/dress?sex=men'>
                        مردانه
                        </a>
                        <a href='/dress?category=coat'>
                        کت و شلوار
                        </a>
                        <a href='/dress?category=shirt'>
                        تیشرت و پیراهن
                        </a>
                        <a href='/dress?category=shoes'>
                        کفش
                        </a>
                        <a href='/dress?category=pants'>
                        شلوار و شلوارک
                        </a>
                        <a href='/dress?category=winter'>
                        زمستانی
                        </a>
                        <a href='/dress?category=wedding'>
                        مجلسی زنانه
                        </a>
                        <a href='/dress?category=sport'>
                        ورزشی
                        </a>
                        
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    )
}


