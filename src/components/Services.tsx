import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getPopularServices } from "@/data/services";

const popularServices = getPopularServices();

const Services = () => {
  return (
    <section className="pt-16 pb-10 sm:pt-20 sm:pb-12 bg-background section-pattern">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Services Built Around <span className="text-gradient">Your Needs</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From quick fixes to full remodels — one call handles it all. Here are our most popular services.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {popularServices.map((service, index) => (
            <Link
              key={service.id}
              to="/services"
              className="group relative bg-card rounded-2xl border border-border p-6 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
            >
              {/* Title with icon */}
              <div className="flex items-center gap-2.5 mb-3">
                <service.icon className="h-6 w-6 text-accent flex-shrink-0" />
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Short description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/60 transition-all duration-500 rounded-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
