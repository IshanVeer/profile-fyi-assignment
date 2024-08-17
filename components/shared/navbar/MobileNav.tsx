import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { NavbarLinks } from '@/constants';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className='sm:hidden'>
        <Image
          src='/assets/icons/hamburger-menu-svgrepo-com.svg'
          alt='menu'
          width={30}
          height={30}
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='background-light800_dark400 border-none'
      >
        <ul className='mt-20 flex flex-col gap-6'>
          {NavbarLinks.map((link) => (
            <li key={link.label}>
              <SheetClose asChild>
                <Link
                  href={link.route}
                  className='h3-semibold transition duration-150 hover:text-neutral-300'
                >
                  {link.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
