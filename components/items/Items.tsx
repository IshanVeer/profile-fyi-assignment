'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import CartContext from '@/context/CartContext';

interface Props {
  id: number;
  title: string;
  image: string;
  price: string;
  category: string;
  description: string;
}
interface ItemProps {
  item: Props;
}

const Items = ({ item }: ItemProps) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem(item);
  };
  return (
    <div className='flex w-full flex-col items-center rounded-lg bg-neutral-50 px-4 py-6 shadow-sm'>
      <Link href={`/products/${item.id}`} className='w-full'>
        <Image
          src={item.image}
          alt={item.title}
          width={50}
          height={50}
          className='h-[250px] w-full object-contain'
        />
        <p className='base-semibold m-2 p-2'>{item.title.slice(0, 12)}</p>
        <p className='h3-bold'>{`$${item.price}`}</p>
      </Link>
      <Button
        onClick={addToCartHandler}
        className='my-4 w-full bg-black text-neutral-100 hover:bg-neutral-800'
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default Items;
