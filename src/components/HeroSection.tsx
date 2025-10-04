import heroImage from "@/assets/hero-bg.jpg";
import { Download, MapPin, Edit, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-red-600/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">FillNFull</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your Complete Local Services Marketplace - All Services, One Platform!
          </p>
          <div className="text-lg text-white/80 mb-8">
            Post Views: <span className="font-bold text-white">40,418</span>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Download, title: "App", subtitle: "Download Now" },
            { icon: MapPin, title: "Local Search", subtitle: "Find Services" },
            { icon: Edit, title: "Post Here", subtitle: "Add Listing" },
            { icon: ShoppingCart, title: "Online Deals", subtitle: "Shop Now" },
          ].map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/25 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.subtitle}</p>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "On Demand Services",
              "Places",
              "Hire(or)Rent A to Z",
              "A to Z Services"
            ].map((service, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-white hover:bg-white/20 border border-white/30 h-auto py-3 px-4 text-sm md:text-base"
              >
                {service}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};