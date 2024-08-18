import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CartSuccessModal = () => {
  return (
    <div className='fixed left-0 top-0 z-50 size-full bg-black bg-opacity-50'>
      <div className='relative top-1/4 mx-auto flex w-[800px] max-sm:w-[75%] flex-col items-center gap-8 rounded-xl bg-neutral-50 py-12 text-center'>
        <h2 className='h2-bold max-sm:text-[24px] uppercase'>Successful</h2>
        <h3 className='h3-bold max-sm:text-[18px]'>Order Placed</h3>

        <Image
          src='/assets/images/accept-check-good-mark-ok-tick-svgrepo-com.svg'
          alt='Success'
          width={50}
          height={50}
        />
        <Link
          href='/products'
          className='rounded-md max-sm:px-4 max-sm:text-[14px] bg-black px-6 py-2 text-neutral-50'
        >
          Return To Shop
        </Link>
      </div>
    </div>
  );
};

export default CartSuccessModal;
