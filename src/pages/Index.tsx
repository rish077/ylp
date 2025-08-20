import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LawForHerSection from "@/components/LawForHerSection";
import LawStudentsSection from "@/components/LawStudentsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LawForHerSection />
      <LawStudentsSection />
      <WhyChooseUsSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
