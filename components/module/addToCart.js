'use client'

import { useEffect } from "react"
import { useState } from "react"
import Loaders from "./loaders";

const AddToCart = ({data}) => {
    const [state, setState] = useState(false);
    const [loading, setLoading] = useState(true);

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
            body : JSON.stringify(data),
            headers : {"Content-Type": "application/json"}
        })
        setLoading(false)
        let Data = await progress.json();
        Data.message == 'added' ? setState(true) : setState(false)
        console.log(Data)
    }

  return (
    <div className='details-container '>
        {
            loading ?
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