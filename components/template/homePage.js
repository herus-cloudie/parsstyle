import Category from "@/components/module/category";
import Tooltip from "@/components/module/tooltip";
import OfferCarousel from "../module/offerCarousel";

const HomePage = ({data}) => {
  return (
    <div dir="rtl">
        <main>
        <div className="hero">
            <img alt="hero image" style={{width: '100%'}} src={'/picture/hero-image.jpg'}/>
        </div>
        <div className="w-full picture-side">
            <h2 className="picture-side-text mr-5">
            دسته بندی
            </h2>
            <Category />
        </div>
        <div style={{backgroundColor : '#F5F4EF'}} className=" w-full h-full md:px-20 px-5  py-20">
            <div className="whyus md:flex-row-reverse w-full flex flex-col-reverse items-center justify-around">
            <div className="md:w-2/5 w-4/5">
                <img alt="why us picture" className="rounded w-full h-full" src="/picture/parche.jpg" />
            </div>
            <div className="md:w-2/5 w-5/5 text-center mb-10">
                <h3 style={{lineHeight: '50px'}} className="md:text-3xl text-2xl  mb-16 md:mb-0 text-center">مهم نیست بودجت چقدره. اینجا با هر قیمتی یک گزینه داری!</h3>
                <a href="/dress?&off=yes"><button  className="enter md:mt-8 " style={{width : '200px' , borderRadius : '30px'}}>مشاهده تخفیف ها</button></a>
            </div>
            </div>
            <div className="whyus w-full flex md:flex-row  flex-col items-center justify-around pt-8">
            <div className="md:w-2/5 w-4/5">
                <img alt="why us picture" className="rounded w-full h-full" src="/picture/parche2.jpg" />
            </div>
            <div className="md:w-2/5 w-5/5 ">
                <h3 style={{lineHeight: '50px'}} className="md:text-3xl text-2xl  text-center mt-16 md:mt-0">تنوع سایز زیاده , پس فکرت رو درگیرش نکن.</h3>
            </div>
            </div>
        </div>
        </main>
        <div className="flex flex-col mt-10">
        <div className='border-b-4 border-black w-44 pb-2 mr-20 text-start text-3xl' style={{color : '#333'}}> تخفیفات ویژه </div>
            <div className="flex justify-center mt-10">
             <OfferCarousel data={data}/>   
            </div>
        </div>
        <div className="animate-bounce-custom bg-white rounded fixed bottom-6 left-5">
            <Tooltip />
        </div>
     </div>
  )
}

export default HomePage