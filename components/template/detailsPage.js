'use client'

import AddToCart from '@/components/module/addToCart';
import ShareBtn from '@/components/module/shareBtn';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { sp } from '@/utils/changeFormat';
import { useState } from 'react';
import { SelectScore } from '../module/selectScore';
import { Checkbox } from "@/components/ui/checkbox"
import CarouselDetails from '@/components/module/carouselDetails';

const DetailsPage = ({data}) => {
    const [commentStatus, setCommentStatus] = useState('reading')
    const {img , color , title , category , price , size , id , discount} = data;
    let priceWithDiscount = price  - (price  / 100 * discount);
  return (
    <div>
        <div className='lg:mx-20 lg:mt-32 mb-20 sm:mt-20 pb-10 flex flex-col lg:flex-row items-center justify-between lg:items-start border-b border-zinc-500'>
            <div className='lg:w-3/5 w-4/5 flex justify-center mt-16 sm:mt-0 mb-10 lg:mb-0 lg:-mr-10 overflow-hidden relative'>

                <CarouselDetails img={img} id={id} discount={discount}/>
            </div>
            <div className='lg:w-2/5 w-4/5 mt-custom '>
                <div className='h-10 flex justify-between pr-3 items-center'>
                    <div style={{width : '150px'}} className='flex justify-between'>
                        <span style={{width : '50px'}} className='px-3 flex items-baseline'><img alt='star icon' className='star-icon' src='/logo/star.png'/><span className='text-icon'>4.2</span></span>
                        <span style={{width : '50px'}} className='px-3 flex items-baseline'><img alt='comment icon' className='comment-icon' src='/logo/comment.png'/><span className='text-icon'>213</span></span>
                    </div>
                    <ShareBtn />
                </div>
                <div className='details-container'>
                    <span className='seller'>فروشنده : پارس استایل</span>
                </div>
                <div className='details-container'>
                    <span className='title-details'>{title}</span>
                </div>
                <div className='details-container flex justify-between'>
                    <span className='seller'>{category}</span>
                    {
                        discount !== 'no' ?
                        <div className='flex items-center gap-3'>
                            <del style={{color : '#333'}} className="text-decoration">{sp(price)}</del>
                            <span className='price-details'>{sp(priceWithDiscount)}<span className='mr-1 toman'>تومان</span></span>  
                        </div>
                        : <span className='price-details'>{sp(price)}<span className='mr-1 toman'>تومان</span></span>  
                     }
                </div>
                <div className='details-container flex justify-between'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2 items-center'>
                            <span className='little-custom-font'>اماده تحویل</span>
                            <img alt='delivery icon' style={{width : '30px'}}  src='/logo/delivery-truck.png'/>
                        </div>
                        <div  className='flex gap-2 items-center'>
                            <span className='little-custom-font'>ضمانت کالا</span>
                            <img alt='warranty icon' style={{width : '25px'}} src='/logo/warranty.png'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-between'>
                        <div className='card-color-group'>
                            {
                                color.map(color => (
                                    <div style={{background : color , width : '1rem' , height : '1rem' , border : '1px solid #ccb534' , margin : '0 5px'}} className='card-color cursor-pointer'></div>
                                ))
                            }
                        </div>
                        <div className='card-size-group'>
                                {
                                    size.map(size => (
                                        <div style={{fontSize : '13px' , margin : '0 10px'}} className='card-size cursor-pointer'>{size}</div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
                <AddToCart data={data}/>
            </div>
        </div>
        {
            commentStatus == 'reading'
            ? <div className='lg:mx-20 lg:mt-10 mb-10 sm:mt-5'>
            <div className='border-b-4 border-black w-64 pb-2 mr-20 text-start text-3xl' style={{color : '#333'}}> امتیاز و نظرات کاربران</div>
            <div className='flex lg:flex-row flex-col sm:px-10 px-4 justify-between'>
               <div className='lg:w-1/4 w-full  h-52 shadow-md text-[#333] shadow-[#a2a2a2] rounded-lg ml-5 mt-10'>
                   <div className='text-center p-3 flex flex-col'>
                       <div>
                           <span className='text-[26px] text-black'> ۳.۸ </span><span>از ۵</span>
                       </div>
                       <span className='mt-3'>از مجموع ۲۰۷ امتیاز کاربران </span>
                       <div className='mt-12' onClick={() => setCommentStatus('adding')}><Button>شما هم نظرتان را بگویید!</Button></div>
                   </div>
               </div>
               <div  className='lg:w-3/4 w-full'>
                   <div className='p-5 my-8 shadow-md flex flex-col justify-between lg:mx-0 md:h-32 min-h-56'>
                       <div className='flex justify-between items-center'>
                           <div className='flex gap-5 items-center  sm:mt-0'>
                               <span className='px-3 py-1 bg-green-800 text-white rounded-lg'><span className='relative top-[2px]'>5</span></span>
                               <span className='text-sm text-[#333]'>مهدی قاسمی</span>
                               <span className='text-sm text-[#333]'>{sp(10)} روز پیش</span>
                           </div>
                           <div className='text-green-800 text-xs sm:text-sm mt-24 sm:mt-0 absolute' >
                               خرید این محصول را توصیه میکنم 
                           </div>
                       </div>
                       <div className='flex justify-between sm:items-center flex-col-reverse sm:flex-row h-3/5'>
                           <span style={{fontSize : '14px' , lineHeight : '22px'}} className='mt-5 relative top-2'>واقعا از خریدم راضی هستم و بهتون پیشنهاد میدمواقعا از خریدم راضی هستم مواقعا از خریدم راضی هستم و بهتوندم راضی هستم و بهتون پیشنهاد میدم</span>
                           <span className='text-left text-[#333]  pt-6 border-b-2 border-dashed sm:text-xs'style={{fontSize : '12px'}}>فروشنده : پارس استایل</span>
                       </div>
                   </div>
                   <div className='p-5 my-8 shadow-md flex flex-col justify-between lg:mx-0 md:h-32 min-h-56'>
                       <div className='flex justify-between items-center'>
                           <div className='flex gap-5 items-center  sm:mt-0'>
                               <span className='px-3 py-1 bg-green-800 text-white rounded-lg'><span className='relative top-[2px]'>5</span></span>
                               <span className='text-sm text-[#333]'>مهدی قاسمی</span>
                               <span className='text-sm text-[#333]'>{sp(10)} روز پیش</span>
                           </div>
                           <div className='text-green-800 text-xs sm:text-sm mt-24 sm:mt-0 absolute' >
                               خرید این محصول را توصیه میکنم 
                           </div>
                       </div>
                       <div className='flex justify-between sm:items-center flex-col-reverse sm:flex-row h-3/5'>
                           <span style={{fontSize : '14px' , lineHeight : '22px'}} className='mt-5 relative top-2'>واقعا از خریدم راضی هستم و بهتون پیشنهاد میدمواقعا از خریدم راضی هستم مواقعا از خریدم راضی هستم و بهتوندم راضی هستم و بهتون پیشنهاد میدم</span>
                           <span className='text-left text-[#333]  pt-6 border-b-2 border-dashed sm:text-xs'style={{fontSize : '12px'}}>فروشنده : پارس استایل</span>
                       </div>
                   </div>
               </div>
            </div>
            </div>
            : <div className='p-10'>
                <div className='border-b-4 border-black w-40 pb-2 sm:mr-20 mr-0 text-start text-3xl' style={{color : '#333'}}> ثبت نظر شما</div>
                <div className='flex justify-around items-start mt-10'>
                    <Textarea className=" w-full sm:w-4/5 md:w-3/5 lg:w-1/2" placeholder='نظرتان را اینجا بنویسید..'/>
                </div>
                <div className='flex flex-col sm:flex-row justify-evenly items-center mt-5 sm:mt-10'>
                    <SelectScore />
                    <div className="items-top flex space-x-2 sm:mt-6 mt-10" dir='ltr'>
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            خرید این محصول را توصیه میکنم
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around sm:justify-evenly mt-16'>
                    <Button>ثبت نظر</Button>
                    <Button  onClick={() => setCommentStatus('reading')} variant="destructive" >انصراف</Button>
                </div>
            </div>
        }
    </div>
  )
}

export default DetailsPage;