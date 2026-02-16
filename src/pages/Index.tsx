import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertyTypesCarousel from "@/components/PropertyTypesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <PropertyTypesCarousel />
      <TestimonialsSection />
      <FAQSection />
      <SEOContent />
      <MapSection />
      <Footer />

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* Phone Button */}
        <a
          href="tel:+971XXXXXXXXX"
          className="hover:scale-110 transition-transform duration-200 cursor-pointer"
          aria-label="Call us"
        >
          <svg width="50" height="50" viewBox="0 0 66 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dddd_3641_1251)">
              <rect x="5" y="1.5" width="56" height="53.3333" rx="26.6667" fill="#44CA4E"></rect>
              <path d="M40.9167 29.9297C40.9167 27.1672 39.9547 24.824 38.0309 22.9002C36.1071 20.9764 33.7634 20.014 31 20.013V17.1797C32.7708 17.1797 34.4297 17.5164 35.9767 18.1898C37.5237 18.8632 38.8696 19.7722 40.0142 20.9169C41.1589 22.0615 42.0679 23.4074 42.7413 24.9544C43.4147 26.5014 43.7509 28.1598 43.75 29.9297H40.9167ZM35.25 29.9297C35.25 28.7491 34.8368 27.7457 34.0104 26.9193C33.184 26.0929 32.1806 25.6797 31 25.6797V22.8464C32.9597 22.8464 34.6304 23.5372 36.0122 24.9189C37.3939 26.3007 38.0843 27.9709 38.0833 29.9297H35.25ZM42.2625 42.7505C39.3111 42.7505 36.3895 42.113 33.4976 40.838C30.6057 39.563 27.9787 37.745 25.6167 35.3839C23.2546 33.0227 21.4366 30.4019 20.1625 27.5214C18.8884 24.6408 18.2509 21.713 18.25 18.738V17.2505H26.6083L27.9187 24.3693L23.8812 28.4422C24.4007 29.363 24.9792 30.2366 25.6167 31.063C26.2542 31.8894 26.9389 32.6568 27.6708 33.3651C28.3556 34.0498 29.1054 34.7053 29.9205 35.3314C30.7356 35.9576 31.6148 36.5417 32.5583 37.0839L36.6667 32.9755L43.75 34.4276V42.7505H42.2625Z" fill="white"></path>
            </g>
            <defs>
              <filter id="filter0_dddd_3641_1251" x="0.915178" y="0.332908" width="64.1696" height="69.0878" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="0.583546"></feOffset>
                <feGaussianBlur stdDeviation="0.875319"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3641_1251"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2.91773"></feOffset>
                <feGaussianBlur stdDeviation="1.45886"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect1_dropShadow_3641_1251" result="effect2_dropShadow_3641_1251"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="5.83546"></feOffset>
                <feGaussianBlur stdDeviation="1.75064"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect2_dropShadow_3641_1251" result="effect3_dropShadow_3641_1251"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="10.5038"></feOffset>
                <feGaussianBlur stdDeviation="2.04241"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect3_dropShadow_3641_1251" result="effect4_dropShadow_3641_1251"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_3641_1251" result="shape"></feBlend>
              </filter>
            </defs>
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/971XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <svg width="47" height="53" viewBox="0 0 47 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3455_1546)" filter="url(#filter0_dddd_3455_1546)">
              <path d="M3.87492 21.2503C3.87396 24.6951 4.78109 28.0587 6.50597 31.0234L3.70996 41.1529L14.1573 38.4348C17.0469 39.9957 20.2844 40.8135 23.5745 40.8138H23.5831C34.4441 40.8138 43.2852 32.0444 43.2899 21.2657C43.2919 16.0426 41.2439 11.1312 37.5228 7.43613C33.8024 3.74137 28.8543 1.70551 23.5823 1.70312C12.72 1.70312 3.87941 10.472 3.87492 21.2503Z" fill="url(#paint0_linear_3455_1546)"></path>
              <path d="M3.17137 21.2483C3.17025 24.817 4.10988 28.3009 5.89627 31.3718L3 41.8644L13.8219 39.049C16.8037 40.6621 20.1609 41.5126 23.577 41.5139H23.5858C34.8365 41.5139 43.9952 32.429 44 21.2645C44.0019 15.8538 41.8802 10.7658 38.0262 6.93833C34.1717 3.11134 29.0467 1.00222 23.5858 1C12.3333 1 3.17585 10.0836 3.17137 21.2483ZM9.61621 30.8429L9.21214 30.2065C7.51352 27.5265 6.61697 24.4296 6.61825 21.2496C6.62177 11.9697 14.233 4.41985 23.5922 4.41985C28.1247 4.42175 32.3842 6.1749 35.588 9.35574C38.7916 12.5369 40.5544 16.7656 40.5533 21.2632C40.5491 30.543 32.9377 38.0939 23.5858 38.0939H23.5791C20.5341 38.0923 17.5476 37.2809 14.9432 35.7475L14.3234 35.3828L7.90142 37.0535L9.61621 30.8429Z" fill="url(#paint1_linear_3455_1546)"></path>
              <path d="M18.4836 12.7808C18.1015 11.9381 17.6993 11.9211 17.336 11.9063C17.0384 11.8936 16.6982 11.8945 16.3584 11.8945C16.0182 11.8945 15.4655 12.0215 14.9983 12.5277C14.5307 13.0343 13.2129 14.2586 13.2129 16.7486C13.2129 19.2386 15.0408 21.6452 15.2956 21.9832C15.5507 22.3206 18.8243 27.5941 24.0089 29.6228C28.3177 31.3087 29.1946 30.9734 30.1297 30.8888C31.065 30.8046 33.1477 29.6649 33.5726 28.483C33.9978 27.3013 33.9978 26.2884 33.8703 26.0767C33.7428 25.8659 33.4027 25.7392 32.8926 25.4862C32.3825 25.2332 29.8746 24.0086 29.4071 23.8397C28.9394 23.6709 28.5994 23.5867 28.2593 24.0935C27.9191 24.5995 26.9423 25.7392 26.6446 26.0767C26.3471 26.4151 26.0494 26.4572 25.5395 26.204C25.0291 25.9501 23.3863 25.4163 21.4374 23.6922C19.921 22.3507 18.8973 20.694 18.5997 20.1872C18.3022 19.6812 18.5679 19.4069 18.8236 19.1547C19.0528 18.928 19.3339 18.5637 19.5892 18.2683C19.8435 17.9727 19.9284 17.7618 20.0985 17.4243C20.2687 17.0865 20.1835 16.7909 20.0562 16.5377C19.9284 16.2846 18.9372 13.7815 18.4836 12.7808Z" fill="white"></path>
            </g>
            <defs>
              <filter id="filter0_dddd_3455_1546" x="0.0412371" y="0.154639" width="46.9175" height="52.4124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="0.42268"></feOffset>
                <feGaussianBlur stdDeviation="0.634021"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3455_1546"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2.1134"></feOffset>
                <feGaussianBlur stdDeviation="1.0567"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect1_dropShadow_3455_1546" result="effect2_dropShadow_3455_1546"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="4.2268"></feOffset>
                <feGaussianBlur stdDeviation="1.26804"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect2_dropShadow_3455_1546" result="effect3_dropShadow_3455_1546"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="7.60825"></feOffset>
                <feGaussianBlur stdDeviation="1.47938"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect3_dropShadow_3455_1546" result="effect4_dropShadow_3455_1546"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_3455_1546" result="shape"></feBlend>
              </filter>
              <linearGradient id="paint0_linear_3455_1546" x1="1982.7" y1="3946.68" x2="1982.7" y2="1.70312" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1FAF38"></stop>
                <stop offset="1" stopColor="#60D669"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_3455_1546" x1="2053" y1="4087.44" x2="2053" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9F9F9"></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
              <clipPath id="clip0_3455_1546">
                <rect width="41" height="41" fill="white" transform="translate(3 1)"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </main>
  );
};

export default Index;
