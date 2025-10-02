import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold mb-2">
              Ourmijos Roofing & Handyman LLC
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Professional Roofing Services in DFW & North Texas
            </p>
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Ourmijos Roofing & Handyman LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
