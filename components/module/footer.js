import { e2p, p2e, sp } from "@/utils/changeFormat"


const Footer = () => {
  return (
    <footer className="footer pt-0  -mt-3 flex flex-col justify-center">
        <div className="flex items-center">
            <img alt="main logo parsstyle" className="w-60" src="/logo/logopars-removebg-preview.png"/>
            <span className="logo-line"></span>
        </div>
        <div>
        <div className="footer-1 flex lg:gap-20b px-4 md:px-10   md:gap-10 gap-0 flex-col md:flex-row justify-around">
            <div className="flex  lg:gap-20 md:gap-10 gap-0 justify-around mb-9 sm:mb-0">
            <ul className="lg:py-0 lg:px-8 mb-8">
                <p>خرید</p>
                <li>زنانه</li>
                <li>مردانه</li>
                <li>بچه گانه</li>
            </ul>

            <ul>
                <p>خدمات مشتریان</p>
                <li>پاسخ به پرسش های متداول</li>
                <li>رویه های بازگرداندن کالا</li>
                <li>حریم خصوصی</li>
            </ul>
            </div>

        <div  className="flex footer-resposive lg:gap-20 md:gap-10 gap-0 justify-around">
            <ul>
            <p>اطلاعات پارس استایل</p>
            <li>درباره پارس استایل</li>
            <li>تماس با پارس استایل</li>
            <li>همکاری پارس استایل</li>
            </ul>

            <div>
            <div className="m-3">تلفن پشتیبانی : <span className="pt-1 pr-2">{e2p('756 4142 0939')}</span></div>
            <div className="flex justify-between m-14"> 
                <div>
                <img alt="instagram icon" className="cursor-pointer" src="/logo/instagram.svg" width={30} />
                </div>
                <div>
                <img alt="telegram icon" className="cursor-pointer" src="/logo/telegram.png"  width={30}/>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="footer-2 text-center p-2 pt-10 text-gray-700">
            <span className="border-t pt-1">کلیات حقوق این وبسایت متعلق به امیرمحمد مسلمی میباشد ©</span>
        </div>
        </div>
    </footer>
  )
}

export default Footer