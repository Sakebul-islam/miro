'use client';

import { Tabs } from 'flowbite-react';
import WorkTabsContent from './WorkTabsContent';

const WorkTabs = () => {
  return (
    <section className='pt-12 md:pt-[60px]'>
      <div className='max-w-[1168px] px-4 md:px-6 mx-auto'>
        <div className='md:p-[30px]'>
          <div className='mb-8'>
            <h2 className='text-[#050038] text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[56px]'>
              Built for the way you work
            </h2>
          </div>
          <div className='overflow-x-auto'>
            <Tabs aria-label='Full width tabs' style='fullWidth'>
              <Tabs.Item active title='Brainstorming'>
                <WorkTabsContent />
              </Tabs.Item>
              <Tabs.Item title='Diagramming'>
                <WorkTabsContent />
              </Tabs.Item>
              <Tabs.Item title='Meetings & Workshops'>
                <WorkTabsContent />
              </Tabs.Item>
              <Tabs.Item title='Scrum Events'>
                <WorkTabsContent />
              </Tabs.Item>
              <Tabs.Item title='Mapping'>
                <WorkTabsContent />
              </Tabs.Item>
              <Tabs.Item title='Research & Design'>
                <WorkTabsContent />
              </Tabs.Item>
              <Tabs.Item title='Strategic Planning'>
                <WorkTabsContent />
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTabs;
