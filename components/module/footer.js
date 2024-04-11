

const Footer = () => {
  return (
    <footer className="footer pt-0 px-4 pb-4 md:px-10 md:pb-10 -mt-3 flex flex-col justify-center">
        <div className="flex items-center">
        <img className="w-60" src="/logo/logopars-removebg-preview.png"/>
        <span className="logo-line"></span>
        </div>
        <div>
        <div className="footer-1 flex lg:gap-20 md:gap-10 gap-0 flex-col md:flex-row justify-around">
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
            <div className="m-3">تلفن پشتیبانی : <span className="pt-1 pr-2">09394142756</span></div>
            <div className="flex justify-between m-14"> 
                <div>
                <img className="cursor-pointer" src="/logo/instagram.svg" width={30} />
                </div>
                <div>
                <img className="cursor-pointer" src="/logo/telegram.png"  width={30}/>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="footer-2">
            {/* fdsafsf */}
        </div>
        <div className="footer-3">
            
        </div>
        <div className="footer-4">
            
        </div>
        
        </div>
        
    </footer>
  )
}

export default Footer