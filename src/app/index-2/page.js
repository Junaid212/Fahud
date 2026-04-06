import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home2/HeroSection';
import CategoryCarousel from '@/components/home2/CategoryCarousel';
import AboutSection from '@/components/home2/AboutSection';
import CounterSection from '@/components/home2/CounterSection';
import ServicesSection from '@/components/home2/ServicesSection';
import WhatWeDoSection from '@/components/home2/WhatWeDoSection';
import VideoSection from '@/components/home2/VideoSection';
import ProjectsSection from '@/components/home2/ProjectsSection1';
import TestimonialsSection from '@/components/home2/TestimonialsSection';
import TeamSection from '@/components/home2/TeamSection';
import ClientLogosSection from '@/components/home2/ClientLogosSection';
import ValuesSection from '@/components/home2/ValuesSection';
import BlogSection from '@/components/home2/BlogSection';
import PricingSection from '@/components/home2/PricingSection';
import FaqSection from '@/components/home2/FaqSection';
import ProjectsSection1 from '@/components/home2/ProjectsSection1';

export const metadata = {
    title: 'Home 2 - Fahud Architecture & Interior Design',
    description: 'Maker of Extremely Exquisite Designs',
};

export default function Home2Page() {
    return (
        <>
            <Header />

            <div className="page-content">
                <HeroSection />
                <CategoryCarousel />
                <AboutSection />
                <CounterSection />
                <ServicesSection />
                <WhatWeDoSection />
                <VideoSection />
                <ProjectsSection1 />
                <TestimonialsSection />
                <TeamSection />
                <ClientLogosSection />
                <ValuesSection />
                <BlogSection />
                <PricingSection />
                <FaqSection />
            </div>

            <Footer />
        </>
    );
}