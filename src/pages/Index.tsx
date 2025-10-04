import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SearchSection } from "@/components/SearchSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesDirectory } from "@/components/ServicesDirectory";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SearchSection />
      <FeaturesSection />
      <ServicesDirectory />
      <Footer />
    </div>
  );
};

export default Index;
