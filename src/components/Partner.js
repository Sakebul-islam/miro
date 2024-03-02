import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import cisco from '@/assets/partner/cisco.svg';
import deloitte from '@/assets/partner/deloitte.svg';
import okta from '@/assets/partner/okta.svg';
import volvo from '@/assets/partner/volvo.svg';
import Walmart from '@/assets/partner/Walmart.svg';

const Partner = () => {
  const images = [cisco, deloitte, okta, volvo, Walmart];

  return (
    <section className='py-[60px]'>
      <div className='max-w-[1168px] px-4 md:px-6 mx-auto'>
        <div className=''>
          <p className='text-[#05003899] text-lg leading-[24px] text-center mb-12'>
            Trusted by 45M+ users
          </p>
          <Marquee className='gap-10 pb-[28px]' pauseOnHover='true'>
            {images.map((img, ind) => (
              <div
                className='w-[224px] h-[64px] flex place-content-center'
                key={ind}
              >
                <Image
                  src={img?.src}
                  alt='figure'
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto md:px-10 cursor-pointer'
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partner;
