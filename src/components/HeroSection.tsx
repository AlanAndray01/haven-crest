import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useToast } from "@/hooks/use-toast";
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
  { code: "+93", country: "AF", label: "Afghanistan" },
  { code: "+355", country: "AL", label: "Albania" },
  { code: "+213", country: "DZ", label: "Algeria" },
  { code: "+1684", country: "AS", label: "American Samoa" },
  { code: "+376", country: "AD", label: "Andorra" },
  { code: "+244", country: "AO", label: "Angola" },
  { code: "+1264", country: "AI", label: "Anguilla" },
  { code: "+672", country: "AQ", label: "Antarctica" },
  { code: "+1268", country: "AG", label: "Antigua & Barbuda" },
  { code: "+54", country: "AR", label: "Argentina" },
  { code: "+374", country: "AM", label: "Armenia" },
  { code: "+297", country: "AW", label: "Aruba" },
  { code: "+61", country: "AU", label: "Australia" },
  { code: "+43", country: "AT", label: "Austria" },
  { code: "+994", country: "AZ", label: "Azerbaijan" },
  { code: "+1242", country: "BS", label: "Bahamas" },
  { code: "+973", country: "BH", label: "Bahrain" },
  { code: "+880", country: "BD", label: "Bangladesh" },
  { code: "+1246", country: "BB", label: "Barbados" },
  { code: "+375", country: "BY", label: "Belarus" },
  { code: "+32", country: "BE", label: "Belgium" },
  { code: "+501", country: "BZ", label: "Belize" },
  { code: "+229", country: "BJ", label: "Benin" },
  { code: "+1441", country: "BM", label: "Bermuda" },
  { code: "+975", country: "BT", label: "Bhutan" },
  { code: "+591", country: "BO", label: "Bolivia" },
  { code: "+387", country: "BA", label: "Bosnia & Herzegovina" },
  { code: "+267", country: "BW", label: "Botswana" },
  { code: "+55", country: "BR", label: "Brazil" },
  { code: "+246", country: "IO", label: "British Indian Ocean" },
  { code: "+1284", country: "VG", label: "British Virgin Islands" },
  { code: "+673", country: "BN", label: "Brunei" },
  { code: "+359", country: "BG", label: "Bulgaria" },
  { code: "+226", country: "BF", label: "Burkina Faso" },
  { code: "+257", country: "BI", label: "Burundi" },
  { code: "+855", country: "KH", label: "Cambodia" },
  { code: "+237", country: "CM", label: "Cameroon" },
  { code: "+1", country: "CA", label: "Canada" },
  { code: "+238", country: "CV", label: "Cape Verde" },
  { code: "+1345", country: "KY", label: "Cayman Islands" },
  { code: "+236", country: "CF", label: "Central African Rep" },
  { code: "+235", country: "TD", label: "Chad" },
  { code: "+56", country: "CL", label: "Chile" },
  { code: "+86", country: "CN", label: "China" },
  { code: "+61", country: "CX", label: "Christmas Island" },
  { code: "+61", country: "CC", label: "Cocos Islands" },
  { code: "+57", country: "CO", label: "Colombia" },
  { code: "+269", country: "KM", label: "Comoros" },
  { code: "+682", country: "CK", label: "Cook Islands" },
  { code: "+506", country: "CR", label: "Costa Rica" },
  { code: "+385", country: "HR", label: "Croatia" },
  { code: "+53", country: "CU", label: "Cuba" },
  { code: "+599", country: "CW", label: "Curaçao" },
  { code: "+357", country: "CY", label: "Cyprus" },
  { code: "+420", country: "CZ", label: "Czech Republic" },
  { code: "+243", country: "CD", label: "Dem. Rep. Congo" },
  { code: "+45", country: "DK", label: "Denmark" },
  { code: "+253", country: "DJ", label: "Djibouti" },
  { code: "+1767", country: "DM", label: "Dominica" },
  { code: "+1809", country: "DO", label: "Dominican Republic" },
  { code: "+593", country: "EC", label: "Ecuador" },
  { code: "+20", country: "EG", label: "Egypt" },
  { code: "+503", country: "SV", label: "El Salvador" },
  { code: "+240", country: "GQ", label: "Equatorial Guinea" },
  { code: "+291", country: "ER", label: "Eritrea" },
  { code: "+372", country: "EE", label: "Estonia" },
  { code: "+268", country: "SZ", label: "Eswatini" },
  { code: "+251", country: "ET", label: "Ethiopia" },
  { code: "+500", country: "FK", label: "Falkland Islands" },
  { code: "+298", country: "FO", label: "Faroe Islands" },
  { code: "+679", country: "FJ", label: "Fiji" },
  { code: "+358", country: "FI", label: "Finland" },
  { code: "+33", country: "FR", label: "France" },
  { code: "+594", country: "GF", label: "French Guiana" },
  { code: "+689", country: "PF", label: "French Polynesia" },
  { code: "+241", country: "GA", label: "Gabon" },
  { code: "+220", country: "GM", label: "Gambia" },
  { code: "+995", country: "GE", label: "Georgia" },
  { code: "+49", country: "DE", label: "Germany" },
  { code: "+233", country: "GH", label: "Ghana" },
  { code: "+350", country: "GI", label: "Gibraltar" },
  { code: "+30", country: "GR", label: "Greece" },
  { code: "+299", country: "GL", label: "Greenland" },
  { code: "+1473", country: "GD", label: "Grenada" },
  { code: "+590", country: "GP", label: "Guadeloupe" },
  { code: "+1671", country: "GU", label: "Guam" },
  { code: "+502", country: "GT", label: "Guatemala" },
  { code: "+44", country: "GG", label: "Guernsey" },
  { code: "+224", country: "GN", label: "Guinea" },
  { code: "+245", country: "GW", label: "Guinea-Bissau" },
  { code: "+592", country: "GY", label: "Guyana" },
  { code: "+509", country: "HT", label: "Haiti" },
  { code: "+504", country: "HN", label: "Honduras" },
  { code: "+852", country: "HK", label: "Hong Kong" },
  { code: "+36", country: "HU", label: "Hungary" },
  { code: "+354", country: "IS", label: "Iceland" },
  { code: "+91", country: "IN", label: "India" },
  { code: "+62", country: "ID", label: "Indonesia" },
  { code: "+98", country: "IR", label: "Iran" },
  { code: "+964", country: "IQ", label: "Iraq" },
  { code: "+353", country: "IE", label: "Ireland" },
  { code: "+44", country: "IM", label: "Isle of Man" },
  { code: "+972", country: "IL", label: "Israel" },
  { code: "+39", country: "IT", label: "Italy" },
  { code: "+225", country: "CI", label: "Ivory Coast" },
  { code: "+1876", country: "JM", label: "Jamaica" },
  { code: "+81", country: "JP", label: "Japan" },
  { code: "+44", country: "JE", label: "Jersey" },
  { code: "+962", country: "JO", label: "Jordan" },
  { code: "+7", country: "KZ", label: "Kazakhstan" },
  { code: "+254", country: "KE", label: "Kenya" },
  { code: "+686", country: "KI", label: "Kiribati" },
  { code: "+383", country: "XK", label: "Kosovo" },
  { code: "+965", country: "KW", label: "Kuwait" },
  { code: "+996", country: "KG", label: "Kyrgyzstan" },
  { code: "+856", country: "LA", label: "Laos" },
  { code: "+371", country: "LV", label: "Latvia" },
  { code: "+961", country: "LB", label: "Lebanon" },
  { code: "+266", country: "LS", label: "Lesotho" },
  { code: "+231", country: "LR", label: "Liberia" },
  { code: "+218", country: "LY", label: "Libya" },
  { code: "+423", country: "LI", label: "Liechtenstein" },
  { code: "+370", country: "LT", label: "Lithuania" },
  { code: "+352", country: "LU", label: "Luxembourg" },
  { code: "+853", country: "MO", label: "Macau" },
  { code: "+261", country: "MG", label: "Madagascar" },
  { code: "+265", country: "MW", label: "Malawi" },
  { code: "+60", country: "MY", label: "Malaysia" },
  { code: "+960", country: "MV", label: "Maldives" },
  { code: "+223", country: "ML", label: "Mali" },
  { code: "+356", country: "MT", label: "Malta" },
  { code: "+692", country: "MH", label: "Marshall Islands" },
  { code: "+596", country: "MQ", label: "Martinique" },
  { code: "+222", country: "MR", label: "Mauritania" },
  { code: "+230", country: "MU", label: "Mauritius" },
  { code: "+262", country: "YT", label: "Mayotte" },
  { code: "+52", country: "MX", label: "Mexico" },
  { code: "+691", country: "FM", label: "Micronesia" },
  { code: "+373", country: "MD", label: "Moldova" },
  { code: "+377", country: "MC", label: "Monaco" },
  { code: "+976", country: "MN", label: "Mongolia" },
  { code: "+382", country: "ME", label: "Montenegro" },
  { code: "+1664", country: "MS", label: "Montserrat" },
  { code: "+212", country: "MA", label: "Morocco" },
  { code: "+258", country: "MZ", label: "Mozambique" },
  { code: "+95", country: "MM", label: "Myanmar" },
  { code: "+264", country: "NA", label: "Namibia" },
  { code: "+674", country: "NR", label: "Nauru" },
  { code: "+977", country: "NP", label: "Nepal" },
  { code: "+31", country: "NL", label: "Netherlands" },
  { code: "+687", country: "NC", label: "New Caledonia" },
  { code: "+64", country: "NZ", label: "New Zealand" },
  { code: "+505", country: "NI", label: "Nicaragua" },
  { code: "+227", country: "NE", label: "Niger" },
  { code: "+234", country: "NG", label: "Nigeria" },
  { code: "+683", country: "NU", label: "Niue" },
  { code: "+672", country: "NF", label: "Norfolk Island" },
  { code: "+850", country: "KP", label: "North Korea" },
  { code: "+389", country: "MK", label: "North Macedonia" },
  { code: "+1670", country: "MP", label: "Northern Mariana" },
  { code: "+47", country: "NO", label: "Norway" },
  { code: "+968", country: "OM", label: "Oman" },
  { code: "+92", country: "PK", label: "Pakistan" },
  { code: "+680", country: "PW", label: "Palau" },
  { code: "+970", country: "PS", label: "Palestine" },
  { code: "+507", country: "PA", label: "Panama" },
  { code: "+675", country: "PG", label: "Papua New Guinea" },
  { code: "+595", country: "PY", label: "Paraguay" },
  { code: "+51", country: "PE", label: "Peru" },
  { code: "+63", country: "PH", label: "Philippines" },
  { code: "+48", country: "PL", label: "Poland" },
  { code: "+351", country: "PT", label: "Portugal" },
  { code: "+1787", country: "PR", label: "Puerto Rico" },
  { code: "+974", country: "QA", label: "Qatar" },
  { code: "+242", country: "CG", label: "Republic of Congo" },
  { code: "+262", country: "RE", label: "Réunion" },
  { code: "+40", country: "RO", label: "Romania" },
  { code: "+7", country: "RU", label: "Russia" },
  { code: "+250", country: "RW", label: "Rwanda" },
  { code: "+590", country: "BL", label: "Saint Barthélemy" },
  { code: "+290", country: "SH", label: "Saint Helena" },
  { code: "+1869", country: "KN", label: "Saint Kitts & Nevis" },
  { code: "+1758", country: "LC", label: "Saint Lucia" },
  { code: "+590", country: "MF", label: "Saint Martin" },
  { code: "+508", country: "PM", label: "St Pierre & Miquelon" },
  { code: "+1784", country: "VC", label: "St Vincent & Grenadines" },
  { code: "+685", country: "WS", label: "Samoa" },
  { code: "+378", country: "SM", label: "San Marino" },
  { code: "+239", country: "ST", label: "Sao Tome & Principe" },
  { code: "+966", country: "SA", label: "Saudi Arabia" },
  { code: "+221", country: "SN", label: "Senegal" },
  { code: "+381", country: "RS", label: "Serbia" },
  { code: "+248", country: "SC", label: "Seychelles" },
  { code: "+232", country: "SL", label: "Sierra Leone" },
  { code: "+65", country: "SG", label: "Singapore" },
  { code: "+1721", country: "SX", label: "Sint Maarten" },
  { code: "+421", country: "SK", label: "Slovakia" },
  { code: "+386", country: "SI", label: "Slovenia" },
  { code: "+677", country: "SB", label: "Solomon Islands" },
  { code: "+252", country: "SO", label: "Somalia" },
  { code: "+27", country: "ZA", label: "South Africa" },
  { code: "+82", country: "KR", label: "South Korea" },
  { code: "+211", country: "SS", label: "South Sudan" },
  { code: "+34", country: "ES", label: "Spain" },
  { code: "+94", country: "LK", label: "Sri Lanka" },
  { code: "+249", country: "SD", label: "Sudan" },
  { code: "+597", country: "SR", label: "Suriname" },
  { code: "+47", country: "SJ", label: "Svalbard & Jan Mayen" },
  { code: "+46", country: "SE", label: "Sweden" },
  { code: "+41", country: "CH", label: "Switzerland" },
  { code: "+963", country: "SY", label: "Syria" },
  { code: "+886", country: "TW", label: "Taiwan" },
  { code: "+992", country: "TJ", label: "Tajikistan" },
  { code: "+255", country: "TZ", label: "Tanzania" },
  { code: "+66", country: "TH", label: "Thailand" },
  { code: "+670", country: "TL", label: "Timor-Leste" },
  { code: "+228", country: "TG", label: "Togo" },
  { code: "+690", country: "TK", label: "Tokelau" },
  { code: "+676", country: "TO", label: "Tonga" },
  { code: "+1868", country: "TT", label: "Trinidad & Tobago" },
  { code: "+216", country: "TN", label: "Tunisia" },
  { code: "+90", country: "TR", label: "Turkey" },
  { code: "+993", country: "TM", label: "Turkmenistan" },
  { code: "+1649", country: "TC", label: "Turks & Caicos" },
  { code: "+688", country: "TV", label: "Tuvalu" },
  { code: "+971", country: "AE", label: "UAE" },
  { code: "+256", country: "UG", label: "Uganda" },
  { code: "+380", country: "UA", label: "Ukraine" },
  { code: "+44", country: "GB", label: "United Kingdom" },
  { code: "+1", country: "US", label: "United States" },
  { code: "+598", country: "UY", label: "Uruguay" },
  { code: "+1340", country: "VI", label: "US Virgin Islands" },
  { code: "+998", country: "UZ", label: "Uzbekistan" },
  { code: "+678", country: "VU", label: "Vanuatu" },
  { code: "+379", country: "VA", label: "Vatican City" },
  { code: "+58", country: "VE", label: "Venezuela" },
  { code: "+84", country: "VN", label: "Vietnam" },
  { code: "+681", country: "WF", label: "Wallis & Futuna" },
  { code: "+212", country: "EH", label: "Western Sahara" },
  { code: "+967", country: "YE", label: "Yemen" },
  { code: "+260", country: "ZM", label: "Zambia" },
  { code: "+263", country: "ZW", label: "Zimbabwe" },
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+971",
    mobileNumber: "",
    email: "",
    iWantTo: "",
    // propertyCategory: "",
    // propertyType: "",
    // preferredArea: "",
    // preferredLocation: "",
    // budget: "",
    // customBudget: "",
  });

  // const propertyTypes = [
  //   ...residentialTypes,
  //   ...commercialTypes
  // ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (formData.email && !formData.email.endsWith('@gmail.com')) {
      toast({
        title: 'Invalid Email',
        description: 'Email must end with @gmail.com',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.iWantTo) {
      toast({
        title: 'Missing Fields',
        description: 'Please select the "I want to" field before submitting.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const apiKey = import.meta.env.VITE_API_KEY || 'albaqa_sk_live_xK7mN3pQ9rT2vW5yZ8bC4dF6hJ1kL0nM';

      // Remove empty string fields
      const cleanedData = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v !== '')
      );

      const response = await fetch(`${apiUrl}/forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey,
        },
        body: JSON.stringify(cleanedData),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        // Mark submission so ThankYou page knows it's a valid visit
        sessionStorage.setItem('formSubmitted', 'true');
        // Full page refresh to Thank You page
        window.location.href = '/thank-you';
        return;
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
              {/* Single row: Name | Phone | Email | I Want To | Enquire Now */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={inputClass}
                  required
                />
                <MergedPhoneInput
                  countryCode={formData.countryCode}
                  onCountryCodeChange={(val) => setFormData({ ...formData, countryCode: val })}
                  phone={formData.mobileNumber}
                  onPhoneChange={(val) => setFormData({ ...formData, mobileNumber: val.replace(/\D/g, '') })}
                />
                <Input
                  type="email"
                  placeholder="Gmail Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
                <CustomSelect
                  value={formData.iWantTo}
                  onChange={(val) => setFormData({ ...formData, iWantTo: val })}
                  placeholder="I want to"
                  required
                  options={[
                    { value: "Buy Property", label: "Buy Property" },
                    { value: "Sell Property", label: "Sell Property" },
                    { value: "Rent Property", label: "Rent Property" },
                    { value: "Investment Advice", label: "Investment Advice" },
                  ]}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl h-12 gold-gradient text-primary-foreground font-semibold text-base border-0 hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? 'Submitting...' : 'Enquire Now'}
                </Button>
              </div>

              {/* Row 2 (commented): Property Category | Property Type | Preferred Area | Budget */}
              {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
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
                  required
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
                  required
                  options={[
                    { value: "Under AED 300K", label: "Under AED 300K" },
                    { value: "AED 300K – 500K", label: "AED 300K – 500K" },
                    { value: "AED 500K – 1M", label: "AED 500K – 1M" },
                    { value: "AED 1M+", label: "AED 1M+" },
                    { value: "custom", label: "Custom Budget" },
                  ]}
                />
              </div> */}

              {/* Row 3 (commented): Preferred Location | Custom Budget */}
              {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <Input
                  placeholder="Enter Preferred Location"
                  value={formData.preferredLocation}
                  onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                  className={inputClass}
                />
                <Input
                  placeholder="Enter Custom Budget (AED)"
                  value={formData.customBudget}
                  onChange={(e) => setFormData({ ...formData, customBudget: e.target.value })}
                  className={inputClass}
                />
              </div> */}
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