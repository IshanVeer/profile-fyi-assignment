'use client';
import CartContext from '@/context/CartContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Button } from '../ui/button';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartSubTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const cartDiscount = (cartSubTotal * 10) / 100;
  const cartTotal = cartSubTotal - cartDiscount;

  return (
    <div className='flex'>
      <div className='m-10 w-[70%] rounded-lg bg-neutral-100'>
        <ul>
          {cartCtx.items.map((item) => (
            <li
              key={item.id}
              className=' flex items-center justify-between border-b-2 px-4 py-8'
            >
              <div className='flex items-center gap-12'>
                <Image
                  src={item.image}
                  className='w-20'
                  alt={item.title}
                  width={50}
                  height={50}
                />
                <div className='flex flex-col justify-between gap-6'>
                  <p className='h3-semibold'>{item.title}</p>
                  <p className='text-[24px]'>{`$${item.price}`}</p>
                </div>
              </div>
              <div className='rounded-md border bg-white shadow-sm'>
                <Button className='text-[24px]'>-</Button>{' '}
                <span className='text-[24px]'>0</span>{' '}
                <Button className='text-[24px]'>+</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='m-10 h-full w-[30%] rounded-lg bg-neutral-100 px-8'>
        <h2 className='h3-semibold mt-6'>Order Summary</h2>
        <div className='my-10 flex flex-col gap-4'>
          {/* subtotal */}
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{cartSubTotal}</p>
          </div>
          {/* discount */}
          <div className='flex justify-between'>
            <p>Discount(10%)</p>
            <p className='text-red-600'>{`-${cartDiscount}`}</p>
          </div>
          {/* total */}
          <div className='flex justify-between border-t-2 py-4'>
            <p>Total</p>
            <p>{cartTotal}</p>
          </div>
          <Button className='base-bold bg-black text-neutral-100 hover:bg-zinc-800'>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
