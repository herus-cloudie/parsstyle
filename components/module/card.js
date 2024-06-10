'use client'

import { sp } from "@/utils/changeFormat";
import { useRouter } from "next/navigation"

const Card = ({title , price , category , seller , colors , img , id  , discount}) => {
    let router = useRouter();
  return (
    <div onClick={() => router.push(`/dress/${id}`)} className='card m-5 overflow-hidden'>
        {
            discount !== 'no' ? 
            <div className="offer-card">
                <span className="mr-12 text-white text-xl">{sp(discount) + '%'}</span>
            </div>: null
        } 
        <div className='card-img'>
            <img alt="card image" className='w-full rounded' src={img.length > 1 ? img[0] : img}/>
        </div>
        <div className='card-context'>
            <div className='card-price'>
                {
                    discount == 'no' ? <span dir='ltr' className='price'>{sp(price)} T </span> 
                    : <div>
                        <span dir='ltr' className='price'>{sp(price  - (price  / 100 * discount))} T </span> 
                        <del dir='ltr' className='text-[#a8a8a8] relative top-4'>{sp(price)}</del>
                    </div>
                }
                <p className='text'>{category == 'shoes' ? 'کفش' : category == 'pants' ? 'شلوار و شلوارک' :  category == 'winter' ? 'زمستانی'
                : category == 'coat' ? 'کت و شلوار' :  category == 'wedding' ? 'مجلسی زنانه'
                : category == 'sport' ? 'اسپرت' : 'تیشرت و پیراهن' }</p>
            </div>
            <div className='card-color-size flex flex-col'>
                <div className='card-title'>
                     {title}
                </div>
                <div className="flex justify-between max-h-10 items-center">
                    <div className='card-color-group flex justify-between w-2/5 flex-wrap gap-2'>
                    {
                        colors.map((color , index) => (
                            <div key={index} style={{background : color}} className='card-color'></div>
                        ))
                    }
                    </div>
                    <div className='card-size-group  flex w-2/5  flex-wrap gap-3' >
                        {
                            seller == 'parsstyle' ? <span className="seller-title">پارس استایل</span> 
                            : seller == 'tavana' ? <span className="seller-title">توانا</span> 
                            : seller == 'lebasina' ? <span className="seller-title">لباسینا</span> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card