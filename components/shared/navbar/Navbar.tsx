import React from 'react';
import { NavbarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import GlobalSearch from '../search/GlobalSearch';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className='m-auto flex items-center justify-between px-8 py-4'>
      <div className='flex items-center gap-3'>
        <MobileNav />
        <Link href='/'>
          <h1 className='h1-bold font-poppins uppercase max-sm:text-[25px] '>
            shop.co
          </h1>
        </Link>
      </div>

      <ul className='flex gap-8 max-sm:hidden'>
        {NavbarLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.route}
              className='paragraph-regular transition duration-150 hover:text-neutral-300'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <GlobalSearch />
      <div className='flex items-center'>
        <Button className='sm:hidden'>
          <Image
            src='/assets/icons/search-alt-svgrepo-com-mobile.svg'
            alt='search'
            width={24}
            height={24}
          />
        </Button>

        <Link
          href='/cart'
          className='transition duration-150 hover:stroke-neutral-300'
        >
          <Image
            src='/assets/icons/cart-shopping-svgrepo-com.svg'
            width={24}
            height={24}
            alt='cart'
            className='hover:stroke-neutral-300'
          />
        </Link>
        <span className='subtle-regular relative bottom-3 right-3 rounded-[100%] bg-primary-500 px-2 py-1 font-bold'>
          0
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
