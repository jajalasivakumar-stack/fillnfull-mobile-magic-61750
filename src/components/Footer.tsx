import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">FillNFull</h3>
            <p className="text-gray-400">
              Your complete local services marketplace. Connect with services in your area, faster and better.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Local Search",
                "Post Listing",
                "Online Deals",
                "Watch Videos",
                "Earn Points",
                "Become Agent"
              ].map((link) => (
                <li key={link}>
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal justify-start">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Services</h4>
            <ul className="space-y-2">
              {[
                "Food Delivery",
                "Home Services",
                "Transportation",
                "Real Estate",
                "Education",
                "Healthcare"
              ].map((service) => (
                <li key={service}>
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal justify-start">
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>support@fillnfull.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Your City, Country</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Subscribe to Updates</h5>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 FillNFull - Your Local Services Marketplace. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal">
              Terms of Service
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-normal">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};