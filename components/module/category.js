'use client'

import { useState } from "react"
import BanerCard from "./banerCard"

const Category = () => {
    let [active, setActive] = useState('men')
    return (
        <div className="w-full flex justify-center flex-col">
            <div className="flex justify-center pt-10 lg:pt-0">
                <div style={active == 'men' ? { borderBottom: '4px solid #000', fontWeight: '500'} : null} onClick={() => setActive('men')} className="px-6 custom-category">مردانه</div>
                <div style={active == 'women' ? { borderBottom: '4px solid #000', fontWeight: '500'} : null} onClick={() => setActive('women')} className="px-6 custom-category">زنانه</div>
            </div>
            <div className="flex justify-around flex-wrap">
                {
                    active == 'men' ?
                    <>
                       <a href={'/dress?category=coat&sex=men'}> <BanerCard text={'کت و شلوار'} image={'/picture/suit-o.webp'}/></a>
                       <a href={'/dress?category=shoes&sex=men'}><BanerCard text={'کفش'} image={'/picture/shoes-o.webp'}/></a>
                       <a href={'/dress?category=shirt&sex=men'}><BanerCard text={'تیشرت و پیراهن'} image={'/picture/tshirt-o.webp'}/> </a> 
                       <a href={'/dress?category=pants&sex=men'}><BanerCard text={'شلوار'} image={'/picture/pants-o.webp'}/></a>
                    </>
                    
                    : <>
                       <a href={'/dress?category=coat&sex=women'}> <BanerCard text={'کت و شلوار'} image={'/picture/coat.webp'}/></a>
                       <a href={'/dress?category=wedding&sex=women'}><BanerCard text={'مجلسی'} image={'/picture/wedding.jpg'}/></a> 
                       <a href={'/dress?category=pants&sex=women'}><BanerCard text={'شلوار'} image={'/picture/shirt.webp'}/> </a> 
                       <a href={'/dress?category=shirt&sex=women'}><BanerCard text={'تیشرت و پیراهن'} image={'/picture/blouses.webp'}/></a> 
                    </>
                }
            </div>
        </div>
    )
}

export default Category