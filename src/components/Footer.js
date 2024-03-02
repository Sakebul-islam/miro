import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareYoutube,
} from 'react-icons/fa6';
import { IoRemoveOutline } from 'react-icons/io5';

import bgIcon from '@/assets/footer/bg.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#02033B] py-16 md:py-[96px]'>
      <div className='max-w-[1104px] px-4 md:px-6 mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[60px]'>
          <div className=''>
            <div className='flex flex-col md:flex-row gap-[24px]'>
              <div className=''>
                <h4 className='text-white text-[23px] font-extrabold leading-[30px] mb-[49px]'>
                  Scan. Detect. Remove.
                </h4>
                <div className='flex flex-nowrap gap-[39px] pb-9 mb-3'>
                  <FaSquareTwitter color='#fff' size={36} />
                  <FaSquareFacebook color='#fff' size={36} />
                  <span className=''>
                    <FaSquareYoutube color='#fff' size={36} />
                  </span>
                </div>
                <div className='pt-[4px] pr-[149.438px] pb-[13px] mb-9 flex flex-nowrap gap-[25.56px] text-white text-[11px] leading-[15px]'>
                  <Link
                    href='#'
                    className='underline inline-block whitespace-nowrap'
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href='#'
                    className='underline inline-block whitespace-nowrap'
                  >
                    Terms of Service
                  </Link>
                </div>
                <p className='mb-[18px] text-[11px] leading-[15px] text-white'>
                  Copyright © 2022 Certo Software Limited | Registered in
                  England & Wales No. 10072356
                </p>
                <p className='text-[11px] leading-[15px] text-white'>
                  Designed & developed by Bigger Picture
                </p>
              </div>
              <div className='w-full lg:min-w-[188px] lg:max-w-[188px]'>
                <h2 className='mb-[60px] pb-[25px] pr-[89px] text-[35px] leading-[45px] font-bold border-b text-white inline-block'>
                  Miro.
                </h2>
                <ul className='text-[#FFC247] text-[19px] font-extrabold leading-[25px] flex flex-col gap-6'>
                  <li className='flex justify-start items-center gap-6'>
                    <IoRemoveOutline />
                    <Link href='$'>iPhone</Link>
                  </li>
                  <li className='flex justify-start items-center gap-6'>
                    <IoRemoveOutline />
                    <Link href='$'>Android</Link>
                  </li>
                  <li className='flex justify-start items-center gap-6'>
                    <IoRemoveOutline />
                    <Link href='$'>Help</Link>
                  </li>
                  <li className='flex justify-start items-center gap-6'>
                    <IoRemoveOutline />
                    <Link href='$'>About</Link>
                  </li>
                  <li className='flex justify-start items-center gap-6'>
                    <IoRemoveOutline />
                    <Link href='$'>Insights</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div
              className='w-full md:min-w-[436px] md:max-w-[436px] rounded-[42px] bg-[#ffc247] p-9'
              style={{
                backgroundImage: `url(${bgIcon?.src})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <h4 className='text-[#02033B] text-[23px] font-bold leading-[30px] mb-[21px]'>
                Sign up to our newsletter
              </h4>
              <p className='text-[#02033B] text-[15px] leading-[20px] mb-[21px]'>
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>
              <form className='mt-9'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email address'
                  className='ring-0 border-0 rounded-[21px] sm:rounded-r-none pt-[8px] pr-[16px] pb-[8.391px] pl-[16px] w-full sm:w-auto inline-block mb-3 sm:mb-0'
                />
                <button className='bg-[#02033B] pt-[8px] pr-[27.034px] pb-[8.391px] pl-[27.234px] text-white focus:ring-blue-500 hover:bg-cyan-800 duration-200 w-full sm:w-auto rounded-[21px] sm:rounded-l-none'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className='text-white text-[12px] leading-[15px] max-w-[550px] mt-[80px]'>
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
