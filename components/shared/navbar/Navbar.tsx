import React from 'react';
import { NavbarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import GlobalSearch from '../search/GlobalSearch';

const Navbar = () => {
  return (
    <nav className='m-auto flex items-center justify-between px-8 py-4'>
      <Link href='/'>
        <h1 className='h1-bold font-poppins uppercase '>shop.co</h1>
      </Link>
      <ul className='flex gap-8'>
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
    </nav>
  );
};

export default Navbar;
