'use client';
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
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
  items: Props;
}

const ItemDetail = ({ items }: ItemProps) => {
  const { id } = useParams();
  const [isItemAdded, setIsItemAdded] = useState(false);
  const cartCtx = useContext(CartContext);
  console.log(id, 'id');
  console.log(items, 'items');
  const individualItem = items.find((item: Props) => item.id === parseInt(id));
  const addToCartHandler = () => {
    cartCtx.addItem(individualItem);
    setIsItemAdded(true);
    setTimeout(() => setIsItemAdded(false), 1000);
  };

  return (
    <div>
      <div className='px-8 py-12 gap-20 flex '>
        <Image
          src={individualItem.image}
          alt={individualItem.title}
          height={100}
          width={100}
          className='w-full'
        />
        <div className='flex flex-col gap-4'>
          <h2 className='h2-bold mb-8 leading-snug'>
            {individualItem.title.slice(0, 20)}
          </h2>
          <p className='h3-semibold'>{`$${individualItem.price}`}</p>
          <p className='base-medium w-[60%] text-neutral-500'>
            {individualItem.description}
          </p>
          <Button
            onClick={addToCartHandler}
            className={`my-4 w-[20%] bg-black text-neutral-100 hover:bg-neutral-800 transition duration-500 ease-in-out ${
              isItemAdded ? 'bg-green-500 hover:bg-green-500 text-white' : ''
            }`}
          >
            {isItemAdded ? 'Added To Cart' : 'Add To Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
