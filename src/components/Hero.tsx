import React from "react";
import { MessageCircle, Star, Shield, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

// @ts-expect-error - image asset compiled by Vite
import heroImgSrc from "../assets/images/physiotherapist_hero_1782931185524.jpg";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-24 pb-16 flex items-center bg-transparent overflow-hidden font-sans"
    >
      {/* Decorative organic background shapes */}
      <div className="absolute top-20 left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[40%] h-[40%] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-olive text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full"
            >
              <Shield size={14} className="text-brand-orange animate-pulse" />
              <span>Fisioterapia Especializada de Confianza</span>
            </motion.div>

            {/* Slogan */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-brand-teal tracking-tight leading-[1.05]"
            >
              Recupera tu <span className="text-brand-olive italic font-light">movimiento</span>.<br />
              Recupera tu <span className="text-brand-orange">vida</span>.
            </motion.h2>

            {/* Support Message */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
            >
              No dejes que el dolor de espalda, una lesión o el desgaste diario apaguen tu vitalidad. Diseñamos planes de rehabilitación personalizados para que vuelvas a moverte con libertad, seguridad y sin dolor.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
            >
              <a
                href="https://wa.me/525512345678?text=Hola%20Dra.%20Valentina%20Guerrero,%20me%20gustaría%20agendar%20una%20cita%20de%20fisioterapia%20para%20valoración%20inicial.%20¿Qué%20horarios%20tiene%20disponibles?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-base font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-3 animate-soft-pulse"
              >
                <MessageCircle size={20} className="fill-current text-white" />
                <span>Agendar por WhatsApp</span>
              </a>

              <a
                href="#valoracion"
                className="border border-brand-teal/20 hover:border-brand-teal/40 bg-white/50 hover:bg-white text-brand-teal font-display text-base font-semibold px-6 py-4 rounded-2xl shadow-xs transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <span>Autoevaluar mi Dolor</span>
                <ArrowRight size={16} className="text-brand-orange group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social Trust / Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 mt-4 border-t border-brand-beige/20 pt-6 w-full max-w-lg"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((id) => (
                  <div
                    key={id}
                    className="w-10 h-10 rounded-full border-2 border-white bg-brand-beige flex items-center justify-center overflow-hidden text-xs font-bold text-brand-teal"
                  >
                    <img
                      src={`https://picsum.photos/seed/patient${id}/100/100`}
                      alt="Paciente"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left font-sans">
                <div className="flex items-center gap-1 text-brand-orange">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={15} className="fill-current" />
                  ))}
                  <span className="text-brand-dark font-bold text-sm ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Más de <span className="font-semibold text-brand-dark">500+ pacientes</span> han recuperado su bienestar y movilidad con nosotros.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image & Floating Cards Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[400px] lg:max-w-none"
            >
              {/* Outer stylish border backdrop */}
              <div className="absolute inset-0 border-2 border-brand-teal/10 rounded-[2.5rem] transform translate-x-3 translate-y-3 -z-10" />

              {/* Main Image Container */}
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl relative bg-brand-beige/10 aspect-[3/4] lg:aspect-[3/4]">
                <img
                  src={heroImgSrc}
                  alt="Dra. Valentina Guerrero - Especialista en Fisioterapia y Movimiento Vital"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent pointer-events-none" />
              </div>



              {/* Floating Badge 2: Clincal Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-8 right-[-10px] sm:right-[-20px] bg-brand-teal text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-orange">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs text-white">Fisioterapia Clínica</h4>
                  <p className="text-[10px] text-gray-300 font-medium">100% Personalizado</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
