import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export const SearchSection = () => {
  const [location, setLocation] = useState("");
  const [proximity, setProximity] = useState("1km");
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation("Current Location");
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Location Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Location or Click Icon to take Your Current Location
              </label>
              <div className="relative">
                <Input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="pr-12"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={handleLocationClick}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:bg-primary/10"
                >
                  <MapPin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Search Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Proximity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proximity
                </label>
                <Select value={proximity} onValueChange={setProximity}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1km">1km</SelectItem>
                    <SelectItem value="5km">5km</SelectItem>
                    <SelectItem value="10km">10km</SelectItem>
                    <SelectItem value="25km">25km</SelectItem>
                    <SelectItem value="50km">50km</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    <SelectItem value="food">Food & Dining</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="health">Health & Wellness</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Query */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you looking for?
                </label>
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services..."
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-3 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};