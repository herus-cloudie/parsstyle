
import AddToCart from '@/components/module/addToCart';
import CarouselDemo from '@/components/module/carousel';
import { sp } from '@/utils/changeFormat';


const Details = async ({params}) => {
    let {details} = params;
    let getData = await fetch(`http://localhost:4006/data/${details}`)
    let data = await getData.json();

    const {img , color , title , category , price , size} = data;
  return (
    <div className='lg:mx-20 mt-and-mb-custom sm:my-32 flex flex-col lg:flex-row items-center lg:items-start'>
        <div className='lg:w-3/5 w-4/5'>
        <CarouselDemo img={img} id={details}/>
        </div>
        <div className='lg:w-2/5 w-4/5 mt-custom'>
            <div className='h-10 flex justify-between pr-3 items-center'>
                <div style={{width : '150px'}} className='flex justify-between'>
                    <span style={{width : '50px'}} className='px-3 flex items-baseline'><img className='star-icon' src='/logo/star.png'/><span className='text-icon'>4.2</span></span>
                    <span style={{width : '50px'}} className='px-3 flex items-baseline'><img className='comment-icon' src='/logo/comment.png'/><span className='text-icon'>213</span></span>
                </div>
                <span style={{width : '50px'}} className='px-3'><img className='share-icon' src='/logo/share.png'/></span>
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
                        <img style={{width : '30px'}}  src='/logo/delivery-truck.png'/>
                    </div>
                    <div  className='flex gap-2 items-center'>
                        <span className='little-custom-font'>ضمانت کالا</span>
                        <img style={{width : '25px'}} src='/logo/warranty.png'/>
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
  )
}

export default Details;