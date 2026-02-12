import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertyTypesCarousel from "@/components/PropertyTypesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <PropertyTypesCarousel />
      <TestimonialsSection />
      <FAQSection />
      <SEOContent />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Index;
