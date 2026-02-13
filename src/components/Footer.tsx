import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
    <path d="M357.2 48L427.8 48 273.6 224.2 455 464L313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"/>
  </svg>
);

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Albaqa <span className="text-primary">Estate</span>
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Your trusted partner in luxury real estate across Ajman, UAE. Discover extraordinary living with us.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="X"
              >
                <XIcon />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-sm text-white/50 hover:text-primary transition-colors text-left">
                Available Properties
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-primary transition-colors text-left">
                Why Choose Us?
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-primary transition-colors text-left">
                You Might Ask
              </a>
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Property Types</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <span>Luxury Villas</span>
              <span>Penthouses</span>
              <span>Apartments</span>
              <span>Commercial Spaces</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Corniche Road, Ajman, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+971 6 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@albaqaestate.ae</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Albaqa Estate. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
