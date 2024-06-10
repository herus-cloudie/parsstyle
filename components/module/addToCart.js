'use client'

import { useEffect } from "react"
import { useState } from "react"
import Loaders from "./loaders";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const AddToCart = ({defaultData , data , session , additionalData}) => {
    const router = useRouter()
    const [state, setState] = useState(false);
    const [loading, setLoading] = useState(true);
    const {toast} = useToast();

    useEffect(() => {
         async function IfAddedAlready() {
            setLoading(true)
            let progress = await fetch('/api/cart', {
                method : 'PATCH',
                body : JSON.stringify(data.id),
                headers : {"Content-Type": "application/json"}
            })
            let Data = await progress.json();
            if(Data.message == 'we have had it already') setState(true);
            else setState(false)
            setLoading(false)
        }
        IfAddedAlready()
    } , [])
    
    const AddOrDeleteProductHandler = async () => {
        setLoading(true)
        let progress = await fetch('/api/cart' , {
            method : 'POST',
            body : JSON.stringify({data , additionalData : additionalData.size && additionalData.color ? additionalData : defaultData}),
            headers : {"Content-Type": "application/json"}
        })
        setLoading(false)
        let Data = await progress.json();
        console.log(Data)
        if(Data.message != 'added'){
           setState(false)  
           toast({
            variant:"destructive",
            title: "محصول از سبد خرید شما حذف شد",
          })
        } else{
          setState(true)  
          toast({
            variant: "successful",
            title: "محصول به سبد افزوده شد",
            action: <ToastAction altText="Try again"><Link href={'/cart'}>سبد خرید</Link></ToastAction>,
          })
        } 
    }

  return (
    <div className='details-container'>
        {
          !session ? <div className='flex justify-center mt-10' onClick={() => router.push('/sign')}><Button className='w-full'>برای ثبت سفارش وارد حساب شوید</Button></div>
          : loading ?
             <div className="flex justify-center">
                <Loaders />
            </div> 
                : 
            state ? <button onClick={AddOrDeleteProductHandler} className="enter" style={{width : '100%', backgroundColor : '#ef4747', border : '#ef4747 solid 1px'}}>حذف از سبد خرید</button>
            : <button onClick={AddOrDeleteProductHandler} className="enter" style={{width : '100%'}}>افزودن به سبد خرید</button>
        }
    </div>
  )
}

export default AddToCart