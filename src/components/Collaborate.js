import { IoIosArrowRoundForward } from 'react-icons/io';
import Wrapper from './Wrapper';

const Collaborate = () => {
  return (
    <section className='mt-6'>
      <Wrapper>
        <div className=''>
          <div className='max-w-[480px] text-center mx-auto mb-3 pt-24 relative'>
            <h2 className='text-[#050038] text-3xl md:text-4xl lg:text-5xl font-bold leading-[56px]'>
              Collaborate without constraints
            </h2>
            <span className='absolute top-8 right-0 md:-right-12 rotate-6 bg-[#ffd02f] p-0.5 px-2 font-semibold rounded-md'>
              Your Idea Starts Here
            </span>
          </div>
          <div className='mb-10 lg:px-[10px] grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='p-5'>
              <h3 className='mb-[29px] text-[#050038] text-2xl font-bold leading-[28px]'>
                Free forever
              </h3>
              <p className='text-[#05003899] text-lg leading-[24px] font-helvetica'>
                Our free plan gives you unlimited team members, 3 boards, and
                300+ expert-made templates. Signing up with your work email lets
                you bring in your team faster. See our{' '}
                <span className='text-[#4262FF]'>pricing plans</span> for more
                features.
              </p>
            </div>
            <div className='p-5'>
              <h3 className='mb-[29px] text-[#050038] text-2xl font-bold leading-[28px]'>
                Easy integrations
              </h3>
              <p className='text-[#05003899] text-lg leading-[24px] font-helvetica'>
                Miro has 100+ powerful integrations with tools you already use
                like G Suite, Slack, and Jira, so your workflow is seamless.
                View the full list in our
                <span className='text-[#4262FF]'> Marketplace .</span>
              </p>
            </div>
            <div className='p-5'>
              <h3 className='mb-[29px] text-[#050038] text-2xl font-bold leading-[28px]'>
                Security first
              </h3>
              <p className='text-[#05003899] text-lg leading-[24px] font-helvetica'>
                We treat your data like you would — with the utmost care. We
                follow industry-leading security standards and give you tools to
                protect intellectual property. Learn more at our
                <span className='text-[#4262FF]'> Trust Center .</span>
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='group justify-center font-medium relative focus:z-10 focus:outline-none border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 focus:ring-2 flex flex-nowrap items-center gap-2 bg-[#4262FF] rounded-full px-[30px] py-[13px] text-white text-center duration-200'>
              <span className=''>Sign up free</span>
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Collaborate;
