import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart, MessageCircle, Award, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "My Total Points", icon: Award },
    { name: "Partial Earnings", icon: Gift },
    { name: "All Notifications", icon: MessageCircle },
    { name: "Your Submissions", icon: User },
    { name: "Messages", icon: MessageCircle },
    { name: "Listings", icon: Search },
    { name: "Shop", icon: ShoppingCart },
    { name: "See Winners", icon: Award },
    { name: "Rewards Pool", icon: Gift },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-600 text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-foreground">
              FillNFull
            </div>
          </div>

          {/* Desktop Search */}
          {!isMobile && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
                />
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden lg:flex items-center space-x-4">
              {navItems.slice(0, 6).map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 text-xs"
                >
                  <item.icon className="w-4 h-4 mr-1" />
                  {item.name}
                </Button>
              ))}
            </nav>
          )}

          {/* Add Listing Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground ml-4">
            Add a listing
          </Button>

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 ml-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          )}
        </div>

        {/* Mobile Search */}
        {isMobile && (
          <div className="mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="mt-4 pb-4 border-t border-white/20">
            <nav className="grid grid-cols-2 gap-2 mt-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 text-xs justify-start"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};