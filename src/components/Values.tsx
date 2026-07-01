import React from "react";
import { Award, Heart, Leaf, Handshake, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Values() {
  const values = [
    {
      title: "Profesionalismo",
      desc: "Tratamientos basados en evidencia científica y constante actualización médica.",
      icon: Award,
      color: "text-brand-teal bg-brand-teal/5",
    },
    {
      title: "Empatía",
      desc: "Escuchamos tu dolor y diseñamos terapias humanas adaptadas a tu ritmo de vida.",
      icon: Heart,
      color: "text-brand-orange bg-brand-orange/5",
    },
    {
      title: "Bienestar",
      desc: "Buscamos tu alivio integral para que vuelvas a disfrutar tu día a día sin limitaciones.",
      icon: Leaf,
      color: "text-brand-olive bg-brand-olive/5",
    },
    {
      title: "Compromiso",
      desc: "Acompañamiento cercano en cada etapa de tu recuperación física.",
      icon: Handshake,
      color: "text-brand-dark bg-brand-dark/5",
    },
    {
      title: "Innovación",
      desc: "Equipamiento de vanguardia y técnicas de fisioterapia de última generación.",
      icon: Sparkles,
      color: "text-brand-teal bg-brand-teal/5",
    },
  ];

  return (
    <section className="bg-brand-beige/30 border-y border-brand-beige/40 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4 bg-white/60 rounded-2xl hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md border border-brand-beige/20 first:col-span-2 first:lg:col-span-1"
              >
                <div className={`p-3 rounded-full ${val.color} mb-3 flex items-center justify-center`}>
                  <Icon size={20} className="stroke-[2px]" />
                </div>
                <h3 className="font-display font-semibold text-brand-dark text-sm sm:text-base tracking-wide">
                  {val.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1.5 leading-relaxed hidden sm:block">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
