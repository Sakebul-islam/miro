import Collaborate from '@/components/Collaborate';
import Hero from '@/components/Hero';
import Partner from '@/components/Partner';
import Work from '@/components/Work';
import Connect from '@/components/Connect';
import WeWork from '@/components/WeWork';
import WorkTabs from '@/components/WorkTabs';
import Teams from '@/components/Teams';
import TeamsTabs from '@/components/TeamsTabs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Partner />
      <Collaborate />
      <Work />
      <Connect />
      <WeWork />
      <WorkTabs />
      <TeamsTabs />
      <Teams />
      <Footer />
    </main>
  );
}
