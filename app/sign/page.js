'use client'

import { useState } from "react"

export default function Sign(){
    const [loginStatus, setLoginStatus] = useState('sign_in');
    const [view, seView] = useState(true);

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
    return (
        <div className='sign-page'>
            {
                loginStatus == 'sign_in' ? 
                <div className="flex justify-center mt-32 py-8 flex-col items-center">
                    <div style={{minHeight : '450px'}} className="card-sign">
                        <a className="login pt-5">ورود به حساب کاربری</a>
                        <div className="inputBox">
                            <input dir="ltr" name="email" value={signinData.email} onChange={changeSigninData} type="text" required="required"/>
                            <span className="user">ایمیل</span>
                        </div>

                        <div className="inputBox">
                            <input dir="ltr" value={signinData.password} onChange={changeSigninData} name="password" type={`${!view ? 'password' : 'text'}`} required="required"/>
                            <span>رمزعبور</span>
                        </div>
                        <div onClick={() => seView(!view)} className="mt-6 cursor-pointer">
                            <img width={25} src={`${view ? "/logo/view.png" : "/logo/hide.png"}`}/>
                        </div>
                        <div className="text-gray-600 text-xs">
                            حساب کاربری ندارید؟ <span onClick={resetDataAndChangetoSignup} className="mr-2 cursor-pointer hover:opacity-70" style={{color : 'rgb(204, 181, 52)'}}>ساخت حساب</span>
                        </div>

                        <button className="enter">ورود</button>

                    </div>
                    <div className="terms">با ورود به سیستم یا ایجاد یک حساب کاربری، با شرایط استفاده از پارس استایل موافقت می کنید</div>
                </div>
                : 
                <div className="flex justify-center mt-32 py-8 flex-col items-center">
                    <div style={{minHeight : '500px'}} className="card-sign">
                        <a className="login pt-5">ساخت حساب کاربری</a>
                        <div className="inputBox">
                            <input dir="ltr" value={signupData.email} name="email" onChange={changeSignupData} type="text" required="required"/>
                            <span className="user">ایمیل</span>
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
                            <img width={25} src={`${view ? "/logo/view.png" : "/logo/hide.png"}`}/>
                        </div>
                        <div className="text-gray-600 text-xs">
                            حساب کاربری دارید؟ <span onClick={resetDataAndChangetoSignin} className="mr-2 cursor-pointer hover:opacity-70" style={{color : 'rgb(204, 181, 52)'}}>ورود به حساب</span>
                        </div>
                        <button className="enter">ایجاد</button>

                    </div>
                <div className="terms">با ورود به سیستم یا ایجاد یک حساب کاربری، با شرایط استفاده از پارس استایل موافقت می کنید</div>
                </div>
            }
        </div>
  )
}