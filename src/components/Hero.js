import React from 'react';
import Wrapper from './Wrapper';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { PiStarFill, PiStarHalfFill } from 'react-icons/pi';
import Image from 'next/image';

import icon1 from '@/assets/hero/icon-1.svg';
import icon2 from '@/assets/hero/icon-2.svg';
import icon3 from '@/assets/hero/icon-3.svg';
import figure from '@/assets/hero/figure.png';

const Hero = () => {
  return (
    <section className='py-[30px] md:py-[60px]'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row gap-[60px]'>
          <div className='w-full lg:max-w-[440px]'>
            <div className='mb-8'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[56px] mb-4'>
                Take ideas from better to best
              </h2>
              <p className='font-helvetica text-[#050038B8] text-sm'>
                Miro is your team&apos;s visual platform to connect,
                collaborate, and create — together.
              </p>
            </div>
            <form className='mb-[7px]'>
              <input
                type='email'
                name='email'
                placeholder='Enter your work email'
                className='w-full border border-[#9B99AF] pt-[11.5px] pr-[41px] pb-[14.5px] pl-[25px] text-lg leading-[22px] mb-[10px] rounded-full'
              />
              <button className='group justify-center p-0.5 font-medium relative focus:z-10 focus:outline-none border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 focus:ring-2 flex flex-nowrap items-center gap-2 bg-[#4262FF] rounded-full px-[16px] py-[13px] text-white w-full text-center duration-200'>
                <span className=''>Sign up free</span>
                <IoIosArrowRoundForward size={20} />
              </button>
            </form>
            <div className='sm:inline-block'>
              <p className='text-[#05003866] font-helvetica leading-5 text-sm mb-10'>
                Collaborate with your team within minutes
              </p>
              <div className='bg-[#F5F5F7] p-[14px] rounded-lg flex flex-col sm:flex-row flex-nowrap gap-3 md:gap-7'>
                <div className=''>
                  <div className='flex flex-nowrap gap-[6px] mb-[2px]'>
                    <PiStarFill color='#FF9D48' />
                    <PiStarFill color='#FF9D48' />
                    <PiStarFill color='#FF9D48' />
                    <PiStarFill color='#FF9D48' />
                    <PiStarHalfFill color='#FF9D48' />
                  </div>
                  <p className='text-[#050038] text-[11px] font-helvetica leading-[15px]'>
                    Based on 5149+ reviews:
                  </p>
                </div>
                <div className='flex flex-nowrap gap-3 px-[14.33]'>
                  <Image
                    src={icon1?.src}
                    alt='icon-1'
                    width={icon1?.width}
                    height={icon1?.height}
                    // sizes='100vw'
                    // className='w-full h-auto'
                  />
                  <Image
                    src={icon2?.src}
                    alt='icon-2'
                    width={icon2?.width}
                    height={icon2?.height}
                    // sizes='100vw'
                    // className='w-full h-auto'
                  />
                  <Image
                    src={icon3?.src}
                    alt='icon-3'
                    width={icon3?.width}
                    height={icon3?.height}
                    // sizes='100vw'
                    // className='w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </div>

          <figure className='flex-1'>
            <Image
              src={figure?.src}
              alt='figure'
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto'
            />
          </figure>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
