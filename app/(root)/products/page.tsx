import { getItems } from '@/lib/getItems';
import React from 'react';
import Items from '@/components/items/Items';

const page = async () => {
  const items = await getItems();
  return (
    <div className='grid grid-cols-3 gap-x-6 gap-y-12 px-8 py-16 max-sm:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-8'>
      {items.map((item: any) => (
        <Items key={item.id} item={item} />
      ))}
    </div>
  );
};

export default page;
