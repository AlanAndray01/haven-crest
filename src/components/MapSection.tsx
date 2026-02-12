import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MapSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Location</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Visit Our Office
          </h2>
          <p className="text-muted-foreground mt-4">Corniche Road, Ajman, United Arab Emirates</p>
        </div>

        <div className={`rounded-3xl overflow-hidden shadow-lg border border-border/50 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57777.82698492942!2d55.41738544863281!3d25.40539200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x1234567890abcdef!2sAjman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Albaqa Estate Office Location - Ajman, UAE"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
