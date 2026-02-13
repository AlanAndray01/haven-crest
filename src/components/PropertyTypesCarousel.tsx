import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

const residentialProperties = [
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=350&fit=crop", title: "Grand Villa", location: "Al Rawda, Ajman", price: "AED 3,200,000", beds: 4, baths: 3, sqft: "4,200" },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=350&fit=crop", title: "Waterfront Apartment", location: "Corniche, Ajman", price: "AED 1,100,000", beds: 2, baths: 2, sqft: "1,400" },
  { image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=500&h=350&fit=crop", title: "Luxury Townhouse", location: "Al Zahya, Ajman", price: "AED 2,500,000", beds: 3, baths: 3, sqft: "2,800" },
  { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=350&fit=crop", title: "Sky Penthouse", location: "Al Rashidiya, Ajman", price: "AED 5,800,000", beds: 5, baths: 4, sqft: "4,800" },
];

const commercialProperties = [
  { image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=350&fit=crop", title: "Premium Office Tower", location: "Sheikh Khalifa Bin Zayed St", price: "AED 8,500,000", beds: 0, baths: 4, sqft: "12,000" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop", title: "Retail Complex", location: "City Centre, Ajman", price: "AED 15,000,000", beds: 0, baths: 6, sqft: "20,000" },
  { image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=350&fit=crop", title: "Business Hub", location: "Al Jurf, Ajman", price: "AED 4,200,000", beds: 0, baths: 3, sqft: "6,500" },
  { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&h=350&fit=crop", title: "Co-Working Space", location: "Corniche Road, Ajman", price: "AED 2,800,000", beds: 0, baths: 2, sqft: "3,800" },
];

const PropertyTypesCarousel = () => {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const { ref, isVisible } = useScrollAnimation();

  const properties = activeTab === "residential" ? residentialProperties : commercialProperties;

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Explore</p> */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Property Types</h2>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="bg-secondary rounded-full p-1 flex gap-1">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "residential"
                  ? "gold-gradient text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "commercial"
                  ? "gold-gradient text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex mb-4">
              {properties.map((prop) => (
                <div key={prop.title} className="flex-[0_0_85%] px-2 sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <div className="bg-card rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-border/50 group">
                    <div className="relative overflow-hidden h-52">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      {/* <div className="absolute top-3 left-3 gold-gradient text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">{prop.price}</div> */}
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif font-semibold text-foreground">{prop.title}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                        <MapPin className="w-3 h-3" />{prop.location}
                      </div>
                      {/* <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border/50 text-muted-foreground text-xs">
                        {prop.beds > 0 && <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" />{prop.beds}</span>}
                        <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{prop.baths}</span>
                        <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" />{prop.sqft}</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()} className="rounded-full border-border hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()} className="rounded-full border-border hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypesCarousel;
