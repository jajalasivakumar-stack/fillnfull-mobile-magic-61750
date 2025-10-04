import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileText, Play, Trophy, Users } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Buy Online Earn Points",
      description: "Shop and earn reward points with every purchase",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Submit Your Requirements",
      description: "Post your service requirements and get matched",
      color: "bg-green-500"
    },
    {
      icon: Play,
      title: "Watch Videos and Earn Points",
      description: "Earn points by watching promotional videos",
      color: "bg-red-500"
    },
    {
      icon: Trophy,
      title: "Earn Points",
      description: "Multiple ways to earn and redeem points",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "Register as Franchise Agents",
      description: "Join our network and grow your business",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent mb-4">
            FillNFull Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a seamless local services experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white border-l-4 border-l-primary">
              <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
            <h3 className="text-xl font-semibold mb-4">
              Register as a Freelancer/Free Time Worker
            </h3>
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Register Now
            </Button>
          </Card>
          
          <Card className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
            <h3 className="text-xl font-semibold mb-4">
              Learn How to Order & Book a Service
            </h3>
            <Button variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Watch Tutorial
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};