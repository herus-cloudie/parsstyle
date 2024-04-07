'use client'

import { sp } from "@/utils/changeFormat";
import { useRouter } from "next/navigation"

const Card = ({title , price , category , sizes , colors , img , id}) => {
    let router = useRouter();
  return (
    <div onClick={() => router.push(`/dress/${id}`)} className='card m-5'>
        <div className='card-img'>
            <img className='w-full rounded' src={img.length > 1 ? img[0] : img}/>
        </div>
        <div className='card-context'>
            <div className='card-price'>
                <span dir='ltr' className='price'>{sp(price)} T </span>
                <p className='text'>{category}</p>
            </div>
            <div className='card-color-size flex flex-col'>
                <div className='card-title'>
                     {title}
                </div>
                <div className="flex justify-between max-h-10 items-center">
                    <div className='card-color-group flex justify-between w-2/5 flex-wrap gap-2'>
                    {
                        colors.map(color => (
                            <div style={{background : color}} className='card-color'></div>
                        ))
                    }
                    </div>
                    <div className='card-size-group  flex justify-between w-2/5  flex-wrap gap-3' >
                    {
                        sizes.map(size => (
                            <div className='card-size'>{size}</div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card