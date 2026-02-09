import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-primary text-primary-foreground scroll-mt-20 overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            Ready to Check Off <span className="text-accent">Your To-Do List?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 leading-relaxed">
            Contact us today for a free, no-obligation consultation and quote. We respond fast — usually within the hour during business hours.
          </p>
          <p className="text-sm text-primary-foreground/60 mb-10">
            Serving DFW & North Texas · Mon–Sat 7 AM – 7 PM
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:5059467814">
              <Button size="lg" variant="cta" className="rounded-full px-8 py-6 text-base w-full sm:w-auto shadow-xl" aria-label="Request a free quote by calling us">
                <Phone className="mr-2 h-5 w-5" />
                (505) 946-7814
              </Button>
            </a>
            <a href="mailto:ourmijosroofing@gmail.com">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
