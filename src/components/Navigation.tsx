import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/gallery" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">
              Ourmijos Roofing
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="cta" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="cta" size="sm" className="w-full mt-4">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
