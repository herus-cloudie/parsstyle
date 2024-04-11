'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast'

const ProfilePage = () => {
    let [data , setData]= useState();
    let router = useRouter();
    const {toast} = useToast()

    useEffect(() => {
        async function getProfileData(){
          let jsonData = await fetch('api/sign-up')
          let data = await jsonData.json()
          setData(data)
        }
        getProfileData()
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
    <div className='container mt-20 mb-40'>
        <div>
            <h3 className='profile'>پروفایل</h3>
            <div className='flex justify-around'>
                <div>نام کاربری : {data?.user.Email}</div>
                <div>تاریخ عضویت : {date}</div>
                <div onClick={signOutHanlder}><Button variant="destructive">خروج از حساب</Button></div>
            </div>
            <hr className='mt-10'/>
            <h3 className='profile mt-10'>سوابق خرید</h3>
            <div className='flex justify-around notyet'>
                شما هنوز خریدی انجام نداده اید!
            </div>
            <hr className='mt-10'/>
        </div>
        <div>
            <h3 className='profile'>ویرایش اطلاعات</h3>
            <div className='flex flex-col mx-10'>
                <div className='flex justify-around'>
                    <div className="inputBox">
                        <input value={data?.user.Email} dir="ltr" name="password"/>
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
  )
}

export default ProfilePage