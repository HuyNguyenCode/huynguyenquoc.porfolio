import Head from 'next/head';
import dynamic from 'next/dynamic';
import HomeSection from '@/components/HomeSection';
import ServicesSection from '@/components/ServiceSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Huy Nguyen's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="toast"></div>
      <Header />
      <main>
        <HomeSection />
        <ServicesSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
