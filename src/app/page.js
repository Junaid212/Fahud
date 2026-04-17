import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import Benefits from '@/components/Benefits';
import AboutSection from '@/components/AboutSection';
import VideoSection from '@/components/VideoSection';
import ServicesSection from '@/components/ServicesSection';
import PrioritySection from '@/components/PrioritySection';
import ClientLogoSection from '@/components/ClientLogoSection';
import AwardsSection from '@/components/AwardsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
// import TestimonialsSection from '@/components/TestimonialsSection';
import GetInTouchSection from '@/components/GetInTouchSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home2/HeroSection';
import ProductHero from '@/components/home2/ProductHero';
import HeroScrollSequence from '@/components/home2/HeroScrollSequence';
import WhatWeDoSection from '@/components/home2/WhatWeDoSection';
import AboutInfoSection from '@/components/AboutInfoSection';
import CounterSection from '@/components/home2/CounterSection';
import TestimonialsSection from '@/components/home2/TestimonialsSection';
import AboutSectionNew from '@/components/AboutSectionNew';
import ArcCarousel from '@/components/ArcCrousel';
import ClientsSlider from '@/components/ClientsSlider';
import FooterNew from '@/components/FooterNew';

export default function Home() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          {/* <HeroScrollSequence /> */}
          <ProductHero />
          <AboutSectionNew />
          
          {/* <HeroSection /> */}
          {/* <HeroSlider /> */}
          {/* <Benefits /> */}
          {/* <AboutSection /> */}
          {/* <VideoSection /> */}
          {/* <WhatWeDoSection /> */}
          <AboutInfoSection />
          {/* <CounterSection /> */}
          {/* <ServicesSection /> */}
          {/* <PrioritySection /> */}
          
          
          {/* <AwardsSection /> */}
          <ProjectsSection />
          <Benefits />
          <TestimonialsSection />
          <ClientsSlider/>
          {/* <ArcCarousel/> */}
          {/* <ClientLogoSection /> */}
          {/* <TeamSection /> */}
          {/* <TestimonialsSection /> */}
          {/* <GetInTouchSection /> */}
          {/* <NewsSection /> */}
        </div>
        <FooterNew/>
        {/* <Footer /> */}
      </div>
    </>
  );
}
