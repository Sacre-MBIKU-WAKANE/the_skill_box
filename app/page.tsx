import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import PartnersBar from "./components/PartnersBar";
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
        <YouTubeSection />
        <AcceleratorSection />
        <ProgramsSection />
        <ArticlesSection />
        <CTABanner />
        <EventsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
