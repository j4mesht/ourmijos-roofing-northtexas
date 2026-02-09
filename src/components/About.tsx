import { Shield, Clock, Users, Award } from "lucide-react";

const features = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Users, text: "Skilled Craftsmen & Women" },
  { icon: Clock, text: "Same-Week Scheduling" },
  { icon: Award, text: "100% Satisfaction Guarantee" },
];

const About = () => {
  return (
    <section className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/about-us.jpg"
              alt="Ourmijos Roofing & Handyman LLC"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />

            {/* Background accent blob */}
            <div className="hidden lg:block absolute -z-10 -top-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              Your Trusted Local <span className="text-gradient">Home Service</span> Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              We are a locally owned and operated home service company proudly serving the DFW and North Texas area. At Ourmijos Home Service, <strong className="text-foreground">no job is too big or too small.</strong>
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team is certified and qualified across all types of home repairs, maintenance, and remodeling. We pride ourselves on providing each and every customer with exceptional service — and we don't leave until you're 100% satisfied.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary/60 rounded-xl px-4 py-3.5 border border-border/50"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-4.5 w-4.5 text-accent" />
                  </div>
                  <span className="text-foreground font-semibold text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
