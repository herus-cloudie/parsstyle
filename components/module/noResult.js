'use client'

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

const NoResult = () => {
    let router = useRouter();
  return (
    <div className='flex flex-col items-center justify-evenly mb-32'>
        <p className='text-xl text-stone-500 mb-10 mt-10'>متاسفانه محصولی با این مشخصات پیدا نکردیم!</p>
        <div onClick={() => router.push('/dress')}><Button variant='outline'>دیدن تمامی محصولات</Button></div>
    </div>
  )
}

export default NoResult