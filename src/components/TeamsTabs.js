'use client';

import { Tabs } from 'flowbite-react';
import TabContent from './TeamsTabsContent';

const TeamsTabs = () => {
  return (
    <section className='mt-12 md:mt-[120px]'>
      <div className='max-w-[1168px] px-4 md:px-6 mx-auto'>
        <div className='md:p-[30px]'>
          <div className='mb-8'>
            <h2 className='text-[#050038] text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[56px]'>
              Built for all kinds of teams
            </h2>
          </div>
          <div className='overflow-x-auto'>
            <Tabs aria-label='Full width tabs' style='fullWidth'>
              <Tabs.Item active title='UX & Design'>
                <TabContent />
              </Tabs.Item>
              <Tabs.Item title='Marketing'>
                <TabContent />
              </Tabs.Item>
              <Tabs.Item title='Product Management'>
                <TabContent />
              </Tabs.Item>
              <Tabs.Item title='Engineering'>
                <TabContent />
              </Tabs.Item>
              <Tabs.Item title='Consultants'>
                <TabContent />
              </Tabs.Item>
              <Tabs.Item title='Agile Coaches'>
                <TabContent />
              </Tabs.Item>
              <Tabs.Item title='Sales'>
                <TabContent />
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsTabs;
