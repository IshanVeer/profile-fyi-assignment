'use client';
import CartContext from '@/context/CartContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { Button } from '../ui/button';
import CartSuccessModal from './CartSuccessModal';

const Cart = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartSubTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const cartDiscount = (cartSubTotal * 10) / 100;
  const cartTotal = cartSubTotal - cartDiscount;

  const checkoutHandler = () => {
    cartCtx.clearCart();
    setIsSuccessModalOpen(true);
  };

  return (
    <div>
      {isSuccessModalOpen && <CartSuccessModal />}
      <div className='flex max-sm:mx-4 max-sm:flex-col'>
        <div className='m-10 w-[70%] rounded-lg bg-neutral-100 max-sm:m-0 max-sm:w-full'>
          <ul>
            {cartCtx.items.map((item) => (
              <li
                key={item.id}
                className=' flex items-center justify-between border-b-2 px-4 py-8 max-sm:flex-col max-sm:items-end'
              >
                <div className='flex items-center gap-12 max-sm:items-start max-sm:gap-4'>
                  <Image
                    src={item.image}
                    className='w-20'
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div className='flex flex-col justify-between gap-6'>
                    <p className='h3-semibold max-sm:text-[18px]'>
                      {item.title}
                    </p>
                    <p className='text-[24px] max-sm:text-[16px]'>{`$${item.price}`}</p>
                  </div>
                </div>
                <div className='rounded-md border bg-white shadow-sm'>
                  <Button
                    className=' text-[24px] max-sm:text-[14px]'
                    onClick={() => cartCtx.removeItem(item.id)}
                  >
                    -
                  </Button>{' '}
                  <span className='  text-[24px]  max-sm:text-[14px]'>
                    {item.quantity}
                  </span>{' '}
                  <Button
                    className=' text-[24px]  max-sm:text-[14px]'
                    onClick={() => cartCtx.addItem(item)}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='m-10 h-full w-[30%] rounded-lg bg-neutral-100 px-8 max-sm:m-0 max-sm:mt-6 max-sm:w-full'>
          <h2 className='h3-semibold mt-6'>Order Summary</h2>
          <div className='my-10 flex flex-col gap-4'>
            {/* subtotal */}
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>{cartSubTotal.toFixed(2)}</p>
            </div>
            {/* discount */}
            <div className='flex justify-between'>
              <p>Discount(10%)</p>
              <p className='text-red-600'>{`-${cartDiscount.toFixed(2)}`}</p>
            </div>
            {/* total */}
            <div className='flex justify-between border-t-2 py-4'>
              <p>Total</p>
              <p>{cartTotal.toFixed(2)}</p>
            </div>
            <Button
              onClick={checkoutHandler}
              className='base-bold bg-black text-neutral-100 hover:bg-zinc-800'
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
