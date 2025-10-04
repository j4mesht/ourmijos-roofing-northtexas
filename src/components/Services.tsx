import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Residential Roofing",
    description: "Fix your commercial and residential roofing quickly and efficiently with help from our experienced staff of expert craftsmen and women. Our comprehensive roofing services make sure that your old and weathered roof is restored to brand new.",
    items: [
      "New roof installation",
      "Roof replacement",
      "Repair and maintenance",
      "Emergency roof repairs",
      "Weatherproofing"
    ]
  },
  {
    title: "Commercial Roofing",
    description: "When all you want to do is stop the leaks on your roof, call Ourmijos roofing now and save yourself a world of stress! Whether it is repairs, maintenance, or a brand new roof, we're the roofing contractor to guarantee the best possible job.",
    items: [
      "Flat roof systems",
      "Commercial repairs",
      "Roof coatings",
      "Preventive maintenance",
      "24/7 emergency service"
    ]
  },
  {
    title: "Tiles & Shingles Specialists",
    description: "We are certified and qualified in all types of roofing. However, tiles and shingles are our specialties. We pride ourselves on providing each and every customer with the most exceptional service possible.",
    items: [
      "Clay tile roofing",
      "Concrete tiles",
      "Asphalt shingles",
      "Architectural shingles",
      "Custom tile work"
    ]
  },
  {
    title: "Roof Inspection & Leak Detection",
    description: "If you have a roof of time and money almost certain that your top concern is leaking. Nobody wants to wake up to that dreaded feeling of a watermark or drip from their ceiling using their personal belongings.",
    items: [
      "Comprehensive inspections",
      "Leak detection",
      "Thermal imaging",
      "Detailed reports",
      "Prevention recommendations"
    ]
  },
  {
    title: "Roof Repair",
    description: "When life roofs leak some are ready for a new roof. However, in many cases this is not necessary, as do roofs are made to a major in spot the test of time. At Ourmijo's roofing and repairing someone a in roof should really be considered as a top option for your home.",
    items: [
      "Storm damage repair",
      "Leak repairs",
      "Flashing repairs",
      "Ventilation repairs",
      "Quick turnaround"
    ]
  },
  {
    title: "Emergency Services",
    description: "We are insured and licensed meaning if your leak has caused any amount of damage to the inside of your home - we can fix it! This means drywall, carpentry, electrical issues – you name it. You would be hard pressed to find another roofing contractor to do the same.",
    items: [
      "24/7 availability",
      "Rapid response",
      "Temporary repairs",
      "Full restoration",
      "Insurance assistance"
    ]
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Roofing Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Certified and qualified in all types of roofing. No job is too big or too small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-display mb-3">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
