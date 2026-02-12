import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 rounded-full px-6 py-3 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg border border-border/50"
          : "bg-card/40 backdrop-blur-md border border-white/20"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold text-foreground tracking-tight">
            Albaqa <span className="text-primary">Estate</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" /> Ajman
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollTo("#contact")}
            className="hidden sm:inline-flex rounded-full gold-gradient text-primary-foreground border-0 hover:opacity-90 transition-opacity font-medium text-sm px-6"
          >
            Schedule Viewing
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="rounded-full gold-gradient text-primary-foreground border-0 mt-2 w-full"
          >
            Schedule Viewing
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
