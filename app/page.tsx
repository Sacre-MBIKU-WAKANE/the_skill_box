import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import PartnersBar from "./components/PartnersBar";
import EcosystemSection from "./components/EcosystemSection";
import CoworkingSection from "./components/CoworkingSection";
import ProductsSection from "./components/ProductsSection";
import SiliconValleySection from "./components/SiliconValleySection";
import YouTubeSection from "./components/YouTubeSection";
import AcceleratorSection from "./components/AcceleratorSection";
import ProgramsSection from "./components/ProgramsSection";
import ArticlesSection from "./components/ArticlesSection";
import CTABanner from "./components/CTABanner";
import EventsSection from "./components/EventsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <PartnersBar />
        <EcosystemSection />
        <SiliconValleySection />
        <CoworkingSection />
        <ProductsSection />
        <AcceleratorSection />
        <EventsSection />
        <TestimonialsSection />
        {/* <YouTubeSection />
        <ProgramsSection />
        <ArticlesSection />
        <CTABanner />
        <NewsletterSection /> */}
      </main>
      <Footer />
    </>
  );
}
