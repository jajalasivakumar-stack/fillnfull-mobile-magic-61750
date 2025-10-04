import { Card } from "@/components/ui/card";
import { 
  Truck, 
  UtensilsCrossed, 
  ShoppingCart, 
  Bed, 
  Car, 
  Wrench, 
  Users, 
  Hammer, 
  Cake, 
  Coffee, 
  Percent, 
  Wind,
  Shield,
  Home,
  GraduationCap,
  Gift,
  ShoppingBag,
  CreditCard,
  Store,
  Package,
  Gamepad2 as Toy,
  Plus
} from "lucide-react";

export const ServicesDirectory = () => {
  const services = [
    { icon: Truck, title: "Delivery Boys", color: "bg-blue-500" },
    { icon: UtensilsCrossed, title: "Local Home Food", color: "bg-green-500" },
    { icon: ShoppingCart, title: "Local Food", color: "bg-red-500" },
    { icon: Bed, title: "Bed and Food at Rs.500", color: "bg-purple-500" },
    { icon: Car, title: "Hire a Driver", color: "bg-yellow-500" },
    { icon: Users, title: "Helpers", color: "bg-pink-500" },
    { icon: Wrench, title: "FillNFull Agents", color: "bg-indigo-500" },
    { icon: Hammer, title: "Repairs", color: "bg-gray-500" },
    { icon: Cake, title: "Decoration starting at Rs.500", color: "bg-orange-500" },
    { icon: Coffee, title: "Meals starting at Rs.69", color: "bg-brown-500" },
    { icon: Percent, title: "After 9 PM Deals", color: "bg-teal-500" },
    { icon: Wind, title: "Vacuum Cleaner for Rent", color: "bg-cyan-500" },
    { icon: Shield, title: "Outdoor Mosquito Nets for Rent", color: "bg-lime-500" },
    { icon: Car, title: "Buy Vehicles", color: "bg-blue-600" },
    { icon: Home, title: "RealEstate", color: "bg-green-600" },
    { icon: GraduationCap, title: "Education", color: "bg-purple-600" },
    { icon: ShoppingBag, title: "Local Offers", color: "bg-red-600" },
    { icon: CreditCard, title: "Online Offers", color: "bg-yellow-600" },
    { icon: Gift, title: "Shop Local and get Rewards", color: "bg-pink-600" },
    { icon: Store, title: "Digital Showcase", color: "bg-indigo-600" },
    { icon: Package, title: "Gifts", color: "bg-orange-600" },
    { icon: Toy, title: "Toys", color: "bg-purple-700" },
    { icon: Car, title: "All Rentals", color: "bg-blue-700" },
    { icon: Plus, title: "Find More....", color: "bg-gray-600" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Find Here Popular Local Directories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All the local services you need in one place - no WordPress required!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/20 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
            </Card>
          ))}
        </div>

        {/* WordPress Eliminator CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our WordPress Eliminator Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="text-lg">Faster Than WordPress</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-lg">WordPress Dependencies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Mobile Optimized</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};