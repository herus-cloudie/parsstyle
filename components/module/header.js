
import Session from '@/utils/session'
import Sidebar from './sidebar'
import SheetSearch from './sheetSearch'

const Header = async () => {
  let session = await Session()
  
  return (
    <header>
        <a href='/' className="flex items-center justify-center">
            <img className="fixed animate-pulse cursor-pointer left-logo-responsive" style={{width : '350px', zIndex : '1031' , top : "-60px"}} src="/logo/logopars-removebg-preview.png"/>
        </a>
        <div className="flex header">
            <Sidebar session={session}/>
            <div className="flex gap-6 ml-4 hidden md:flex">
              <div className="navigation-card">
                {
                  session ? 
                  <>
                    <a href='/cart'><img className="tab" src="/logo/cart.svg" /></a>
                    <a href='/profile' className="tab">
                      <svg
                        width="104"
                        height="100"
                        viewBox="0 0 104 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="21.5"
                          y="3.5"
                          width="60"
                          height="60"
                          rx="30"
                          stroke="black"
                          strokeWidth="7"
                        ></rect>
                        <g clipPath="url(#clip0_41_27)">
                          <mask
                            id="mask0_41_27"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="61"
                            width="104"
                            height="52"
                          >
                            <path
                              d="M0 113C0 84.2812 23.4071 61 52.1259 61C80.706 61 104 84.4199 104 113H0Z"
                              fill="white"
                            ></path>
                          </mask>
                          <g mask="url(#mask0_41_27)">
                            <path
                              d="M-7 113C-7 80.4152 19.4152 54 52 54H52.2512C84.6973 54 111 80.3027 111 112.749H97C97 88.0347 76.9653 68 52.2512 68H52C27.1472 68 7 88.1472 7 113H-7ZM-7 113C-7 80.4152 19.4152 54 52 54V68C27.1472 68 7 88.1472 7 113H-7ZM52.2512 54C84.6973 54 111 80.3027 111 112.749V113H97V112.749C97 88.0347 76.9653 68 52.2512 68V54Z"
                              fill="black"
                            ></path>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_41_27">
                            <rect
                              width="104"
                              height="39"
                              fill="white"
                              transform="translate(0 61)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </> 
                  :  <a style={{fontFamily: 'bold-vazir' , color: '#c8a117', cursor: 'pointer'}} href='/sign'><span>ثبت نام / ورود</span></a>  
                }
                <SheetSearch />
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header