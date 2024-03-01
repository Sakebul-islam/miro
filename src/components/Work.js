import hybridwork from '@/assets/work/hybridwork.png';
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Work = () => {
  return (
    <section className='mt-16 sm:mt-20 md:mt-[92px]'>
      <Wrapper>
        <div className='flex flex-col md:items-center md:flex-row gap-5'>
          <div className='flex-1'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-[56px] mb-4'>
              Work together, wherever you work
            </h2>
            <p className='text-[#656284] text-lg leading-6 md:max-w-[455px] mb-10'>
              In the office, remote, or a mix of the two, with Miro, your team
              can connect, collaborate, and co-create in one space no matter
              where you are.
            </p>
            <Link
              href='#'
              className='flex flex-nowrap items-center gap-1 text-blue-500'
            >
              <span className='underline'>Learn more</span>
              <IoIosArrowRoundForward size={20} />
            </Link>
          </div>
          <figure className='flex-1'>
            <Image
              src={hybridwork?.src}
              alt='figure'
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto md:px-10 cursor-pointer'
            />
          </figure>
        </div>
      </Wrapper>
    </section>
  );
};

export default Work;
