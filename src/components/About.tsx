import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Local & Owner-Operated",
  "Certified Craftsmen & Women",
  "All Types of Roofing",
  "Tiles & Shingles Specialists",
  "Commercial & Residential",
  "Fast & Efficient Service",
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-accent text-accent-foreground">About Us</Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Local Roofing Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Ourmijos Roofing and Handyman LLC, we're proud to serve the DFW and North Texas community with exceptional roofing services. As a local, owner-operated business, we understand the unique roofing challenges in our area.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified craftsmen and women brings years of experience to every project. Whether you need a complete roof restoration or a quick repair, we approach each job with the same dedication to quality and customer satisfaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-8 shadow-xl">
              <div className="h-full rounded-xl bg-card flex flex-col justify-center p-8 text-center">
                <h3 className="font-display text-4xl font-bold text-primary mb-4">
                  No Job Too Big or Small
                </h3>
                <p className="text-lg text-muted-foreground">
                  We treat every project with the same level of professionalism and care, ensuring exceptional results every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
