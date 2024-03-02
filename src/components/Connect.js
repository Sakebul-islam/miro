import integrations from '@/assets/content/integrations.png';
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Content = () => {
  return (
    <section className='pt-16 sm:pt-20 md:pt-[92px]'>
      <Wrapper>
        <div className='flex flex-col md:items-center md:flex-row'>
          <figure className='w-full md:w-2/4'>
            <Image
              src={integrations?.src}
              alt='figure'
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto md:px-10 cursor-pointer'
            />
          </figure>
          <div className='w-full md:w-2/4 md:ml-[115px]'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-[56px] mb-7 md:max-w-[345px]'>
              Connect your tools, close your tabs
            </h2>
            <p className='text-[#656284] text-lg leading-6 md:max-w-[455px] mb-[53px]'>
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom, Miro has 100+ integrations with tools you
              already use and love.
            </p>
            <Link
              href='#'
              className='flex flex-nowrap items-center gap-1 text-blue-500'
            >
              <span className='underline'>Learn more</span>
              <IoIosArrowRoundForward size={20} />
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Content;
