import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Quality roofing services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Expert Roofing Services for DFW & North Texas
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Local, owner-operated roofing specialists. Certified in all types of roofing with expertise in tiles and shingles. No job is too big or too small.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="cta" className="text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
