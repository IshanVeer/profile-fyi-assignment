import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

async function getItems() {
  const res = await fetch('https://fakestoreapi.com/products');
  const items = await res.json();

  return items;
}

const page = async () => {
  const items = await getItems();
  console.log(items, 'items');
  return (
    <div>
      {/* header content */}
      <header className='m-auto flex max-sm:flex-col  justify-between bg-primary-500  '>
        <div className='max-w-[50%] max-sm:max-w-none max-sm:text-center px-16 py-20'>
          <h1 className='h1-bold font-poppins max-sm:text-[36px] max-sm:leading-10'>
            FIND PRODUCTS THAT MATCHES YOUR STYLE
          </h1>
          <p className='paragraph-regular mt-6 text-neutral-500'>
            Browse through our diverse range of meticulous products, designed to
            bring out your individuality and cater to your sense of style.
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
              <h3 className='text-[40px] max-sm:text-[24px] leading-[54px]'>
                200+
              </h3>
              <p className='body-regular text-neutral-500 '>
                International Brands
              </p>
            </div>
            <div className='border-r-2 px-8'>
              <h3 className='text-[40px] max-sm:text-[24px] leading-[54px]'>
                2,000+
              </h3>
              <p className='body-regular text-neutral-500 '>
                High-Quality Products
              </p>
            </div>
            <div className='px-8'>
              <h3 className='text-[40px] max-sm:text-[24px] leading-[54px]'>
                30,000+
              </h3>
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
      </header>
      {/* section 1 */}
      <section className='m-auto mt-12 px-16 pt-20 text-center'>
        <h2 className='h2-bold my-12 max-sm:leading-tight'>NEW ARRIVALS</h2>
        <div className='overflow-x-auto'>
          <ul className='flex items-center justify-between gap-4'>
            {items.slice(0, 4).map((item: any) => (
              <li
                key={item.id}
                className=' w-full flex flex-col items-center px-4 py-6 shadow-sm bg-neutral-50 rounded-lg flex-grow'
              >
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className='w-full object-contain h-[250px]'
                  />{' '}
                  <p className='base-semibold  p-2 m-2'>
                    {item.title.slice(0, 12)}
                  </p>{' '}
                  <p className='h3-bold'>{`$${item.price}`}</p>
                </Link>
                <Button className='my-4 bg-black text-neutral-100 w-full hover:bg-neutral-800'>
                  Add To Cart
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* section 2 */}
      <section className='m-auto mt-12 px-16 py-20 text-center'>
        <h2 className='h2-bold my-12 max-sm:leading-8'>TOP SELLING</h2>
        <div className='overflow-x-auto'>
          <ul className='flex items-center justify-between gap-4'>
            {items.slice(4, 8).map((item: any) => (
              <li
                key={item.id}
                className=' w-full flex flex-col items-center px-4 py-6 max-sm:p-6 shadow-sm bg-neutral-50 rounded-lg flex-grow'
              >
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className='w-full object-contain h-[250px] max-sm:h-[150px]'
                  />{' '}
                  <p className='base-semibold  p-2 m-2'>
                    {item.title.slice(0, 12)}
                  </p>{' '}
                  <p className='h3-bold'>{`$${item.price}`}</p>
                </Link>
                <Button className='my-4 bg-black text-neutral-100 w-full hover:bg-neutral-800'>
                  Add To Cart
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className='h-[200px] bg-primary-500'></footer>
    </div>
  );
};

export default page;
