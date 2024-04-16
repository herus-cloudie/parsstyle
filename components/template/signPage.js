'use client'

import { useState } from "react"
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation"
import Loaders from "../module/loaders"
import { useToast } from "@/components/ui/use-toast"
export default function SignPage(){
    const {toast} = useToast()
    const router = useRouter()

    const [loginStatus, setLoginStatus] = useState('sign_in');
    const [view, seView] = useState(true);

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    const [signupData, setSignupData] = useState({
        email : '',
        password : '',
        secondPassword : ''
    });
    const [signinData, setSigninData] = useState({
        email : '',
        password : ''
    });

    const changeSigninData = e => setSigninData({...signinData , [e.target.name] : e.target.value})
    const changeSignupData = e => setSignupData({...signupData , [e.target.name] : e.target.value})

    function resetData(){
        setErr('')
        if(loginStatus == 'sign_in'){
            setSigninData({
                email : '',
                password : '',
            })
        }else if(loginStatus == 'sign_up'){
            setSignupData({
                email : '',
                password : '',
                secondPassword : ''
            })
        }
    }

    const resetDataAndChangetoSignin = () => {
        setLoginStatus('sign_in')
        resetData()
    }
    const resetDataAndChangetoSignup = () => {
        setLoginStatus('sign_up')
        resetData()
    }

    const signinHandler = async () => {
        if(signinData.email.length == 0 || signinData.password.length == 0) return setErr('لطفا تمامی ورودی ها را کامل کنید')
        else if(signinData.email.length < 4) return setErr('طول نام کاربری باید حداقل 4 کاراکتر باشد')
        else{
            setErr('')
            setLoading(true)
            let user = await signIn('credentials' , {
                email : signinData.email,
                password : signinData.password,
                redirect : false
            })
            setLoading(false)
            if(user.ok){
                router.push('/') 
                router.refresh()
                toast({
                    title: "با موفقیت وارد حساب شدید! ",
                  })
            }else if(user.error == 'Password in not correct'){
                setErr('رمز عبور اشتباه است')
            }
            else if(user.error == `User doesn't exist`){
                setErr('حساب کاربری وجود ندارد')
            }
        }    
    }
    const signupHandler = async () => {
        if(signupData.email.length == 0 || signupData.password.length == 0 || signupData.secondPassword.length == 0) return setErr('لطفا تمامی ورودی ها را کامل کنید')
        else if(signupData.email.length < 4) return setErr('طول نام کاربری باید حداقل 4 کاراکتر باشد')
        else if(signupData.password.length < 6) return setErr('طول رمزعبور باید حداقل 6 کاراکتر باشد')
        else if(signupData.password !== signupData.secondPassword) return setErr('رمزهای عبور باهم همخوانی ندارند')
        else{
            setErr('')
            setLoading(true)
            let progress = await fetch('/api/sign-up' , {
                method : 'POST',
                body : JSON.stringify(signupData),
                headers : {"Content-Type": "application/json"}
            })
            setLoading(false)
            let data = await progress.json()
            
            if(data.status == 'success'){
                resetDataAndChangetoSignin()
                toast({
                    title: "حساب با موفقیت ایجاد شد",
                    description: "میتونی وارد حسابت بشی!",
                  })

            }else if(data.message == 'the user does exist'){
                setErr('حساب کاربری از قبل ساخته شده')
            }
        } 
    }

    return (
        <div className='sign-page'>
            
            {
                loginStatus == 'sign_in' ? 
                <div className="flex justify-center mt-32 py-8 flex-col items-center">
                    <div style={{minHeight : '450px'}} className="card-sign">
                        <a className="login pt-5">ورود به حساب کاربری</a>
                        <div className="inputBox">
                            <input dir="ltr" name="email" value={signinData.email} onChange={changeSigninData} type="text" required="required"/>
                            <span className="user">نام کاربری</span>
                        </div>

                        <div className="inputBox">
                            <input dir="ltr" value={signinData.password} onChange={changeSigninData} name="password" type={`${!view ? 'password' : 'text'}`} required="required"/>
                            <span>رمزعبور</span>
                        </div>
                        <div onClick={() => seView(!view)} className="mt-6 cursor-pointer">
                            <img alt='hide password icon' width={25} src={`${view ? "/logo/view.png" : "/logo/hide.png"}`}/>
                        </div>
                        <div className="text-gray-600 text-xs">
                            حساب کاربری ندارید؟ <span onClick={resetDataAndChangetoSignup} className="mr-2 cursor-pointer hover:opacity-70" style={{color : 'rgb(204, 181, 52)'}}>ساخت حساب</span>
                        </div>
                        {
                            err ? <span className="text-red-700">{err}</span> : null
                        }
                        <div className="mb-4">
                           {
                            loading ? <Loaders /> : <button onClick={signinHandler} className="enter">ورود</button>
                           } 
                        </div>
                        
                    </div>
                    <div className="terms">با ورود به سیستم یا ایجاد یک حساب کاربری، با شرایط استفاده از پارس استایل موافقت می کنید</div>
                </div>
                : 
                <div className="flex justify-center mt-32 py-8 flex-col items-center">
                    <div style={{minHeight : '500px'}} className="card-sign">
                        <a className="login pt-5">ساخت حساب کاربری</a>
                        <div className="inputBox">
                            <input dir="ltr" value={signupData.email} name="email" onChange={changeSignupData} type="text" required="required"/>
                            <span className="user">نام کاربری</span>
                        </div>

                        <div className="inputBox">
                            <input dir="ltr" value={signupData.password} onChange={changeSignupData} name="password" type={`${!view ? 'password' : 'text'}`} required="required"/>
                            <span>رمزعبور</span>
                        </div>
                        <div className="inputBox">
                            <input dir="ltr" value={signupData.secondPassword} onChange={changeSignupData} name="secondPassword" type={`${!view ? 'password' : 'text'}`} required="required"/>
                            <span>تکرار رمزعبور</span>
                        </div>
                        <div onClick={() => seView(!view)} className="mt-4 cursor-pointer">
                            <img alt='hide password icon' width={25} src={`${view ? "/logo/view.png" : "/logo/hide.png"}`}/>
                        </div>
                        <div className="text-gray-600 text-xs">
                            حساب کاربری دارید؟ <span onClick={resetDataAndChangetoSignin} className="mr-2 cursor-pointer hover:opacity-70" style={{color : 'rgb(204, 181, 52)'}}>ورود به حساب</span>
                        </div>
                        {
                            err ? <span className="text-red-700">{err}</span> : null
                        }
                        <div className="mb-4">
                           {
                            loading ? <Loaders /> : <button  onClick={signupHandler} className="enter">ایجاد</button>
                           } 
                        </div>

                    </div>
                <div className="terms">با ورود به سیستم یا ایجاد یک حساب کاربری، با شرایط استفاده از پارس استایل موافقت می کنید</div>
                </div>
            }
        </div>
  )
}