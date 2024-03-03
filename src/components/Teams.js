import React from 'react';
import Wrapper from './Wrapper';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import TeamCard from './TeamCard';

import photo1 from '@/assets/teams/icon-1.svg';
import photo2 from '@/assets/teams/icon-2.svg';
import photo3 from '@/assets/teams/icon-3.svg';
import author1 from '@/assets/teams/human-1.png';
import author2 from '@/assets/teams/human-2.png';
import author3 from '@/assets/teams/human-3.png';

const teams = [
  {
    id: 1,
    photoURL: photo1,
    description:
      '“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”',
    author: {
      photoURL: author1,
      name: 'Roxanne Mustafa',
      designation: 'Description of the first author',
    },
  },
  {
    id: 2,
    photoURL: photo2,
    description:
      '“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”',
    author: {
      photoURL: author2,
      name: 'Jane Ashley',
      designation: 'Description of the second author',
    },
  },
  {
    id: 3,
    photoURL: photo3,
    description:
      '“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”',
    author: {
      photoURL: author3,
      name: 'Laura Baird',
      designation: 'Description of the third author',
    },
  },
];

const Teams = () => {
  return (
    <section className='py-24 md:pt-[120px] md:pb-[100px]'>
      <Wrapper>
        <div className=''>
          <div className='mb-10'>
            <h2 className='text-[#050038] text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[56px] text-center mb-6'>
              Loved by the world's best teams
            </h2>
            <div className='text-center flex flex-nowrap items-center justify-center'>
              <Link
                href='#'
                className='flex flex-nowrap items-center justify-center gap-1 text-blue-500 py-2 px-4 md:pt-[10px] md:pr-[31.688px] md:pb-[14px] md:pl-[35px] border border-[#4262FF] rounded-full hover:bg-blue-500 duration-200 hover:text-white'
              >
                <span className=''>See all customer stories</span>
                <IoIosArrowRoundForward size={20} />
              </Link>
            </div>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 md:px-[10px] gap-5'>
            {teams?.map((team) => (
              <TeamCard key={team?.id} team={team} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Teams;
