import React from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const GlobalSearch = () => {
  return (
    <div className='relative flex w-full max-w-[600px] items-center rounded-3xl bg-neutral-100 px-4 '>
      <Image
        src='/assets/icons/search-alt-svgrepo-com.svg'
        alt='search'
        width={24}
        height={24}
      />
      <Input
        type='text'
        placeholder='Search for products...'
        className='no-focus placeholder:body-regular border-none bg-transparent placeholder:text-light-400'
      />
    </div>
  );
};

export default GlobalSearch;
