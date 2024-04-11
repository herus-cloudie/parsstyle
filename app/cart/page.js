import CartPage from '@/components/template/cartPage'
import Session from '@/utils/session';
import { redirect } from 'next/navigation';
import React from 'react'

const Cart = async () => {
  let session = await Session();
  if(!session) redirect('/')
  return <CartPage />
}

export default Cart;