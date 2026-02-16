import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const ThankYou = () => {
  useEffect(() => {
    // If the user refreshes or visits directly, redirect to home
    const submitted = sessionStorage.getItem('formSubmitted');
    if (!submitted) {
      window.location.href = '/';
      return;
    }
    // Clear the flag so a subsequent refresh also redirects
    sessionStorage.removeItem('formSubmitted');
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero-style background section */}
      <section className="relative flex-1 flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Luxury Ajman waterfront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
          {/* Icon */}
          {/* <div className="relative mb-8"> */}
            {/* Decorative asterisk/star burst */}
            {/* <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            > */}
              {/* Star burst arms */}
              {/* {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
                (angle, i) => (
                  <line
                    key={i}
                    x1="60"
                    y1="60"
                    x2={60 + 50 * Math.cos((angle * Math.PI) / 180)}
                    y2={60 + 50 * Math.sin((angle * Math.PI) / 180)}
                    stroke={i % 2 === 0 ? "#8B5CF6" : "#F97316"}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                )
              )} */}
              {/* Center circle with checkmark */}
              {/* <circle cx="60" cy="60" r="28" fill="#8B5CF6" />
              <path
                d="M48 60 L56 68 L72 52"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg> */}
          {/* </div> */}

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Thank You
          </h1>

          {/* Description */}
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            Your enquiry has been submitted successfully. Our team will review
            your details and get back to you shortly. We appreciate your
            interest in Al Baqa Real Estate.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ThankYou;
