import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Award, Gem, Key } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Over 15 years of proven excellence in Ajman's luxury real estate market with transparent dealings.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for outstanding client satisfaction and premium property curation across the UAE.",
  },
  {
    icon: Gem,
    title: "Premium Collection",
    description: "Exclusive access to off-market properties and the finest residences in Ajman's elite neighborhoods.",
  },
  {
    icon: Key,
    title: "Seamless Experience",
    description: "End-to-end concierge service from property search to handover, tailored to your lifestyle.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Why Albaqa</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Why Choose Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`bg-card rounded-2xl p-7 cursor-pointer text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-border/50 group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <feat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-semibold text-foreground text-lg mb-3">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
