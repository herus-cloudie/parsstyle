import React from 'react'

const CartPage = () => {
  return (
    <div className='py-40 flex flex-col justify-center items-center'>
        <p style={{fontSize: '25px',color: '#808080'}} className='pb-4'>سبد خرید شما خالی است!</p>
         <img src='/picture/cart1.png' width={300}/>
    </div>
  )
}

export default CartPage