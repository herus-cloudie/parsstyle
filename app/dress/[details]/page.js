
import AddToCart from '@/components/module/addToCart';
import CarouselDemo from '@/components/module/carousel';
import ShareBtn from '@/components/module/shareBtn';
import { Button } from '@/components/ui/button';
import { sp } from '@/utils/changeFormat';


const Details = async ({params}) => {
    let {details} = params;
    let getData = await fetch(`http://localhost:4006/data/${details}`)
    let data = await getData.json();

    const {img , color , title , category , price , size} = data;
  return (
    <div>
        <div className='lg:mx-20 lg:mt-32 mb-20 sm:mt-20 pb-10 flex flex-col lg:flex-row items-center justify-between lg:items-start border-b border-zinc-500'>
            <div className='lg:w-3/5 w-4/5 flex justify-center mt-16 sm:mt-0 mb-10 lg:mb-0 lg:-mr-10'>
                <CarouselDemo img={img} id={details}/>
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
                    <span className='price-details'>{sp(price)}<span className='mr-1 toman'>تومان</span></span>
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
        <div className='lg:mx-20 lg:mt-10 mb-10 sm:mt-5 '>
             <div className='border-b-4 border-black w-80 pb-2 mr-20 text-start text-4xl' style={{color : '#333'}}> امتیاز و نظرات کاربران</div>
             <div className='flex justify-between'>
                <div className='w-1/4 h-52 shadow-xl text-[#333] shadow-[#454545] rounded-lg ml-5 mt-10'>
                    <div className='text-center p-3 flex flex-col'>
                        <div>
                            <span className='text-[26px] text-black'> ۳.۸ </span><span>از ۵</span>
                        </div>
                        <span className='mt-3'>از مجموع ۲۰۷ امتیاز کاربران </span>
                        <div className='mt-12'><Button>شما هم نظرتان را بگویید!</Button></div>
                    </div>
                    
                </div>
                <div  className='w-3/4'>
                    <div className='p-5 my-8 shadow-md flex flex-col justify-between mx-10 lg:mx-0 h-32'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <span className='px-3 py-1 bg-green-800 text-white rounded-lg'><span className='relative top-[2px]'>5</span></span>
                                <span className='text-sm text-[#333]'>مهدی قاسمی</span>
                                <span className='text-sm text-[#333]'>{sp(10)} روز پیش</span>
                                <span className='text-sm text-[#333]'> خریدار  </span>
                            </div>
                            <div className='text-green-800 text-sm'>
                                خرید این محصول را توصیه میکنم 
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>واقعا از خریدم راضی هستم و بهتون پیشنهاد میدم</span>
                            <span className='text-sm text-[#333]'>فروشنده : پارس استایل</span>
                        </div>
                    </div>
                    <div className='p-5 my-8 shadow-md flex flex-col justify-between mx-10 lg:mx-0 h-32'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <span className='px-3 py-1 bg-green-800 text-white rounded-lg'><span className='relative top-[2px]'>5</span></span>
                                <span className='text-sm text-[#333]'>مهدی قاسمی</span>
                                <span className='text-sm text-[#333]'>{sp(10)} روز پیش</span>
                                <span className='text-sm text-[#333]'> خریدار  </span>
                            </div>
                            <div className='text-green-800 text-sm'>
                                خرید این محصول را توصیه میکنم 
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>واقعا از خریدم راضی هستم و بهتون پیشنهاد میدم</span>
                            <span className='text-sm text-[#333]'>فروشنده : پارس استایل</span>
                        </div>
                    </div>
                    <div className='p-5 my-8 shadow-md flex flex-col justify-between mx-10 lg:mx-0 h-32'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <span className='px-3 py-1 bg-green-800 text-white rounded-lg'><span className='relative top-[2px]'>5</span></span>
                                <span className='text-sm text-[#333]'>مهدی قاسمی</span>
                                <span className='text-sm text-[#333]'>{sp(10)} روز پیش</span>
                                <span className='text-sm text-[#333]'> خریدار  </span>
                            </div>
                            <div className='text-green-800 text-sm'>
                                خرید این محصول را توصیه میکنم 
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>واقعا از خریدم راضی هستم و بهتون پیشنهاد میدم</span>
                            <span className='text-sm text-[#333]'>فروشنده : پارس استایل</span>
                        </div>
                    </div>
                    <div className='p-5 my-8 shadow-md flex flex-col justify-between mx-10 lg:mx-0 h-32'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <span className='px-3 py-1 bg-green-800 text-white rounded-lg'><span className='relative top-[2px]'>5</span></span>
                                <span className='text-sm text-[#333]'>مهدی قاسمی</span>
                                <span className='text-sm text-[#333]'>{sp(10)} روز پیش</span>
                                <span className='text-sm text-[#333]'> خریدار  </span>
                            </div>
                            <div className='text-green-800 text-sm'>
                                خرید این محصول را توصیه میکنم 
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>واقعا از خریدم راضی هستم و بهتون پیشنهاد میدم</span>
                            <span className='text-sm text-[#333]'>فروشنده : پارس استایل</span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Details;