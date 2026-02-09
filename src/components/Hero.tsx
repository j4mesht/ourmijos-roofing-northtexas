import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Star, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = `${import.meta.env.BASE_URL}hero-home.jpg`;

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-16 lg:py-20">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/90">Trusted in DFW & North Texas</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground mb-6 leading-[1.1] tracking-tight">
              Home Service
              <span className="block text-gradient">Done Right.</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-xl">
              Plumbing, electrical, painting, remodeling, drywall, fencing, and more. Licensed & insured.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:5059467814">
                <Button size="lg" variant="cta" className="text-base sm:text-lg w-full sm:w-auto rounded-full px-8 py-6 shadow-xl shadow-accent/30 hover:shadow-accent/40">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Your Free Quote
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-base sm:text-lg w-full sm:w-auto rounded-full px-8 py-6 border-white/25 text-primary-foreground hover:bg-white/10 backdrop-blur-sm">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Same-Week Service
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" />
                100% Satisfaction
              </span>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main hero image */}
              <img
                src={heroImage}
                alt="Home exterior with custom wood shutters, new fence, and landscaping by Ourmijos Home Service"
                className="w-full aspect-square object-cover rounded-2xl shadow-2xl shadow-black/30 lg:rounded-3xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
