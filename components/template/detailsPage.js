'use client'

import AddToCart from '@/components/module/addToCart';
import ShareBtn from '@/components/module/shareBtn';
import CarouselDetails from '@/components/module/carouselDetails';

import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from '../ui/use-toast';

import { SelectScore } from '../module/selectScore';
import Loaders from '../module/loaders';

import { sp } from '@/utils/changeFormat';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const DetailsPage = ({data , session}) => {
    const {img , color , title , category , price , size , id , discount , seller} = data;

    const {toast} = useToast();
    const router = useRouter();
    const pathname = usePathname();
    let searchParams = useSearchParams();

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
    
        return params.toString()
        },
        [searchParams]
    )
    const [loading, setLoading] = useState(false)

    const [allComment, setAllComment] = useState([])
    const [commentStatus, setCommentStatus] = useState('reading')
    const [commentData, setCommentData] = useState({
        name : session?.user.email,
        score : '',
        text : '',
        recommendation : false,
        seller : seller
    })

    const [additionalData, setAdditionalData] = useState({
        color : searchParams.get('color'),
        size : searchParams.get('size')
    })

    useEffect(() => {
        setLoading(true)
        async function GetComments(){
            let getComment = await fetch('/api/comment')
            let {comments} = await getComment.json()
            console.log(comments , comments.length)
            setAllComment(comments)
        } 
        GetComments()
        setLoading(false)
    } , [loading])

    function getCommentTime(commentData){
        const now = new Date();
        const created = new Date(commentData);
        
        const minute = Math.floor((now - created) / 1000 / 60);
        if(minute < 60) return sp(minute) + ' دقیقه';
        const hour = Math.floor(( now - created) / 1000 / 60 / 60);
        if(hour < 24) return sp(hour) + ' ساعت';
        const day = Math.floor(( now - created) / 1000 / 60 / 60 / 24);
        return sp(day) + ' روز';
    }
    const sendComment = async () => {
        if(commentData.text == '') {
            return toast({
                variant:"destructive",
                title: "لطفا متن را وارد کنید",
            })
        }
        if(commentData.text.length < 4) {
            return toast({
                variant:"destructive",
                title: "طول متن باید بیشتر از 4 حرف باشد",
            })
        }
        if(commentData.score == '') {
            return toast({
                variant:"destructive",
                title: "لطفا امتیاز را وارد کنید",
            })
        }
        
        setLoading(true)
        setCommentStatus('reading')
        let progress = await fetch('/api/comment' , {
            method : 'POST',
            body : JSON.stringify({commentData , id}),
            headers : {"Content-Type": "application/json"}
        })
        let Data = await progress.json()
        setLoading(false)
        toast({
            title: "نظر شما با موفقیت ثبت شد",
        })
        setCommentData({
            name : session?.user.email,
            score : '',
            text : '',
            recommendation : false,
        })
    }
    const changeHandlerSize = (e , size) => {
        setAdditionalData({...additionalData , size : size})
        router.push(pathname + '?' + createQueryString('size', size), {scroll : false})
    }
    const changeHandlerColor = (e , color) => {
         setAdditionalData({...additionalData , color : color})
        router.push(pathname + '?' + createQueryString('color', color), {scroll : false})
    }

    let priceWithDiscount = price  - (price  / 100 * discount);
    let relatedComments = allComment.filter(item => item.id == id)
    let averageScore = 0
    averageScore = Math.round(relatedComments.map(item => +item.score).reduce((accumulator, currentValue) => accumulator + currentValue , 0) / relatedComments.length)

  return (
    <div>
        <div className='lg:mx-20 lg:mt-32 mb-20 sm:mt-20 pb-10 flex flex-col lg:flex-row items-center justify-between lg:items-start border-b border-zinc-500'>
            <div className='lg:w-3/5 w-4/5 flex justify-center mt-16 sm:mt-0 mb-10 lg:mb-0 lg:-mr-10 overflow-hidden relative'>
                <CarouselDetails img={img} id={id} discount={discount}/>
            </div>
            <div className='lg:w-2/5 w-4/5 mt-custom '>
                <div className='h-10 flex justify-between pr-3 items-center'>
                    <div style={{width : '150px'}} className='flex justify-between'>
                        <span style={{width : '50px'}} className='px-3 flex items-baseline'><img alt='star icon' className='star-icon' src='/logo/star.png'/><span className='text-icon  text-xl'>{averageScore ? sp(averageScore) : 5}</span></span>
                        <span style={{width : '50px'}} className='px-3 flex items-baseline'><img alt='comment icon' className='comment-icon' src='/logo/comment.png'/><span className='text-icon text-xl'>{sp(relatedComments.length)}</span></span>
                    </div>
                    <ShareBtn />
                </div>
                <div className='details-container'>
                    <span className='seller'>فروشنده :  {data.seller == 'parsstyle' ? 'پارس استایل' : data.seller == 'tavana' ? 'توانا': data.seller == 'lebasina' ? 'لباسینا' : null}</span>
                </div>
                <div className='details-container'>
                    <span className='title-details'>{title}</span>
                </div>
                <div className='details-container flex justify-between'>
                    <span className='seller'>{category == 'shoes' ? 'کفش' : category == 'pants' ? 'شلوار و شلوارک' :  category == 'winter' ? 'زمستانی'
                : category == 'coat' ? 'کت و شلوار' :  category == 'wedding' ? 'مجلسی زنانه'
                : category == 'sport' ? 'اسپرت' : 'تیشرت و پیراهن' }</span>
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
                                color.map((color, index) => (
                                    <div onClick={(e) => changeHandlerColor(e , color)} key={index}
                                    style={additionalData.color == color? 
                                    {background : color , width : '1.3rem' , height : '1.3rem' , border : '3px solid white' , margin : '0 5px' , boxShadow : 'black 0px 0px 10px'}
                                    : {background : color , width : '1.3rem' , height : '1.3rem' , border : '1px solid #ccb534' , margin : '0 5px'}} className='card-color cursor-pointer'></div>
                                ))
                            }  
                        </div>
                        <div className='card-size-group'>
                            {
                                size.map((size, index) => (
                                    <div onClick={(e) => changeHandlerSize(e , size)} key={index}
                                    style={additionalData.size == size ? 
                                    {fontSize : '15px' , margin : '0 10px' , border : '1px solid black', padding: '2px 5px 0' , borderRadius : '50%', boxShadow : 'black 0px 0px 10px' }
                                    : {fontSize : '13px' , margin : '0 10px'  } } 
                                    className='card-size cursor-pointer'><span>{size}</span></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <AddToCart defaultData={{size : size[0] , color : color[0]}} session={session} data={data} additionalData={additionalData}/>
            </div>
        </div>
        {
            loading ? <div className='flex justify-center'><Loaders /></div>
            : commentStatus == 'reading'
            ? <div className='lg:mx-20 lg:mt-10 mb-10 sm:mt-5'>
            <div className='border-b-4 border-black mr-5 w-64 pb-2 sm:mr-20 text-center sm:text-start text-3xl' style={{color : '#333'}}> امتیاز و نظرات کاربران</div>
            <div className='flex lg:flex-row flex-col sm:px-10 px-4 justify-between'>
               <div className='lg:w-1/4 w-full  h-52 shadow-md text-[#333] shadow-[#a2a2a2] rounded-lg ml-5 mt-8'>
                   <div className='text-center p-3 flex flex-col'>
                       <div>
                           <span className='text-[26px] text-black'>{averageScore ? sp(averageScore) : 5}</span><span>از ۵</span>
                       </div>
                       <span className='mt-3'>از مجموع {relatedComments.length} نظر کاربران </span>
                       {
                        !session ? <div className='mt-12' onClick={() => router.push('/sign')}><Button>برای ثبت نظر وارد حساب شوید</Button></div>
                        : <div className='mt-12' onClick={() => setCommentStatus('adding')}><Button>شما هم نظرتان را بگویید!</Button></div>
                       }
                   </div>
               </div>
            <div className='flex flex-col lg:w-3/4 w-full mt-4'>
               {
                relatedComments.length != 0 ?
                relatedComments.map(item => (
                    
                    <div>
                         <div className='p-5 my-4 border rounded shadow-md flex flex-col justify-between lg:mx-0 md:min-h-32 min-h-44'>
                             <div className='flex flex-col'>
                                 <div className='flex gap-5 items-center sm:mt-0'>
                                     <span className={`px-3 py-1 ${item.score == 1 ? 'bg-red-800' : item.score == 2 ? 'bg-red-500' : item.score == 3 ? 'bg-gray-600' : item.score == 4 ? 'bg-green-600' : item.score == 5 ? 'bg-green-800' : null} text-white rounded-lg`}><span className='relative top-[2px]'>{item.score}</span></span>
                                     <span className='text-sm text-[#333]'>{item.name}</span>
                                     <span className='text-sm text-[#333]'>{getCommentTime(item.createdAt)} پیش</span>
                                 </div>
                                 <div className='flex justify-between items-center py-5 border-b-2 border-dashed'>
                                     {
                                         item.recommendation ? 
                                         <div className='text-green-800 text-xs sm:text-sm sm:mt-0'>
                                             خرید این محصول را توصیه میکنم 
                                         </div> : <div></div>
                                     }
                                     <span className='text-left text-[#333] sm:text-xs'style={{fontSize : '12px'}}>فروشنده : {data.seller == 'parsstyle' ? 'پارس استایل' : data.seller == 'tavana' ? 'توانا': data.seller == 'lebasina' ? 'لباسینا' : null}</span>
                                 </div>
                             </div>
                             <div className='flex justify-between sm:items-center flex-col-reverse sm:flex-row h-4/5 -mt-3'>
                                 <span style={{fontSize : '14px' , lineHeight : '22px'}} className='mt-5 relative top-2'>{item.text}</span>
                             </div>
                         </div>
                      </div>
                     ))
                     : <span className='text-center text-2xl mt-10 lg:mt-0 text-[#333]'> متاسفانه نظری ثبت نشده است!</span>
               }
            </div>
            </div>
            </div>
            : <div className='p-10'>
                <div className='border-b-4 border-black w-40 pb-2 sm:mr-20 mr-0 text-start text-3xl' style={{color : '#333'}}> ثبت نظر شما</div>
                <div className='flex justify-around items-start mt-10'>
                    <div className=" w-full sm:w-4/5 md:w-3/5 lg:w-1/2" onChange={(e) => setCommentData({...commentData , 'text' :  e.target.value})}>
                        <Textarea  placeholder='نظرتان را اینجا بنویسید..'/>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-evenly items-center mt-5 sm:mt-10'>
                    <SelectScore commentData={commentData} setCommentData={setCommentData}/>
                    <div className="items-top flex space-x-2 sm:mt-6 mt-10" dir='ltr'>
                        <Checkbox id="terms1" onClick={() => setCommentData({...commentData , 'recommendation' : !commentData.recommendation})}/>
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
                    <div onClick={sendComment}><Button>ثبت نظر</Button></div>
                    <Button onClick={() => setCommentStatus('reading')} variant="destructive">انصراف</Button>
                </div>
            </div>
        }
    </div>
  )
}

export default DetailsPage;