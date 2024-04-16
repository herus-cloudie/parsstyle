import React from 'react'

const BanerCard = ({image , text}) => {
  return (
    <div className='baner-card hover:scale-105'>
        <a href='/dress' className='baner-card-a'>
            <div className='brand-card-image mx-5 my-10'>
                <img alt={`${text} image`} className='rounded' src={image}/>
            </div>
            <p className='baner-card-text'>
                {text}
            </p>
        </a>
    </div>
  )
}

export default BanerCard