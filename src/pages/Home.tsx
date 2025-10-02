import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Building2, Hammer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: HomeIcon,
    title: "Residential Roofing",
    description: "Expert installation and repair for homes of all sizes.",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Professional solutions for business properties.",
  },
  {
    icon: Hammer,
    title: "Tiles & Shingles",
    description: "Our specialty! Master craftsmanship guaranteed.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Quick Services Preview */}
      <section className="py-16 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional Roofing Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Serving DFW & North Texas with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="default">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose Ourmijos Roofing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are licensed and insured. We are rapidly becoming Texas number one roofing company by simply focusing on customer satisfaction above anything else. We do not leave until the customer is 100% satisfied "guaranteed". This all stems from our pickiness and passion for what we do.
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
