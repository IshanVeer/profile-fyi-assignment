import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='m-auto flex  justify-between bg-primary-500  '>
      {/* header content */}
      <div className='max-w-[50%] px-16 py-20'>
        <h1 className='font-poppins text-[64px] font-bold leading-[64px] tracking-tight'>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className='paragraph-regular mt-6 text-neutral-500'>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link
          href='/products'
          className='paragraph-regular  mt-6 inline-block rounded-full bg-black px-16 py-3 text-neutral-200 transition duration-150 hover:bg-slate-500'
        >
          Shop Now
        </Link>
        {/* brand info */}
        <div className='mt-10 flex justify-between'>
          <div className='border-r-2 pr-8'>
            <h3 className='text-[40px] leading-[54px]'>200+</h3>
            <p className='body-regular text-neutral-500 '>
              International Brands
            </p>
          </div>
          <div className='border-r-2 px-8'>
            <h3 className='text-[40px] leading-[54px]'>2,000+</h3>
            <p className='body-regular text-neutral-500 '>
              High-Quality Products
            </p>
          </div>
          <div className='px-8'>
            <h3 className='text-[40px] leading-[54px]'>30,000+</h3>
            <p className='body-regular text-neutral-500 '>Happy Customers </p>
          </div>
        </div>
      </div>
      {/* header image */}
      <div className='w-full pr-8'>
        <Image
          src='/assets/images/Rectangle 2.png'
          alt='header image'
          width={450}
          height={450}
          className='w-full'
        />
      </div>
    </div>
  );
};

export default page;
