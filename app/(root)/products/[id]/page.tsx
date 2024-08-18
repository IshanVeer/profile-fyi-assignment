import React from 'react';
import { getItems } from '@/lib/getItems';
import ItemDetail from '@/components/items/ItemDetail';

const page = async () => {
  const items = await getItems();

  return <ItemDetail items={items} />;
};

export default page;
