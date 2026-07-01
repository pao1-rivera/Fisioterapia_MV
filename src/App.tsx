import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import AssessmentQuiz from "./components/AssessmentQuiz";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { motion, AnimatePresence } from "motion/react";
import { HeartPulse } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a highly polished asset loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-leaf-pattern text-brand-dark selection:bg-brand-teal selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Human-centric "Breathing" Loader representing respiration & vitality */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-brand-cream z-50 flex flex-col items-center justify-center font-sans"
          >
            <div className="flex flex-col items-center gap-6 max-w-xs text-center">
              {/* Pulsing Vital Sign Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-20 h-20 rounded-full bg-brand-teal/5 border border-brand-teal/10 flex items-center justify-center text-brand-teal"
              >
                <HeartPulse size={38} className="text-brand-orange stroke-[1.5px]" />
              </motion.div>

              <div className="space-y-1">
                <h2 className="font-cursive text-3xl text-brand-teal tracking-wide">
                  Fisioterapia
                </h2>
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-olive">
                  Movimiento Vital
                </p>
              </div>

              {/* Loader Sublabel */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.4 }}
                className="text-[10px] uppercase tracking-wider font-semibold text-gray-500"
              >
                Iniciando bienestar postural...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          /* Beautiful Fisioterapia Landing Page Main Content */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Header / Sticky Navigation Menu */}
            <Header onContactClick={handleContactClick} />

            <main>
              {/* Hero Section */}
              <Hero onContactClick={handleContactClick} />

              {/* Value Statements Banner / Trust Bar */}
              <Values />

              {/* Biography & Professional Profile Section */}
              <AboutMe />

              {/* Treatments & Services Interactive Cards */}
              <Services />

              {/* Dynamic Assessment Tool */}
              <AssessmentQuiz />

              {/* Heartfelt Testimonials */}
              <Testimonials />

              {/* Frequently Asked Questions */}
              <FAQ />

              {/* Contacts, Location Map Frame & Footer Block */}
              <Contact />
            </main>

            {/* High-conversion Sticky WhatsApp trigger button */}
            <WhatsAppFloat />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
