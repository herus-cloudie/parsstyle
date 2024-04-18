'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast'
import Loaders from '../module/loaders'
import { SelectForCity } from '../module/selectForCity'

const ProfilePage = () => {
    let [data , setData]= useState();
    let [loading , setLoading]= useState(true);
    let router = useRouter();
    const {toast} = useToast()

    useEffect(() => {
        setLoading(true)
        async function getProfileData(){
          let jsonData = await fetch('api/sign-up')
          let data = await jsonData.json()
          setData(data)
        }
        getProfileData()
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
  return (
    <>
    {
        loading ? 
        <div className='h-screen items-center justify-center flex'>
            <Loaders/>
        </div>
        : 
        <div className='mt-20'>
            <div>
                <h3 className='profile'>پروفایل</h3>
                <div className='flex justify-around items-center'>
                    <div>نام حساب کاربری : {data?.user.Email}</div>
                    <div>تاریخ عضویت : {date}</div>
                    <div onClick={signOutHanlder}><Button variant="destructive">خروج از حساب</Button></div>
                </div>
                <div className='flex justify-center items-center mt-16'>
                    <div className='ml-10'>سطح کاربری : عادی - مشتری</div>
                    <Button>ارتقای سطح کاربری</Button>
                </div>
                <hr className='mt-10'/>
            </div>
            <div  className='pt-10' style={{backgroundColor : '#F5F4EF'}}>
                <h3 className='profile'>سوابق خرید</h3>
                <div className='flex justify-around notyet'>
                    شما هنوز خریدی انجام نداده اید!
                </div>
                <hr className='mt-10'/>
            </div>
            <div className='pt-10'>
                <h3 className='profile'>افزودن اطلاعات آدرس</h3>
                <div className='flex flex-col mx-10'>
                    <div className='flex justify-around items-end'>
                        <SelectForCity />
                        <div className="inputBox">
                            <input dir="rtl" name=""/>
                            <span>خیابان و کوچه</span>
                        </div>
                        <div className="inputBox">
                            <input dir="rtl" name=""/>
                            <span>پلاک و واحد</span>
                        </div>
                    </div>
                    <div className='mt-20 mx-10 flex items-center justify-center'>
                    <Button>ذخیره آدرس</Button>
                    </div>
                </div>
                <hr className='mt-10'/>
            </div>
            <div className='py-10' style={{backgroundColor : '#F5F4EF'}}>
                <h3 className='profile'>ویرایش اطلاعات</h3>
                <div className='flex flex-col mx-10'>
                    <div className='flex justify-around'>
                        <div className="inputBox">
                            <input placeholder={data?.user.Email} dir="ltr" name="password"/>
                            <span>نام کاربری</span>
                        </div>
                        <div className="inputBox">
                            <input dir="ltr" name="password"/>
                            <span>رمزعبور جدید</span>
                        </div>
                    </div>
                    <div className='mt-32 mx-10 flex items-center justify-center'>
                        <div className='flex justify-between ml-3'>
                            <div className="inputBox">
                                <input dir="rtl" name="password" placeholder='رمز عبور فعلی '/>
                            </div>
                        </div>
                        <Button>ویرایش</Button>
                    </div>
                </div>
                
            </div>
        </div>
    }
    </>
  )
}

export default ProfilePage;