'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

import Loaders from '../module/loaders'
import { SelectForCity } from '../module/selectForCity'

import { useToast } from '../ui/use-toast'

const ProfilePage = () => {
    let [data , setData]= useState();

    let [address , setAddress] = useState({
        street : '',
        unit : '',
        city : ''
    });

    let [userInfo , setUserInfo] = useState({
        userName : '',
        currentPassword : '',
        newPassword : ''
    });

    let [loading , setLoading]= useState(true);
    let [secondLoading , setSecondLoading] = useState(false);
    let [thirdLoading , setThirdLoading] = useState(false);
    let router = useRouter();
    const {toast} = useToast();

    useEffect(() => {
        setLoading(true)
        async function getProfileData(){
          let jsonData = await fetch('api/sign-up')
          let data = await jsonData.json()
          setData(data)
        }
        async function getAddress(){
          let jsonData = await fetch('api/additionalData')
          let {address} = await jsonData.json();
          setAddress(address)
        }
        getProfileData()
        getAddress()
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])

    const date = new Date(data?.user.createdAt).toLocaleDateString('fa-IR')

    const signOutHanlder = async () =>  {
        await signOut()
        router.refresh()
        toast({
            variant: "destructive",
            title: "از حسابتان خارج شدید ",
          })
    }

    const saveAddressHandler = async () => {
        if(address.city == '' || address.street == '' || address.unit == '') toast({title : 'لطفا تمامی موارد آدرس را وارد کنید.' ,  variant: "destructive"})
        else {
            setThirdLoading(true)
            let sendData = await fetch('/api/additionalData' , {
                method : 'PATCH',
                body : JSON.stringify(address),
                headers : {"Content-Type": "application/json"}
            })
            let result = await sendData.json();
            if(result.status == 'success') toast({ variant: "successful",title: "آدرس شما با موفقیت ذخیره شد"})
            else toast({ variant: "destructive",  title: "مشکلی پیش آمده! دوباره تلاش کنید", })
            setThirdLoading(false)
        }
    }

    const editUserInfo = async () => {
        if(!userInfo.userName && !userInfo.newPassword) return toast({ variant: "destructive",  title: "لطفا برای تغییر ، حروف جایگزین را وارد کنید", })
        if(!userInfo.currentPassword) return toast({ variant: "destructive",  title: "لطفا رمز عبور حال حاضر را وارد کنید", })
        if(userInfo.userName.length != 0 && userInfo.userName.length < 4) return toast({ variant: "destructive",  title: "نام کاربری جایگزین باید حداقل 4 حرف باشد", })
        if(userInfo.newPassword.length != 0 && userInfo.newPassword.length < 6) return toast({ variant: "destructive",  title: "رمز عبور جایگزین باید حداقل 6 حرف باشد", })
        else {
            setSecondLoading(true)
            let sendData = await fetch('/api/additionalData' , {
                method : 'POST',
                body : JSON.stringify(userInfo),
                headers : {"Content-Type": "application/json"}
            })
            let result = await sendData.json()
              
            if(result.message == 'you password is incorrect'){
                toast({ variant: "destructive",  title: "رمز عبور اشتباه است", })
            }else if(result.message == 'your userName is already registered'){
                toast({ variant: "destructive",  title: "نام کاربری شما در حال حاضر ثبت شده است", })

            }else if(result.message == 'your user name get change'){ 
                router.refresh()
                toast({ variant: "successful",  title: "نام کاربری شما تغییر یافت", description : 'لطفا مجدد وارد حساب بشوید'})
                await signOut()
               
            }else if(result.message == 'your password get change'){
                toast({ variant: "successful",  title: "رمز عبور تغییر یافت", })
            } else {
                router.refresh()
                toast({ variant: "successful",  title: "نام کاربری و رمز عبور تغییر یافت", description : 'لطفا مجدد وارد حساب بشوید'})
                await signOut()
                
            }
            setSecondLoading(false)
         }    
    }

  return (
    <>
        {loading ? <div className='h-screen items-center justify-center flex'><Loaders/></div>
        : <div className='mt-20 flex flex-col items-center justify-center'>
            <div className="profile-section">
                <Card className="profile-card flex flex-col">
                    <h2 className='profile'>اطلاعات پروفایل</h2>
                    <div className='flex flex-col gap-3 sm:gap-0 border-t sm:flex-row sm:justify-between mt-2 pt-4'>
                        <p>نام کاربری: <strong>{data?.user.Email}</strong></p>
                        <p>تاریخ عضویت: <strong>{date}</strong></p>
                    </div>
                </Card>
            </div>

            <div className="profile-section">
                <Card className="profile-card flex flex-col">
                    <h2 className='profile'>سوابق خرید</h2>
                    <div className='flex sm:justify-center flex-col gap-3 sm:gap-0 border-t sm:flex-row mt-2 pt-4'>
                        هنوز خریدی انجام نداده اید.
                    </div>
                </Card>
            </div>
            <div className="profile-section">
                <Card className="profile-card flex flex-col">
                    <h2 className='profile'>آدرس</h2>
                    <div className='flex lg:justify-around items-center flex-col gap-3 lg:gap-0 border-t lg:flex-row mt-2 pt-4'>
                        <div className='flex flex-col md:flex-row justify-around gap-5 md:gap-10'>
                            <div className="inputBox bg-white mt-5 ">
                                <input onChange={(e) => setAddress({...address , street : e.target.value})} dir="rtl" value={address.street}/>
                                <span>خیابان و کوچه</span>
                            </div>
                            <div className="inputBox bg-white mt-5">
                                <input onChange={(e) => setAddress({...address , unit : e.target.value})} dir="rtl" value={address.unit}/>
                                <span>پلاک و واحد</span>
                            </div>
                        </div>
                        <SelectForCity value={address.city} address={address} setAddress={setAddress}/>
                    </div>
                    <div className='mt-12 mx-10 flex items-center justify-center'>
                    {thirdLoading ? <div className='-mt-1'><Loaders/></div> : <Button onClick={saveAddressHandler}>ذخیره آدرس</Button> }
                    
                    </div>
                </Card>
            </div>
            <div className="profile-section">
                <Card className="profile-card flex flex-col">
                   <div className='flex justify-between'>
                    <h2 className='profile'>ویرایش اطلاعات</h2>
                    <p className='text-red-700 text-sm hidden lg:flex'>در صورت تغییر "نام کاربری" باید مجدد وارد اکانت بشید.</p>
                   </div>
                    <div className='flex lg:justify-around items-center flex-col gap-3 lg:gap-0 border-t lg:flex-row mt-2 pt-4'>
                        <p className='text-red-700 text-sm lg:hidden'>در صورت تغییر "نام کاربری" باید مجدد وارد اکانت بشید.</p>
                        <div className='flex flex-col md:flex-row justify-around gap-5 md:gap-10'>
                            <div className="inputBox bg-white mt-5 ">
                                <input onChange={(e) => setUserInfo({...userInfo , userName : e.target.value})} dir="rtl" name="" placeholder={data?.user.Email}/>
                                <span>نام کاربری</span>
                            </div>
                            <div className="inputBox bg-white mt-5">
                                <input onChange={(e) => setUserInfo({...userInfo , newPassword : e.target.value})} dir="rtl" name=""/>
                                <span>رمز عبور جدید</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 mx-10 flex items-center justify-center'>
                        <input className='p-2 rounded-md ml-5 w-32 border border-[#333]' dir="rtl" onChange={(e) => setUserInfo({...userInfo , currentPassword : e.target.value})} placeholder='رمز عبور فعلی'/>
                        {secondLoading ? <div className='mr-3'><Loaders/></div> : <Button onClick={editUserInfo}>ویرایش و دخیره</Button> }
                    </div>
                </Card>
            </div>
            <div className='profile-section flex justify-center gap-4 border-t-2'>
                <Button onClick={() => signOutHanlder()} className='bg-red-500 w-52 mt-5 md:mt-16'>خروج از حساب</Button>
                <Button onClick={() => router.push('/')} className='w-52 mt-5 md:mt-16'>بازگشت به صفحه اصلی</Button>
            </div>
        </div>
        }
    </>
  )
}

export default ProfilePage;


const Card = ({ children }) => <div style={{backgroundColor : '#F5F4EF'}} className={`carddd`}>{children}</div>


