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
            <div style={active == 'child' ? { borderBottom: '4px solid #000', fontWeight: '500'} : null} onClick={() => setActive('child')} className="px-6 custom-category">بچگانه</div>
        </div>
        <div className="flex justify-around flex-wrap">
            {
                active == 'men' ?
                <>
                    <BanerCard text={'کت و شلوار'} image={'/picture/suit-o.webp'}/>
                    <BanerCard text={'کفش'} image={'/picture/shoes-o.webp'}/>
                    <BanerCard text={'لباس'} image={'/picture/tshirt-o.webp'}/> 
                    <BanerCard text={'شلوار'} image={'/picture/pants-o.webp'}/>
                </>
                
                : <>
                    <BanerCard text={'مجلسی'} image={'/picture/wedding.jpg'}/>
                    <BanerCard text={'کت و شلوار'} image={'/picture/coat.webp'}/>
                    <BanerCard text={'لباس'} image={'/picture/shirt.webp'}/> 
                    <BanerCard text={'بلوز'} image={'/picture/blouses.webp'}/>
                </>
            }
        </div>
    </div>
  )
}

export default Category