import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import IndustriesSection from "@/components/industries-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="font-inter bg-slate-50 text-slate-800">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
