'use client'

import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react'
import Loaders from '../module/loaders';
import { sp } from '@/utils/changeFormat';

const CartPage = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function GetData() {
       setLoading(true)
       let progress = await fetch('/api/cart')
       let Data = await progress.json();
       setState(Data.cart)
       setLoading(false)
   }
   GetData()
} , [])
console.log(state)
  return (
    <>
      {
        loading ? 
        <div className='h-screen items-center justify-center flex'>
          <Loaders/>
        </div>
        : state.length == 0 ?
        <div className='py-40 flex flex-col justify-center items-center'>
            <p style={{fontSize: '25px', color: '#808080'}} className='pb-4'>سبد خرید شما خالی است!</p>
            <img src='/picture/cart1.png' width={300}/>
        </div> 
        : 
        <div className='flex flex-col my-9 mx-20'>
          <div className='flex justify-center px-12 mt-32'>
            <div className='flex flex-col text-center'>
              <div className='done-progress mx-5'  style={{borderColor : '#b78f1694'}}>
                <img src='https://www.digistyle.com/static/files/1b43cd64.svg'/>
              </div>
              <p className='mt-2' style={{color : '#b78f1694'}}>سبد خرید</p>
            </div>
            <span className='span-done-progress' style={{backgroundColor : '#b78f1694'}}/>
            <div className='flex flex-col text-center'>
              <div className='done-progress mx-10'>
                <img src='https://www.digistyle.com/static/files/f78673d0.svg'/>
              </div>
              <p className='mt-2' style={{color : '#c2c2c2'}}>اطلاعات ارسال</p>
            </div>
            <span className='span-done-progress'/>
            <div className='flex flex-col text-center'>
              <div className='done-progress mx-5'>
                <img src='https://www.digistyle.com/static/files/0cb76b91.svg'/>
              </div>
              <p className='mt-2' style={{color : '#c2c2c2'}}>اطلاعات پرداخت</p>
            </div>
          </div>
          <div className='md:mx-10 mt-10'>
            {
              state.map(item => {
                let discount = ((item.price / 100) - item.discount) * item.price ;
                return(
                  <div className='w-full flex cart-card flex-row-reverse justify-between items-center cart-card'>
                    <div>
                      <div>
                        قیمت : {sp(item.price)} تومان  
                      </div>
                      <div style={{color : '#b78f1694'}}>
                        تخفیف : {item.discount == 'no' ? sp(0) : sp(discount)} تومان  
                      </div>
                      <div>
                      قیمت نهایی : {item.discount == 'no' ? sp(item.price) : sp(item.price - discount)} تومان  
                      </div>
                    </div>
                    <div>
                      <div>
                      </div>
                      <div>
                      </div>
                      <div>
                      </div>
                      <div>
                      </div>
                    </div>
                    <div>
                      <img src={item.img[0]} width={100}/>
                    </div>
                </div>
                )
              })
            }
          </div>
        </div>
        
      }
    </>
  )
}

export default CartPage