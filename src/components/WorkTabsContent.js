import Image from 'next/image';

import figure from '@/assets/teams/teams.png';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import icon1 from '@/assets/teams/scatch.svg';
import icon2 from '@/assets/teams/xd.svg';
import icon3 from '@/assets/teams/figma.svg';
import icon4 from '@/assets/teams/notion.svg';
const WorkTabsContent = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 md:gap-0'>
      <div className='w-full md:max-w-[360px] pt-[30px] pr-[40px] pl-3'>
        <h4 className='text-[#050038] font-helvetica text-lg leading-[24px] mb-[26px]'>
          Brainstorming
        </h4>
        <p className='my-1 text-[#050038B2] font-helvetica text-lg leading-[24px] mb-[35px]'>
          Unleash creative ideas and build on them with the help of sticky
          notes, images, mind maps, videos, drawing capabilities — the list goes
          on.
        </p>
        <Link
          href='#'
          className='flex flex-nowrap items-center gap-1 text-blue-500'
        >
          <span className='underline'>Learn more</span>
          <IoIosArrowRoundForward size={20} />
        </Link>
      </div>
      <figure className='w-full'>
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
  );
};

export default WorkTabsContent;
