'use client';

import { Tabs } from 'flowbite-react';
import Wrapper from './Wrapper';
import TabContent from './TabContent';

const WorkTabs = () => {
  return (
    <section className='mt-12 md:mt-[60px]'>
      <div className='max-w-[1168px] px-4 md:px-6 mx-auto'>
        <div className='mb-8'>
          <h2 className='text-[#050038] text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[56px]'>
            Built for the way you work
          </h2>
        </div>
        <div className='overflow-x-auto'>
          <Tabs aria-label='Full width tabs' style='fullWidth'>
            <Tabs.Item active title='Brainstorming'>
              <TabContent />
            </Tabs.Item>
            <Tabs.Item title='Diagramming'>
              <TabContent />
            </Tabs.Item>
            <Tabs.Item title='Meetings & Workshops'>
              <TabContent />
            </Tabs.Item>
            <Tabs.Item title='Scrum Events'>
              <TabContent />
            </Tabs.Item>
            <Tabs.Item title='Mapping'>
              <TabContent />
            </Tabs.Item>
            <Tabs.Item title='Research & Design'>
              <TabContent />
            </Tabs.Item>
            <Tabs.Item title='Strategic Planning'>
              <TabContent />
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default WorkTabs;
