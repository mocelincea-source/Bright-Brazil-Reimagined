import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import FoundersSection from "@/components/FoundersSection";
import ESGSection from "@/components/ESGSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <FoundersSection />
      <ESGSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
