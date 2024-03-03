import Link from 'next/link';
import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { IoIosArrowRoundForward } from 'react-icons/io';

const MenuRight = ({ className }) => {
  return (
    <ul
      className={`flex flex-col sm:flex-row justify-between md:justify-end flex-nowrap items-center gap-3 xl:gap-6 py-4 xl:py-0 ${className}`}
    >
      <ul className='flex justify-between gap-6'>
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
      </ul>
      <li className='flex flex-nowrap items-center gap-2 bg-blue-600 rounded-full px-[16px] py-[13px] text-white'>
        <span className=''>Sign up free</span>
        <IoIosArrowRoundForward size={20} />
      </li>
    </ul>
  );
};

export default MenuRight;
