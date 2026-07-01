import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// @ts-expect-error - image asset compiled by Vite
import logoFisio from "../assets/images/logo_fisio.png";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-sans ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-100"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo on the left */}
            <a href="#inicio" className="flex items-center origin-left transition-transform duration-300">
              <img src={logoFisio} className="h-19 sm:h-21 w-auto object-contain" referrerPolicy="no-referrer" />
            </a>

            {/* Desktop Navigation in center */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-brand-dark/80 hover:text-brand-teal font-medium tracking-wide text-sm transition-colors relative py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Call to Action Button on the right */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+525512345678"
                className="flex items-center gap-1.5 text-xs font-semibold text-brand-teal hover:text-brand-orange transition-colors px-3 py-2"
              >
                <Phone size={14} className="text-brand-orange" />
                <span>+52 55 1234 5678</span>
              </a>
              <button
                onClick={onContactClick}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-display text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <Calendar size={15} />
                <span>Agendar Cita</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onContactClick}
                className="sm:hidden bg-brand-orange text-white p-2 rounded-full shadow-md hover:bg-brand-orange/90 transition-colors"
                aria-label="Agendar"
              >
                <Calendar size={18} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-teal p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Abrir menú"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-brand-cream shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden font-sans"
            >
              <div>
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                  <img src={logoFisio} alt="Valentina Guerrero Fisioterapia" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-brand-dark hover:text-brand-teal p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-brand-dark/80 hover:text-brand-teal text-lg font-medium tracking-wide py-2 border-b border-gray-50 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-6 flex flex-col gap-4">
                <a
                  href="tel:+525512345678"
                  className="flex items-center justify-center gap-2 text-brand-teal text-sm font-semibold border border-brand-teal/20 py-3 rounded-xl hover:bg-brand-teal/5 transition-colors"
                >
                  <Phone size={16} className="text-brand-orange" />
                  <span>+52 55 1234 5678</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-display text-sm font-semibold py-3.5 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  <span>Agendar Cita</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
