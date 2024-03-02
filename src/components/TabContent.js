import Image from 'next/image';

import figure from '@/assets/teams/teams.png';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import icon1 from '@/assets/teams/scatch.svg';
import icon2 from '@/assets/teams/xd.svg';
import icon3 from '@/assets/teams/figma.svg';
import icon4 from '@/assets/teams/notion.svg';
const TabContent = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 md:gap-0'>
      <div className='w-full md:max-w-[360px] pt-[30px] pr-[40px] pl-3'>
        <ul className='mb-[34px] space-y-[17px]'>
          <li className='flex flex-nowrap gap-[14px]'>
            <span className='w-[24px] h-[25px] flex place-content-center'>
              ✔
            </span>
            <span className='text-[#05003899] text-lg leading-[24px] font-helvetica inline-block'>
              Build low-fi wireframes
            </span>
          </li>
          <li className='flex flex-nowrap gap-[14px]'>
            <span className='w-[24px] h-[25px] flex place-content-center'>
              ✔
            </span>
            <span className='text-[#05003899] text-lg leading-[24px] font-helvetica inline-block'>
              Involve stakeholders in the design process
            </span>
          </li>
          <li className='flex flex-nowrap gap-[14px]'>
            <span className='w-[24px] h-[25px] flex place-content-center'>
              ✔
            </span>
            <span className='text-[#05003899] text-lg leading-[24px] font-helvetica inline-block'>
              Run engaging design workshops
            </span>
          </li>
        </ul>
        <Link
          href='#'
          className='flex flex-nowrap items-center gap-1 text-blue-500 mb-[70px]'
        >
          <span className='underline'>Learn more</span>
          <IoIosArrowRoundForward size={20} />
        </Link>
        <div className=''>
          <p className='text-[#05003899] font-helvetica text-lg leading-[24px] mb-[13.61px]'>
            Integrate your favorite tools
          </p>
          <div className='h-[44.78px] flex flex-nowrap items-center gap-[32px]'>
            <Image
              src={icon1?.src}
              alt='figure'
              width={icon1?.width}
              height={icon1?.height}
            />
            <Image
              src={icon2?.src}
              alt='figure'
              width={icon2?.width}
              height={icon2?.height}
            />
            <Image
              src={icon3?.src}
              alt='figure'
              width={icon3?.width}
              height={icon3?.height}
            />
            <Image
              src={icon4?.src}
              alt='figure'
              width={icon4?.width}
              height={icon4?.height}
            />
          </div>
        </div>
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

export default TabContent;
