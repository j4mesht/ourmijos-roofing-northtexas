import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ClipboardList, Wrench, ThumbsUp, Star, Quote } from "lucide-react";

/* ──────────────────── How It Works ──────────────────── */
const steps = [
  {
    icon: Phone,
    title: "Call or Request a Quote",
    description: "Reach out by phone or email. We'll discuss your project and schedule a visit at a time that works for you.",
  },
  {
    icon: ClipboardList,
    title: "Free On-Site Estimate",
    description: "Our craftsman arrives on time, assesses the work, and provides a transparent, no-obligation quote.",
  },
  {
    icon: Wrench,
    title: "Expert Execution",
    description: "We get to work — on time, on budget, and with careful attention to protecting your home.",
  },
  {
    icon: ThumbsUp,
    title: "Your Satisfaction, Guaranteed",
    description: "We walk you through the finished work. We don't leave until you're 100% satisfied — guaranteed.",
  },
];

/* ──────────────────── Testimonials (placeholder) ──────────────────── */
const testimonials = [
  {
    name: "Sarah M.",
    location: "Plano, TX",
    text: "They replaced every faucet in the house, fixed two doors that wouldn't close, and patched drywall — all in one visit. Incredible value.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Frisco, TX",
    text: "I've tried three other handyman services. Ourmijos is the only one that showed up on time, communicated clearly, and did perfect work.",
    rating: 5,
  },
  {
    name: "Linda & Tom K.",
    location: "McKinney, TX",
    text: "Our bathroom remodel exceeded expectations. Professional, clean, and finished ahead of schedule. Can't recommend them enough!",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ourmijos Home Service | Handyman & Home Repairs in DFW</title>
        <meta name="description" content="Trusted local handyman services in DFW & North Texas. We specialize in home repairs, plumbing, electrical, painting, and remodeling. Licensed & insured." />
        <link rel="canonical" href="https://j4mesht.github.io/ourmijos-roofing-northtexas/" />
      </Helmet>

      <Hero />

      {/* Popular Services Preview */}
      <ServicesPreview />

      {/* ─── How It Works ─── */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Getting Started Is <span className="text-gradient">Easy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group px-4">
                {/* Connector line (hidden on last & mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border z-0" />
                )}

                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview ─── */}
      <About />

      {/* ─── Testimonials ─── */}
      <section className="py-16 sm:py-24 bg-background section-pattern">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              What Our Customers <span className="text-gradient">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="relative bg-card rounded-2xl border border-border p-7 flex flex-col hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
              >
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-accent/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground leading-relaxed mb-6 flex-1">"{t.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Request a Quote Form ─── */}
      <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
                Request Your <span className="text-accent">Free Quote</span>
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Tell us about your project and we'll get back to you with a free, no-obligation estimate.
              </p>
            </div>

            <form
              action="https://formsubmit.co/ourmijosroofing@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New Quote Request from Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://j4mesht.github.io/ourmijos-roofing-northtexas/" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all appearance-none"
                >
                  <option value="" className="text-foreground">Select a service...</option>
                  <option value="General Repairs" className="text-foreground">General Repairs</option>
                  <option value="Plumbing" className="text-foreground">Plumbing</option>
                  <option value="Electrical" className="text-foreground">Electrical</option>
                  <option value="Painting" className="text-foreground">Painting</option>
                  <option value="Drywall" className="text-foreground">Drywall</option>
                  <option value="Flooring" className="text-foreground">Flooring</option>
                  <option value="Bathroom Remodel" className="text-foreground">Bathroom Remodel</option>
                  <option value="Carpentry" className="text-foreground">Carpentry</option>
                  <option value="Fencing" className="text-foreground">Fencing</option>
                  <option value="Exterior Work" className="text-foreground">Exterior Work</option>
                  <option value="Commercial" className="text-foreground">Commercial</option>
                  <option value="Other" className="text-foreground">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project — what needs to be done, timeline, etc."
                  className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button type="submit" size="lg" variant="cta" className="w-full rounded-xl px-8 py-6 text-base shadow-xl font-bold">
                <Phone className="mr-2 h-5 w-5" />
                Submit Quote Request
              </Button>

              <p className="text-center text-xs text-primary-foreground/50">
                Or call us directly at <a href="tel:5059467814" className="text-accent hover:underline font-medium">(505) 946-7814</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <Contact />
    </div>
  );
};

export default Home;
