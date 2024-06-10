
import Session from '@/utils/session'
// import Sidebar from './sidebar'
import SheetSearch from './sheetSearch'
import SheetSide from './sheetSidebar'

const Header = async () => {
  let session = await Session()
  
  return (
    <header>
        <a href='/' className="flex items-center justify-center">
            <img alt='main logo parsstyle' className="fixed animate-pulse cursor-pointer left-logo-responsive" style={{width : '250px', zIndex : '1031' , top : "14px"}} src="/logo/parsstyle.png"/>
        </a>
        <div className="flex header">
          
        <SheetSide session={session}/>
            <div className="flex gap-6 ml-4 hidden md:flex">
              <div className="navigation-card">
                {
                  session ? 
                  <>
                    <a href='/cart'><img alt='cart logo' className="tab" src="/logo/cart.svg" /></a>
                    <a style={{width : '60px'}} className="tab" href="/profile"><img src="/logo/user.png"/></a>
                  </> 
                  :  <a style={{fontFamily: 'bold-vazir' , color: '#c8a117', cursor: 'pointer'}} href='/sign'><span>ثبت نام / ورود</span></a>  
                }
                <SheetSearch>
                  <a className="tab">
                      <svg
                        width="101"
                        height="114"
                        viewBox="0 0 101 114"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="46.1726"
                          cy="46.1727"
                          r="29.5497"
                          transform="rotate(36.0692 46.1726 46.1727)"
                          stroke="black"
                          strokeWidth="7"
                        ></circle>
                        <line
                          x1="61.7089"
                          y1="67.7837"
                          x2="97.7088"
                          y2="111.784"
                          stroke="black"
                          strokeWidth="7"
                        ></line>
                      </svg>
                  </a>
                </SheetSearch>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header