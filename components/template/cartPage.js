'use client'

import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react'
import Loaders from '../module/loaders';
import { sp } from '@/utils/changeFormat';
import DeleteBtn from '../module/deleteBtn';

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
        <div className='flex flex-col sm:my-9 lg:mx-20 sm:mx-10'>
          <div className='flex justify-center sm:px-12 mt-32'>
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
          <div className='md:mx-10 my-10 lg:m-20 mx-5 '>
          
            {
              state.map(item => {
                let discount = ((item.price / 100) - item.discount) * item.price ;
                return(
                  <div className='w-full flex cart-card flex-col-reverse lg:flex-row-reverse  justify-between cart-card lg:px-10 px-6 sm:py-5 items-center '>
                    
                    <div className='flex sm:justify-between justify-evenly sm:flex-row-reverse flex-col-reverse lg:w-2/3 w-full md:w-4/5 h-full lg:border-none border-dotted border-t-2 border-zinc-300'>
                      <div className='flex justify-evenly flex-col '>
                        <div className='flex items-center py-2 sm:pb-0 text-zinc-500 '>
                          قیمت : <div className=' mr-1'> {sp(item.price)}</div> <span className='text-xs mr-1'>تومان</span>  
                        </div>
                        <div className='pb-3 sm:pb-0' style={{color : '#b78f1694'}}>
                          تخفیف : {item.discount == 'no' ? sp(0) : sp(discount)} تومان  
                        </div>
                        <div  className='flex items-center'>
                        قیمت نهایی :<div className='text-xl mr-1'> {item.discount == 'no' ? sp(item.price) : sp(item.price - discount)}</div> <span className='text-xs mr-1'>تومان</span>   
                        </div>
                      </div>
                      <div className='flex flex-col text-xl justify-evenly -mt-5 sm:mt-0'>
                        <div className='pb-4 sm:pb-0'>
                          {item.title}
                        </div>
                        <div className='text-zinc-500 text-sm pb-4 sm:pb-0'>
                          فروشنده : {item.seller == 'parsstyle' ? 'پارس استایل' : item.seller == 'lebasina' ? 'لباسینا' : item.seller == 'کالزینو' ? '' : null}
                        </div>
                        <div className='flex '>
                          <div className='text-zinc-500 text-sm pb-3 sm:pb-0 ml-4'>
                            سایز : XL
                          </div>
                          <div className='text-zinc-500 text-sm pb-3 sm:pb-0  mr-4'>
                            رنگ : قرمز
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='lg:w-1/3'>
                      <img src={item.img[0]} width={200}/>
                    </div>
                    <div className='relative deleteBtn'><DeleteBtn /></div>
                </div>
                )
              })
            }
          </div>
          <div>
            
          </div>
        </div>
        
      }
    </>
  )
}

export default CartPage