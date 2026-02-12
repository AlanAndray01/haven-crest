import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of luxury properties does Albaqa Estate offer?",
    a: "We offer an exclusive range of luxury properties including waterfront penthouses, modern villas, premium apartments, commercial spaces, and off-plan projects in Ajman's most prestigious neighborhoods.",
  },
  {
    q: "How do I schedule a property viewing?",
    a: "You can schedule a private viewing through our website contact form, by calling our office, or via WhatsApp. Our team arranges viewings at your convenience, including evenings and weekends.",
  },
  {
    q: "Do you assist with financing and mortgage options?",
    a: "Yes, we partner with leading banks and financial institutions in the UAE to help our clients secure the best mortgage rates and financing options tailored to their needs.",
  },
  {
    q: "What is the process for purchasing property in Ajman?",
    a: "Our team guides you through every step — from property selection and due diligence to documentation, payment structure, and final handover. We ensure a seamless, transparent process.",
  },
  {
    q: "Can I invest in Ajman real estate as a non-resident?",
    a: "Absolutely. Ajman offers freehold property ownership for all nationalities in designated areas. We specialize in helping international investors navigate the purchase process.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className={`space-y-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl border border-border/50 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 text-sm md:text-base [&>svg]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
