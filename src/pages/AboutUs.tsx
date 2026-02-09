import { Helmet } from "react-helmet-async";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | Ourmijos Home Service - Your Trusted DFW Handyman</title>
        <meta name="description" content="Learn about Ourmijos Home Service. We are a locally owned, licensed, and insured home maintenance company dedicated to 100% customer satisfaction in North Texas." />
        <link rel="canonical" href="https://j4mesht.github.io/ourmijos-roofing-northtexas/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-primary py-20 sm:py-28 text-primary-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Local Experts, <br className="hidden sm:block" />
              <span className="text-accent">Personal Touch.</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Owner-operated and deeply rooted in the DFW & North Texas community. No job is too big or too small.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,10 720,90 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/ourmijos-roofing-northtexas/about-us.jpg"
                alt="Ourmijos Roofing & Handyman LLC"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="hidden lg:block absolute -z-10 -top-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                Built on Hard Work, <span className="text-gradient">Driven by Trust</span>
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a locally owned and operated home service company proudly serving the DFW and North Texas area. At Ourmijos Home Service, <strong className="text-foreground">no job is too big or too small.</strong>
                </p>
                <p>
                  Our team is certified and qualified across all types of home repairs, maintenance, and remodeling. We pride ourselves on providing each and every customer with exceptional service. Fix your home quickly and efficiently with help from our experienced staff of expert craftsmen and women.
                </p>
                <p>
                  From our very first job, we've had one goal in mind: provide the best service to our customers, at great prices, with the professional and friendly attitude you deserve. We are licensed and insured, and we're rapidly becoming North Texas's go-to home service provider by focusing on customer satisfaction above anything else.
                </p>
                <p className="font-semibold text-foreground">
                  We don't leave until the customer is 100% satisfied — guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Let's Get to Work
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-md mx-auto">
              Whether you need plumbing, electrical, painting, remodels, or anything in between — we've got you covered.
            </p>
            <a href="tel:5059467814">
              <Button size="lg" className="rounded-full px-8 py-6 text-base bg-white text-accent hover:bg-white/90 shadow-xl font-bold">
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Estimate
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default AboutUs;
