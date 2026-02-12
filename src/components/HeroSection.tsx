import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "B+", prefix: "AED ", label: "Properties Sold" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
      {prefix}{count}{suffix}
    </span>
  );
}

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", budget: "", type: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury Ajman waterfront" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Premium Real Estate in Ajman
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Discover<br />
                <span className="text-gold-gradient">Extraordinary</span><br />
                Living
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-md leading-relaxed">
                Experience unparalleled luxury with Albaqa Estate. Your gateway to the finest properties in Ajman's most prestigious locations.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  <p className="text-xs text-white/50 mt-1 tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-5"
            >
              <div>
                <h3 className="text-xl font-serif font-semibold text-white">Get Exclusive Access</h3>
                <p className="text-sm text-white/60 mt-1">Connect with our luxury property specialists</p>
              </div>

              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12"
              />
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white/70 rounded-xl h-12 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" className="text-charcoal">Budget Range</option>
                <option value="500k-1m" className="text-charcoal">AED 500K - 1M</option>
                <option value="1m-3m" className="text-charcoal">AED 1M - 3M</option>
                <option value="3m-5m" className="text-charcoal">AED 3M - 5M</option>
                <option value="5m+" className="text-charcoal">AED 5M+</option>
              </select>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white/70 rounded-xl h-12 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" className="text-charcoal">Property Type</option>
                <option value="apartment" className="text-charcoal">Apartment</option>
                <option value="villa" className="text-charcoal">Villa</option>
                <option value="penthouse" className="text-charcoal">Penthouse</option>
                <option value="commercial" className="text-charcoal">Commercial</option>
              </select>

              <Button
                type="submit"
                className="w-full rounded-xl h-12 gold-gradient text-primary-foreground font-semibold text-base border-0 hover:opacity-90 transition-opacity"
              >
                Get Exclusive Access
              </Button>
            </form>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
