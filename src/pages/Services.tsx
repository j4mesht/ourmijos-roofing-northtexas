import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Contact from "@/components/Contact";

const services = [
  {
    title: "Residential Roofing",
    description: "Fix your commercial and residential roofing quickly and efficiently with help from our experienced staff of expert craftsman and women. Our comprehensive roofing services make sure that your old and weathered roof is restored to brand new.",
    features: [
      "New roof installation",
      "Roof replacement",
      "Repair and maintenance",
      "Emergency roof repairs",
      "Weatherproofing",
    ],
  },
  {
    title: "Commercial Roofing",
    description: "When all you want to do is stop the leaks on your roof, call Ourmijos roofing now and save yourself a world of stress! Whether it is repairs, maintenance, or a brand new roof, we're the roofing contractor to guarantee the best possible job.",
    features: [
      "Flat roof systems",
      "Commercial repairs",
      "Roof coatings",
      "Preventive maintenance",
      "24/7 emergency service",
    ],
  },
  {
    title: "Tiles & Shingles Specialists",
    description: "We are certified and qualified in all types of roofing. However, tiles and shingles are our specialties. We pride ourselves on providing each and every customer with the most exceptional service possible.",
    features: [
      "Clay tile roofing",
      "Concrete tiles",
      "Asphalt shingles",
      "Architectural shingles",
      "Custom tile work",
    ],
  },
  {
    title: "Roof Inspection & Leak Detection",
    description: "If you have a lost of time and money almost certain that your top concern is leaking. Nobody wants to wake up to that dreaded feeling of a watermark or drip from their ceiling using their personal belongings.",
    features: [
      "Comprehensive inspections",
      "Leak detection",
      "Thermal imaging",
      "Detailed reports",
      "Prevention recommendations",
    ],
  },
  {
    title: "Roof Repair",
    description: "When life spots leak some one ready for a new roof. However, in many cases this is not necessary, as do spot or major in spot the lost of time. Of running roofing and repairing someone in a roof should really be considered as a top option for your home.",
    features: [
      "Storm damage repair",
      "Leak repairs",
      "Flashing repairs",
      "Ventilation repairs",
      "Quick turnaround",
    ],
  },
  {
    title: "Emergency Services",
    description: "We are insured and licensed meaning if your leak has caused any amount of damage to the inside of your home - we can fix it! This means drywall, carpentry, electrical issues – you name it. You would be hard pressed to find another roofing contractor to do the same.",
    features: [
      "24/7 availability",
      "Rapid response",
      "Temporary repairs",
      "Full restoration",
      "Insurance assistance",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Our Roofing Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Certified and qualified in all types of roofing. No job is too big or too small.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Services;
