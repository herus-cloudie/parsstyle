'use client'
import { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useToast } from '../ui/use-toast'


const ShareBtn = () => {
    const [url, setUrl] = useState('')
    let {toast} = useToast()
    useEffect(() => {
        setUrl(window.location.href)
    }, [])
    
  return (
   <CopyToClipboard onCopy={() => toast({
      variant:"successful",
      title: "آدرس صفحه در کیبورد شما کپی شد",
    })} text={url}>
        <span style={{width : '50px'}} className='px-3 cursor-pointer'><img alt='share icon' className='share-icon' src='/logo/share.png'/></span>
    </CopyToClipboard> 
  )
}

export default ShareBtn