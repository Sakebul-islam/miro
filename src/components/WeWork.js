import Image from 'next/image';

import work from '@/assets/WeWork/work.png';
import { IoIosArrowRoundForward } from 'react-icons/io';

const WeWork = () => {
  return (
    <section className='mt-10 md:mt-[60px]'>
      <div className='max-w-[1018px] px-4 md:px-6 mx-auto'>
        <figure className='w-full h-[350px] sm:h-auto relative'>
          <Image
            src={work?.src}
            alt='figure'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
          />
          <div
            className='absolute min-w-[100%] md:min-w-[411px] max-w-[411px] text-center top-3/4 sm:top-2/4 -translate-y-2/4 
          
          
          md:right-10 md:-translate-x-10'
          >
            <h3 className='text-[#050038] text-[22px] font-bold leading-[38px]'>
              The Ways We Work
            </h3>
            <p className='py-2 text-[#050038] text-lg leading-[24px]'>
              How has our relationship with work changed?
            </p>
            <div className='flex justify-center'>
              <button className='group justify-center font-medium relative focus:z-10 focus:outline-none border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 focus:ring-2 flex flex-nowrap items-center gap-2 bg-[#4262FF] rounded-full px-[30px] py-[13px] text-white text-center duration-200'>
                <span className=''>View the report</span>
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default WeWork;
