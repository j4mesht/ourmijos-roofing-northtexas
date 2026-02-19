import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Search } from "lucide-react";
import Contact from "@/components/Contact";
import { services } from "@/data/services";
import PlaceholderImage from "@/components/PlaceholderImage";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Services | Handyman, Plumbing, Electrical & Remodeling - DFW</title>
        <meta name="description" content="Expert home maintenance services: General Repairs, Plumbing, Electrical, Painting, Drywall, Flooring, and Bathroom Remodels. Serving DFW & North Texas." />
        <link rel="canonical" href="https://our-mijos-home-service.netlify.app/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-primary py-20 sm:py-28 text-primary-foreground overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Every Home Project, <br className="hidden sm:block" />
              <span className="text-accent">Handled.</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              With skilled craftsmen ready to go, Ourmijos Home Service is your single call for everything from quick fixes to full remodels.
            </p>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,10 720,90 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Full Services */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
              All Services
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Everything we offer — no hidden surprises.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start ${isEven ? "" : "lg:direction-rtl"}`}>
                    {/* Before & After images — alternates sides */}
                    <div className={`lg:col-span-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      {(service.id === "safety") ? (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}safety-one.jpg`}
                              alt="Safety Installation"
                              className="rounded-xl shadow-md w-full h-auto aspect-square object-cover"
                            />
                          </div>
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}safety-two.jpg`}
                              alt="Safety Installation"
                              className="rounded-xl shadow-md ring-2 ring-accent/20 w-full h-auto aspect-square object-cover"
                            />
                          </div>
                        </div>
                      ) : (service.id === "carpentry") ? (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}capentry-before.jpg`}
                              alt="Carpentry Before"
                              className="rounded-xl shadow-md w-full h-auto aspect-square object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}capentry-after.jpg`}
                              alt="Carpentry After"
                              className="rounded-xl shadow-md ring-2 ring-accent/20 w-full h-auto aspect-square object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ) : (service.id === "assembly") ? (
                        <div className="w-full">
                          <img
                            src={`${import.meta.env.BASE_URL}assembly.jpg`}
                            alt="Assembly Project"
                            className="rounded-xl shadow-md w-full h-64 sm:h-72 object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      ) : service.id === "fencing" ? (
                        <div className="w-full overflow-hidden rounded-xl shadow-md">
                          <img
                            src={`${import.meta.env.BASE_URL}fencing.jpg`}
                            alt="Fencing Installation"
                            className="w-full h-64 sm:h-72 object-cover scale-300"
                            style={{ objectPosition: "center 40%" }}
                            loading="lazy"
                          />
                        </div>
                      ) : (service.id === "electrical" || service.id === "bathroom" || service.id === "commercial") ? (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}${
                                service.id === "electrical" ? "electrical-one.jpg" : 
                                service.id === "bathroom" ? "bathroom-one.jpg" : 
                                "commercial-one.jpg"
                              }`}
                              alt={service.id === "electrical" ? "Electrical Installation" : service.id === "bathroom" ? "Bathroom Remodel" : "Commercial Work"}
                              className="rounded-xl shadow-md w-full h-auto aspect-square object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}${
                                service.id === "electrical" ? "electrical-chandelier.jpg" : 
                                service.id === "bathroom" ? "bathroom-remodeling.jpg" : 
                                "commercial-two.jpg"
                              }`}
                              alt={service.id === "electrical" ? "Chandelier Installation" : service.id === "bathroom" ? "Bathroom Remodel" : "Commercial Work"}
                              className="rounded-xl shadow-md ring-2 ring-accent/20 w-full h-auto aspect-square object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ) : (service.id === "appliance" || service.id === "plumbing" || service.id === "moving") ? (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}${
                                service.id === "appliance" ? "appliance-before.jpg" : 
                                service.id === "plumbing" ? "plumbing-before.jpg" :
                                "property-prep.jpg"
                              }`}
                              alt={`${service.title} Before`}
                              className="rounded-xl shadow-md w-full h-auto aspect-square object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <img
                              src={`${import.meta.env.BASE_URL}${
                                service.id === "appliance" ? "appliance-after.jpg" : 
                                service.id === "plumbing" ? "plumbing-after.jpg" :
                                "property-prep-two.jpg"
                              }`}
                              alt={`${service.title} After`}
                              className="rounded-xl shadow-md ring-2 ring-accent/20 w-full h-auto aspect-square object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ) : service.id === "flooring" ? (
                        <div className="w-full">
                          <img
                            src={`${import.meta.env.BASE_URL}flooring-installation.jpg`}
                            alt="Flooring Installation"
                            className="rounded-xl shadow-md w-full h-64 sm:h-72 object-cover"
                            style={{ objectPosition: "center 85%" }}
                            loading="lazy"
                          />
                        </div>
                      ) : service.id === "exterior" ? (
                        <div className="w-full">
                          <img
                            src={`${import.meta.env.BASE_URL}powerwashing-exterior.jpg`}
                            alt="Exterior Power Washing"
                            className="rounded-xl shadow-md w-full h-64 sm:h-72 object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      ) : service.id === "drywall" ? (
                        <div className="w-full">
                          <img
                            src={`${import.meta.env.BASE_URL}sheetrock-drywal-services.jpg`}
                            alt="Drywall & Sheetrock Installation"
                            className="rounded-xl shadow-md w-full h-64 sm:h-72 object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      ) : service.id === "painting" ? (
                        <div className="w-full">
                          <img
                            src={`${import.meta.env.BASE_URL}painting-after.jpg`}
                            alt="Painting Service"
                            className="rounded-xl shadow-md w-full h-64 sm:h-72 object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      ) : service.id === "general-repairs" ? (
                        <div className="w-full">
                          <img
                            src={`${import.meta.env.BASE_URL}general-repairs.jpg`}
                            alt="General Repairs"
                            className="rounded-xl shadow-md w-full h-64 sm:h-72 object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      ) : service.id === "kitchen" ? (
                        <div className="w-full">
                          <img
                            src={`${import.meta.env.BASE_URL}kitchen-renovation.jpg`}
                            alt="Kitchen Renovation"
                            className="rounded-xl shadow-md w-full h-64 sm:h-72 object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            {(service.id === "windows-doors") ? (
                              <img
                                src={`${import.meta.env.BASE_URL}windows-before.jpg`}
                                alt={`${service.title} Before`}
                                className="rounded-xl shadow-md w-full h-auto aspect-square object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <PlaceholderImage
                                label="Before"
                                aspectRatio="portrait"
                                className="rounded-xl shadow-md"
                              />
                            )}
                          </div>
                          <div>
                            {(service.id === "windows-doors") ? (
                              <img
                                src={`${import.meta.env.BASE_URL}windows-after.jpg`}
                                alt={`${service.title} After`}
                                className="rounded-xl shadow-md ring-2 ring-accent/20 w-full h-auto aspect-square object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <PlaceholderImage
                                label="After"
                                aspectRatio="portrait"
                                className="rounded-xl shadow-md ring-2 ring-accent/20"
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-3 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      {/* Category header */}
                      <div className="flex items-center gap-2.5 mb-4">
                        <service.icon className="h-6 w-6 text-accent flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* All service items — no show more */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm py-0.5">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider between categories (not after last) */}
                  {index < services.length - 1 && (
                    <div className="border-b border-border/60 mt-16" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── "Don't see it?" CTA ─── */}
      <section className="py-16 sm:py-20 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Search className="h-10 w-10 text-white/80 mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Don't See It on the List?
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-md mx-auto">
              We handle more projects than we can list. Give us a call — chances are, we can help.
            </p>
            <a href="tel:5059467814">
              <Button size="lg" className="rounded-full px-8 py-6 text-base bg-white text-accent hover:bg-white/90 shadow-xl font-bold">
                <Phone className="mr-2 h-5 w-5" />
                (505) 946-7814
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Services;
