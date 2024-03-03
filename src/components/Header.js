'use client';

import { Dropdown, DropdownItem } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

import { RxCross2 } from 'react-icons/rx';
import { FiMenu } from 'react-icons/fi';

import logo from '../assets/logo.svg';
import MenuRight from './MenuRight';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='py-5'>
      <div className='max-w-[1428px] px-4 md:px-6 mx-auto'>
        <div className='flex items-center justify-between'>
          <nav className='flex items-center gap-6 relative'>
            <Link href='#'>
              <Image
                src={logo?.src}
                width={logo?.width}
                height={logo?.height}
                alt='miro'
              />
            </Link>
            <menu
              className={`
              ${isOpen ? '' : 'hidden'}
              absolute xl:static top-[45px] left-0 w-[calc(100vw-32px)] md:w-[calc(100vw-48px)] xl:w-auto xl:flex gap-5 text-[#050038] text-balance leading-6 font-helvetica pt-4 xl:pt-0 z-50 bg-white h-screen xl:h-auto`}
            >
              <li className='border-t border-b xl:border-none p-2'>
                <Dropdown label='Product' inline>
                  <DropdownItem as='div'>
                    <Link href='#'>Product-1</Link>
                  </DropdownItem>
                  <DropdownItem as='div'>
                    <Link href='#'>Product-2</Link>
                  </DropdownItem>
                  <DropdownItem as='div'>
                    <Link href='#'>Product-3</Link>
                  </DropdownItem>
                </Dropdown>
              </li>
              <li className='border-b xl:border-none p-2'>
                <Dropdown label='Solutions' inline>
                  <DropdownItem as='div'>
                    <Link href='#'>Solutions-1</Link>
                  </DropdownItem>
                  <DropdownItem as='div'>
                    <Link href='#'>Solutions-2</Link>
                  </DropdownItem>
                  <DropdownItem as='div'>
                    <Link href='#'>Solutions-3</Link>
                  </DropdownItem>
                </Dropdown>
              </li>
              <li className='border-b xl:border-none p-2'>
                <Dropdown label='Resources' inline>
                  <DropdownItem as='div'>
                    <Link href='#'>Resources-1</Link>
                  </DropdownItem>
                  <DropdownItem as='div'>
                    <Link href='#'>Resources-2</Link>
                  </DropdownItem>
                  <DropdownItem as='div'>
                    <Link href='#'>Resources-3</Link>
                  </DropdownItem>
                </Dropdown>
              </li>
              <li className='border-b xl:border-none p-2'>
                <Link href='#'>Enterprise</Link>
              </li>
              <li className='border-b xl:border-none p-2'>
                <Link href='#'>Pricing</Link>
              </li>
              <MenuRight className='xl:hidden' />
            </menu>
          </nav>
          <div
            className='cursor-pointer xl:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 size={30} /> : <FiMenu size={30} />}
          </div>
          <MenuRight className='hidden xl:flex' />
        </div>
      </div>
    </header>
  );
};
export default Header;
