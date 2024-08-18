'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import CartContext from '@/context/CartContext';

interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}
interface ItemProps {
  item: Props;
}

const Items = ({ item }: ItemProps) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem(item);
    setIsItemAdded(true);
    setTimeout(() => setIsItemAdded(false), 1000);
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
        className={`my-4 w-full bg-black text-neutral-100 hover:bg-neutral-800 transition duration-500 ease-in-out ${
          isItemAdded ? 'bg-green-500 text-white' : ''
        }`}
      >
        {isItemAdded ? 'Added To Cart' : 'Add To Cart'}
      </Button>
    </div>
  );
};

export default Items;
