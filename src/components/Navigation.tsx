import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg shadow-primary/20"
          : "bg-primary"
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <Logo
              size="md"
              variant="icon"
              className="h-14 sm:h-20 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-accent bg-white/10"
                    : "text-primary-foreground/80 hover:text-accent hover:bg-white/5"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <a href="tel:5059467814" className="text-primary-foreground/80 hover:text-accent text-sm font-semibold hidden lg:flex items-center gap-1.5 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (505) 946-7814
              </a>
              <a href="tel:5059467814">
                <Button variant="cta" size="sm" className="rounded-full px-5 shadow-lg shadow-accent/25">
                  Get Free Quote
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile: phone + menu */}
          <div className="flex md:hidden items-center gap-2">
            <a href="tel:5059467814" aria-label="Call us">
              <Button variant="cta" size="icon" className="rounded-full h-9 w-9 shadow-lg shadow-accent/25">
                <Phone className="h-4 w-4" />
              </Button>
            </a>
            <button
              className="text-primary-foreground p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <div className="border-t border-white/10 pt-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? "text-accent bg-white/10"
                    : "text-primary-foreground/80 hover:text-accent hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:5059467814" className="block pt-2">
              <Button variant="cta" size="default" className="w-full rounded-full shadow-lg shadow-accent/25">
                <Phone className="mr-2 h-4 w-4" />
                Get Free Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
