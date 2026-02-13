import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import heroBg from "@/assets/hero-bg.jpg";
import "./style.css"

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "B+", prefix: "AED ", label: "Properties Sold" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

const residentialTypes = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Villa Compound",
  "Hotel Apartment",
  "Land",
  "Floor",
  "Building"
];
const commercialTypes = [
  "Office",
  "Shop",
  "Warehouse",
  "Labour Camp",
  "Villa",
  "Bulk Unit",
  "Land",
  "Floor",
  "Building",
  "Factory",
  "Industrial Land",
  "Mixed Use Land",
  "Showroom",
  "Other Commercial"
];

const countryCodes = [
  { code: "+971", country: "AE", label: "UAE" },
  { code: "+1", country: "US", label: "USA" },
  { code: "+44", country: "GB", label: "UK" },
  { code: "+91", country: "IN", label: "India" },
  { code: "+92", country: "PK", label: "Pakistan" },
  { code: "+61", country: "AU", label: "Australia" },
  { code: "+49", country: "DE", label: "Germany" },
  { code: "+33", country: "FR", label: "France" },
  { code: "+966", country: "SA", label: "Saudi" },
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

const selectClass =
  "w-full bg-white/10 border border-white/20 text-white/80 rounded-xl h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
const inputClass =
  "bg-white/10 border-white/20 text-white placeholder:text-white/80 rounded-xl h-12";

/* ── Custom Select Dropdown ─────────────────────────────────────── */
interface SelectOption {
  value: string;
  label: string;
}

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  className = "",
  required = false,
}: {
  value: string;
  onChange: (val: string) => void;
  options: SelectOption[];
  placeholder: string;
  className?: string;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`${selectClass} flex items-center justify-between gap-2 text-left`}
      >
        <span className={selected ? "text-white" : "text-white/80"}>
          {selected ? selected.label : placeholder}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 shrink-0 text-white/80" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 text-white/80" />
        )}
      </button>
      {open && (
        <ul className="absolute z-[9999] mt-1 w-full bg-charcoal/95 backdrop-blur-xl border border-white/20 rounded-xl py-1 max-h-60 overflow-y-auto shadow-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-4 py-2.5 text-md cursor-pointer transition-colors hover:bg-white/10 ${opt.value === value ? "text-primary font-medium" : "text-white/80"
                }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
      {required && <input type="text" value={value} required tabIndex={-1} className="sr-only" readOnly />}
    </div>
  );
}

/* ── Country Code Select ────────────────────────────────────────── */
function CountryCodeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = countryCodes.find((c) => c.code === value) ?? countryCodes[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`${selectClass} flex items-center justify-between gap-6`}
      >
        <span className="flex items-center gap-1.5">
          <ReactCountryFlag
            countryCode={selected.country}
            svg
            style={{ width: "1.2em", height: "1.2em" }}
          />
          <span className="text-white text-sm">{selected.code}</span>
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 shrink-0 text-white/50" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 text-white/50" />
        )}
      </button>
      {open && (
        <ul className="absolute z-[9999] mt-1 w-48 bg-charcoal/95 backdrop-blur-xl border border-white/20 rounded-xl py-1 max-h-60 overflow-auto shadow-xl">
          {countryCodes.map((c) => (
            <li
              key={c.code}
              onClick={() => {
                onChange(c.code);
                setOpen(false);
              }}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors hover:bg-white/10 flex items-center gap-2 ${c.code === value ? "text-primary font-medium" : "text-white/80"
                }`}
            >
              <ReactCountryFlag
                countryCode={c.country}
                svg
                style={{ width: "1.2em", height: "1.2em" }}
              />
              {c.code} {c.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Merged Phone Input (Country Code + Phone Number) ─────────────── */
function MergedPhoneInput({
  countryCode,
  onCountryCodeChange,
  phone,
  onPhoneChange,
}: {
  countryCode: string;
  onCountryCodeChange: (val: string) => void;
  phone: string;
  onPhoneChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = countryCodes.find((c) => c.code === countryCode) ?? countryCodes[0];

  return (
    <div ref={ref} className="relative">
      <div className="flex bg-white/10 border border-white/20 rounded-xl h-12 overflow-hidden focus-within:ring-2 focus-within:ring-primary">
        {/* Country Code Selector */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="px-3 flex items-center gap-1.5 border-r border-white/20 hover:bg-white/5 transition-colors shrink-0"
        >
          <ReactCountryFlag
            countryCode={selected.country}
            svg
            style={{ width: "1.2em", height: "1.2em" }}
          />
          <span className="text-white text-sm font-medium">{selected.code}</span>
          {open ? (
            <ChevronUp className="w-3.5 h-3.5 text-white/50" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-white/50" />
          )}
        </button>

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          className="flex-1 bg-transparent px-4 text-white placeholder:text-white/80 outline-none text-sm"
          required
        />
      </div>

      {/* Dropdown */}
      {open && (
        <ul className="absolute z-[9999] mt-1 w-48 bg-charcoal/95 backdrop-blur-xl border border-white/20 rounded-xl py-1 max-h-60 overflow-y-auto shadow-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {countryCodes.map((c) => (
            <li
              key={c.code}
              onClick={() => {
                onCountryCodeChange(c.code);
                setOpen(false);
              }}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors hover:bg-white/10 flex items-center gap-2 ${c.code === countryCode ? "text-primary font-medium" : "text-white/80"
                }`}
            >
              <ReactCountryFlag
                countryCode={c.country}
                svg
                style={{ width: "1.2em", height: "1.2em" }}
              />
              {c.code} {c.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+971",
    phone: "",
    email: "",
    intent: "",
    propertyCategory: "",
    propertyType: "",
    preferredArea: "",
    customArea: "",
    budget: "",
    customBudget: "",
  });

  const propertyTypes = [
    ...residentialTypes,
    ...commercialTypes
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroBg} alt="Luxury Ajman waterfront" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 space-y-12">
        {/* Hero Content — above form */}
        <div className="space-y-8 animate-slide-in-left text-left md:text-center relative z-0">
          <div>
            {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Premium Real Estate in Ajman
            </p> */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Discover
              <span className="text-gold-gradient"> Extraordinary </span>
              Living
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-md md:max-w-3xl lg:max-w-7xl leading-relaxed">
              Experience unparalleled luxury with Albaqa Estate. Your gateway to the finest properties in Ajman's most prestigious locations.
            </p>
          </div>

          {/* Stats */}
          {/* <div className="flex gap-8 max-w-7xl flex-wrap mx-auto justify-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <p className="text-xs text-white/50 mt-1 tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
        {/* Form — always on top */}
        <div className="animate-slide-in-right relative z-20">
          <div className="absolute inset-0 rounded-3xl force-glass
 border border-white/40 pointer-events-none transform translate-z-0" />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl p-8"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-serif font-semibold text-white">Get Exclusive Access</h3>
                <p className="text-sm text-white/60 mt-1">Connect with our luxury property specialists</p>
              </div>
              <p className="text-sm text-white text-bold text-right">
                100% Confidential · No spam · Ajman-based agents
              </p>
            </div>


            <div className="space-y-4 overflow-visible">
              {/* Row 1: Name | Phone | Email | I want to */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  required
                />
                <MergedPhoneInput
                  countryCode={formData.countryCode}
                  onCountryCodeChange={(val) => setFormData({ ...formData, countryCode: val })}
                  phone={formData.phone}
                  onPhoneChange={(val) => setFormData({ ...formData, phone: val })}
                />
                <Input
                  type="email"
                  placeholder="Email Address (Optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
                <CustomSelect
                  value={formData.intent}
                  onChange={(val) => setFormData({ ...formData, intent: val })}
                  placeholder="I want to"
                  required
                  options={[
                    { value: "Buy Property", label: "Buy Property" },
                    { value: "Sell Property", label: "Sell Property" },
                    { value: "Rent Property", label: "Rent Property" },
                    { value: "Investment Advice", label: "Investment Advice" },
                  ]}
                />
              </div>

              {/* Row 2: Property Category | Property Type | Preferred Area | Budget */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <CustomSelect
                  value={formData.propertyCategory}
                  onChange={(val) => setFormData({ ...formData, propertyCategory: val })}
                  placeholder="Property Category"
                  required
                  options={[
                    { value: "Residential", label: "Residential" },
                    { value: "Commercial", label: "Commercial" },
                  ]}
                />

                <CustomSelect
                  value={formData.propertyType}
                  onChange={(val) => setFormData({ ...formData, propertyType: val })}
                  placeholder="Select Property Type"
                  required
                  options={propertyTypes.map((t) => ({ value: t, label: t }))}
                />

                <CustomSelect
                  value={formData.preferredArea}
                  onChange={(val) => setFormData({ ...formData, preferredArea: val })}
                  placeholder="Preferred Area"
                  options={[
                    { value: "Al Nuaimiya", label: "Al Nuaimiya" },
                    { value: "Al Rashidiya", label: "Al Rashidiya" },
                    { value: "Al Yasmeen", label: "Al Yasmeen" },
                    { value: "Al Rawda", label: "Al Rawda" },
                    { value: "Other", label: "Other" },
                  ]}
                />

                <CustomSelect
                  value={formData.budget}
                  onChange={(val) => setFormData({ ...formData, budget: val })}
                  placeholder="Budget"
                  options={[
                    { value: "Under AED 300K", label: "Under AED 300K" },
                    { value: "AED 300K – 500K", label: "AED 300K – 500K" },
                    { value: "AED 500K – 1M", label: "AED 500K – 1M" },
                    { value: "AED 1M+", label: "AED 1M+" },
                    { value: "custom", label: "Custom Budget" },
                  ]}
                />
              </div>

              {/* Row 3: Custom Area | Custom Budget */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <Input
                  placeholder="Enter Preferred Location"
                  value={formData.customArea}
                  onChange={(e) => setFormData({ ...formData, customArea: e.target.value })}
                  className={inputClass}
                />
                <Input
                  placeholder="Enter Custom Budget (AED)"
                  value={formData.customBudget}
                  onChange={(e) => setFormData({ ...formData, customBudget: e.target.value })}
                  className={inputClass}
                />
              </div>

              {/* Row 4: Enquire Now button (centered) */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full lg:w-auto lg:px-32 rounded-xl h-12 gold-gradient text-primary-foreground font-semibold text-base border-0 hover:opacity-90 transition-opacity"
                >
                  Enquire Now
                </Button>
              </div>
            </div>


          </form>
        </div>



        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection; 