'use client'
import { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const ShareBtn = () => {
    const [url, setUrl] = useState('')
    useEffect(() => {
        setUrl(window.location.href)
    }, [])
    
  return (
    <CopyToClipboard text={url}>
        <span style={{width : '50px'}} className='px-3 cursor-pointer'><img alt='share icon' className='share-icon' src='/logo/share.png'/></span>
    </CopyToClipboard> 
  )
}

export default ShareBtn