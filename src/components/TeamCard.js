import Image from 'next/image';
import React from 'react';

const TeamCard = ({ team }) => {
  console.log(team);
  return (
    <div className='p-[36px]'>
      <figure className='w-full'>
        <Image
          src={team?.photoURL?.src}
          alt='figure'
          width={team?.photoURL?.width}
          height={team?.photoURL?.height}
          layout='fixed'
        />
      </figure>
      <div className=''></div>
    </div>
  );
};

export default TeamCard;
