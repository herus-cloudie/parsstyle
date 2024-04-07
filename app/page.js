
import BanerCard from "@/components/banerCard";
import { CarouselCustom } from "@/components/carousel";
import Tooltip from "@/components/tooltip";

export default async function Home() {

  return (
    <div dir="rtl">
      <main>
        <div className="hero">
          <img style={{width: '100%'}} src={'/picture/hero-image.jpg'}/>
        </div>
        <div className="w-full picture-side">
          <h2 className="picture-side-text ">
            دسته بندی
          </h2>
          <div className="w-full flex justify-center">
            <div className="flex justify-around flex-wrap">
              <BanerCard text={'کت و شلوار'} image={'/picture/suit-o.webp'}/>
              <BanerCard text={'کفش'} image={'/picture/shoes-o.webp'}/>
              <BanerCard text={'لباس'} image={'/picture/tshirt-o.webp'}/> 
              <BanerCard text={'شلوار'} image={'/picture/pants-o.webp'}/>
            </div>
          </div>
        </div>
        <div style={{backgroundColor : '#f5f5dc87'}} className=" w-full h-full md:px-20 px-5  py-20">
          <div className="whyus md:flex-row-reverse w-full flex flex-col-reverse items-center justify-around">
            <div className="md:w-2/5 w-4/5">
              <img className="rounded w-full h-full" src="/picture/parche.jpg" />
            </div>
            <div className="md:w-2/5 w-5/5">
              <h3 style={{lineHeight: '50px'}} className="md:text-3xl text-2xl  mb-16 md:mb-0 text-center">مهم نیست بودجت چقدره. اینجا با هر قیمتی یک گزینه داری!</h3>
            </div>
          </div>
          <div className="whyus w-full flex md:flex-row  flex-col items-center justify-around pt-8">
            <div className="md:w-2/5 w-4/5">
              <img className="rounded w-full h-full" src="/picture/parche2.jpg" />
            </div>
            <div className="md:w-2/5 w-5/5 ">
              <h3 style={{lineHeight: '50px'}} className="md:text-3xl text-2xl  text-center mt-16 md:mt-0">تنوع سایز زیاده , پس فکرت رو درگیرش نکن.</h3>
            </div>
          </div>
        </div>
      </main>

      <div className="animate-bounce-custom bg-white rounded fixed bottom-6 left-5">
            <Tooltip />
        </div>
    </div>
  );
}
