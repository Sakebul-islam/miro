import Image from 'next/image';
import React from 'react';

const TeamCard = ({ team }) => {
  return (
    <div className='p-5 sm:p-[36px] flex flex-col'>
      <figure className='w-full mb-[34.3px]'>
        <Image
          src={team?.photoURL?.src}
          alt='figure'
          width={team?.photoURL?.width}
          height={team?.photoURL?.height}
          layout='fixed'
        />
      </figure>
      <p className='grow'>&ldquo;{team?.description}&rdquo;</p>

      <div className='mt-[50px] flex flex-row gap-4'>
        <Image
          src={team?.author?.photoURL?.src}
          alt='figure'
          width={48}
          height={48}
          layout='fixed'
          className='rounded-full w-[48px] h-[48px]'
        />
        <div className=''>
          <span className='block text-[#05003899] text-sm font-helvetica leading-5 '>
            {team?.author?.name}
          </span>
          <span className='block text-[#05003899] text-sm font-helvetica leading-5 mb-[9px]'>
            {team?.author?.designation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
