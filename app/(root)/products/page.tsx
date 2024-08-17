import { getItems } from '@/lib/getItems';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const page = async () => {
  const items = await getItems();
  return (
    <div className='px-8 py-16'>
      <ul className='grid grid-cols-3 gap-x-6 gap-y-12 text-center max-sm:grid-cols-2'>
        {items.map((item: any) => (
          <li
            key={item.id}
            className=' flex w-full grow flex-col items-center rounded-lg bg-neutral-50 px-4 py-6 shadow-sm'
          >
            <Link href={`/products/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className='h-[250px] w-full object-contain'
              />{' '}
              <p className='base-semibold  m-2 p-2'>
                {item.title.slice(0, 12)}
              </p>{' '}
              <p className='h3-bold'>{`$${item.price}`}</p>
            </Link>
            <Button className='my-4 w-full bg-black text-neutral-100 hover:bg-neutral-800'>
              Add To Cart
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
