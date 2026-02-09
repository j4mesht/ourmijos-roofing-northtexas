import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const serviceLinks = [
  { label: "General Repairs", to: "/services#general-repairs" },
  { label: "Plumbing", to: "/services#plumbing" },
  { label: "Electrical", to: "/services#electrical" },
  { label: "Painting", to: "/services#painting" },
  { label: "Bathroom Remodels", to: "/services#bathroom" },
  { label: "Drywall", to: "/services#drywall" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl font-bold mb-3 text-background">
              Ourmijos Home Service
            </h3>
            <p className="text-background/60 text-sm leading-relaxed mb-5 max-w-xs">
              Professional handyman & home maintenance services in DFW & North&nbsp;Texas. Licensed, insured, and committed to quality.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=100069315385068" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/ourmijos_handymanllc?igsh=MWM5MzE0NmxwOGl5Mg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-background/80 mb-4">Pages</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-background/60 hover:text-accent transition-colors text-sm">Home</Link>
              <Link to="/services" className="text-background/60 hover:text-accent transition-colors text-sm">Services</Link>
              <Link to="/about" className="text-background/60 hover:text-accent transition-colors text-sm">About Us</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-background/80 mb-4">Popular Services</h4>
            <nav className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link key={link.label} to={link.to} className="text-background/60 hover:text-accent transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-background/80 mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:5059467814" className="flex items-center gap-2.5 text-background/60 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                (505) 946-7814
              </a>
              <a href="mailto:ourmijosroofing@gmail.com" className="flex items-center gap-2.5 text-background/60 hover:text-accent transition-colors break-all">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                ourmijosroofing@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-background/60">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                DFW & North Texas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/40">
          <p>© {new Date().getFullYear()} Ourmijos Home Service. All rights reserved.</p>
          <p>Serving DFW & North Texas · Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
