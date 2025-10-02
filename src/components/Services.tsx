import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Hammer, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    description: "Expert installation and repair for homes of all sizes. We restore your weathered roof to brand new condition.",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Professional commercial roofing solutions designed to protect your business and withstand the elements.",
  },
  {
    icon: Hammer,
    title: "Tiles & Shingles",
    description: "Our specialty! Master craftsmanship in tile and shingle installation, repair, and replacement.",
  },
  {
    icon: Shield,
    title: "Roof Restoration",
    description: "Comprehensive restoration services to bring your old roof back to life with guaranteed quality.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Roofing Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Certified and qualified in all types of roofing. We pride ourselves on providing exceptional service to every customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
