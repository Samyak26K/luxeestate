import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CTA_LABELS, PRIMARY_NAV_LINKS, SITE_BRAND } from "@/lib/constants/siteContent";
import { Button } from "@/components/ui/button";

const PrimaryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Subtle threshold avoids flicker during minor scroll adjustments.
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu on navigation to prevent stale open states.
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl tracking-tight">
              <span className="text-foreground">{SITE_BRAND.mark.primary}</span>
              <span className="text-primary">{SITE_BRAND.mark.accent}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {PRIMARY_NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm tracking-wide transition-all duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-primary after:origin-left after:transition-transform after:duration-300 ${
                  location.pathname === link.path
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="secondary" className="text-sm">
              <Link to="/contact">{CTA_LABELS.getInTouch}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {PRIMARY_NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg tracking-wide transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="primary" className="w-full text-sm mt-6">
            <Link to="/contact">{CTA_LABELS.getInTouch}</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNav;
