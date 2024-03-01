'use client';

import { Button, Navbar } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

import { CiGlobe } from 'react-icons/ci';
import { IoIosArrowRoundForward } from 'react-icons/io';

import logo from '../assets/logo.svg';

function Header() {
  return (
    <Navbar fluid rounded className=''>
      {/* <Navbar.Brand href='https://flowbite-react.com'>
        <Image
          src={logo?.src}
          width={logo?.width}
          height={logo?.height}
          alt='miro'
        />
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Navbar.Toggle className='' />
      </div>
      <Navbar.Collapse className='justify-between'>
        <Navbar.Link as='div'>
          <Dropdown label='Product' inline>
            <Dropdown.Item>
              <Link href='#'>Product-1</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Product-2</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Product-3</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Product-4</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Product-5</Link>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <Dropdown label='Solutions' inline>
            <Dropdown.Item>
              <Link href='#'>Solution-1</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Solution-2</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Solution-3</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Solution-4</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Solution-5</Link>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <Dropdown label='Resources' inline>
            <Dropdown.Item>
              <Link href='#'>Resource-1</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Resource-2</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Resource-3</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Resource-4</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href='#'>Resource-5</Link>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <Link href='#'>Enterprise</Link>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <Link href='#'>Pricing</Link>
        </Navbar.Link>
        <ul className='flex justify-between md:justify-end flex-nowrap items-center gap-6'>
          <li className='flex flex-nowrap items-center gap-2'>
            <CiGlobe />
            <span className='uppercase'>en</span>
          </li>
          <li>
            <Link href='#'>Contact Sales</Link>
          </li>
          <li>
            <Link href='#'>Login</Link>
          </li>
          <li className='flex flex-nowrap items-center gap-2 bg-blue-600 rounded-full px-[16px] py-[13px] text-white'>
            <span className=''>Sign up free</span>
            <IoIosArrowRoundForward size={20} />
          </li>
        </ul>
      </Navbar.Collapse> */}
    </Navbar>
  );
}

export default Header;
