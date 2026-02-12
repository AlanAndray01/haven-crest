import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SEOContent = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Luxury Real Estate in Ajman — Your Complete Guide
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ajman has rapidly emerged as one of the UAE's most sought-after destinations for luxury real estate investment. With its stunning waterfront developments, world-class amenities, and competitive property prices compared to neighboring emirates, Ajman offers exceptional value for discerning buyers and investors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Why Invest in Ajman Property?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ajman's strategic location along the Arabian Gulf, combined with its progressive freehold ownership laws for all nationalities, makes it an ideal destination for both residential living and investment. The emirate boasts modern infrastructure, proximity to Dubai and Sharjah, and a growing economy that continues to attract global investors seeking premium returns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Premium Neighborhoods in Ajman
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              From the prestigious Corniche area with its panoramic sea views to the family-friendly communities of Al Zahya and Al Rawda, Ajman offers diverse luxury living options. Al Marjan Island presents waterfront penthouse living, while emerging developments along Sheikh Khalifa Bin Zayed Street cater to commercial and mixed-use investments.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Albaqa Estate — Your Trusted Partner
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of experience in Ajman's luxury property market, Albaqa Estate has facilitated over AED 2 billion in property transactions. Our team of certified real estate professionals provides personalized service, from initial consultation through to post-purchase support, ensuring every client's experience is nothing short of exceptional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
