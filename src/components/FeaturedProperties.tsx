import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    title: "Oceanfront Penthouse",
    location: "Al Marjan Island, Ajman",
    price: "AED 4,500,000",
    beds: 4, baths: 3, sqft: "3,200",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    title: "Modern Luxury Villa",
    location: "Al Zahya, Ajman",
    price: "AED 6,800,000",
    beds: 5, baths: 4, sqft: "5,100",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    title: "Skyline Apartment",
    location: "Corniche Tower, Ajman",
    price: "AED 1,950,000",
    beds: 2, baths: 2, sqft: "1,800",
  },
];

const FeaturedProperties = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="properties" className="section-padding bg-background ">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Portfolio</p> */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Featured Properties
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Handpicked selection of the finest luxury properties available in Ajman
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <div
              key={prop.title}
              className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* <div className="absolute top-4 left-4 gold-gradient text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  {prop.price}
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-foreground">{prop.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {prop.location}
                </div>
                {/* <div className="flex items-center gap-5 mt-4 pt-4 border-t border-border/50 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1.5"><Bed className="w-4 h-4" /> {prop.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4" /> {prop.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4" /> {prop.sqft} sqft</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
