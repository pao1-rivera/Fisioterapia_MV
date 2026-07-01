import React from "react";
import { CheckCircle2, Award, Heart, ShieldAlert, Sparkles, Send } from "lucide-react";
import { motion } from "motion/react";

export default function AboutMe() {
  const achievements = [
    {
      title: "Licenciatura en Fisioterapia y Rehabilitación",
      desc: "Egresada con mención honorífica, especializada en terapia manual ortopédica.",
    },
    {
      title: "Certificación en Fisioterapia Deportiva Avanzada",
      desc: "Amplia experiencia en readaptación funcional y manejo de atletas de alto rendimiento.",
    },
    {
      title: "Especialidad en Dolor Lumbar y Cervicobraquial",
      desc: "Tratamiento avanzado de hernias discales, ciática y contracturas crónicas sin cirugía.",
    },
    {
      title: "Formación en Neurorehabilitación y Adulto Mayor",
      desc: "Enfoque clínico empático para devolver la autonomía física y fuerza muscular a personas de la tercera edad.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-transparent font-sans scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column / Quote and Experience Card */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-md bg-[#C8C0B2] p-8 sm:p-10 rounded-[2.5rem] text-brand-dark shadow-2xl relative"
            >
              {/* Background elegant leaf pattern */}
              <div className="absolute right-4 bottom-4 text-brand-dark/5 pointer-events-none">
                <Sparkles size={160} />
              </div>

              {/* Patient Trust Quote */}
              <div className="relative">
                <span className="text-6xl font-serif text-brand-orange leading-none absolute -top-6 -left-2 opacity-50 select-none">“</span>
                <p className="font-display italic text-base sm:text-lg leading-relaxed text-brand-dark pt-2 pl-4 z-10 relative">
                  Cada pequeño avance hoy es un gran cambio mañana. Creo firmemente que sanar no es solo quitar un síntoma físico, sino devolverte la confianza en tu propio cuerpo y la libertad de disfrutar tu vida sin dolor.
                </p>
                <div className="mt-6 flex items-center gap-3 pl-4">
                  <div className="w-1.5 h-10 bg-brand-orange rounded-full" />
                  <div>
                    <h4 className="font-display font-semibold text-brand-dark tracking-wide text-sm">Dra. Valentina Guerrero</h4>
                    <p className="text-xs text-brand-olive font-semibold">Fundadora de Fisioterapia Movimiento Vital</p>
                  </div>
                </div>
              </div>

              {/* Fast Stats Container */}
              <div className="mt-8 pt-8 border-t border-brand-dark/10 grid grid-cols-2 gap-4">
                <div className="text-left">
                  <h5 className="font-display font-bold text-3xl text-brand-orange">8+</h5>
                  <p className="text-[10px] text-brand-dark/75 font-semibold uppercase tracking-wider mt-1">Años de Trayectoria</p>
                </div>
                <div className="text-left">
                  <h5 className="font-display font-bold text-3xl text-brand-orange">1,200+</h5>
                  <p className="text-[10px] text-brand-dark/75 font-semibold uppercase tracking-wider mt-1">Pacientes Aliviados</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copy and Achievements Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left order-1 lg:order-2">
            
            {/* Header */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">CONOCE A LA DOCTORA</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-teal tracking-tight">
                Una fisioterapeuta con <span className="text-brand-olive">corazón y experiencia</span> para tu bienestar
              </h2>
              <div className="w-16 h-1 bg-brand-teal rounded-full mt-2" />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Hola, soy la <strong>Dra. Valentina Guerrero</strong>. Mi misión como fisioterapeuta es acompañar tu proceso de recuperación de forma integral y humana. No trato "enfermedades" o "dolores" genéricos; analizo tu biomecánica, escucho tu historia clínica y construyo contigo el camino para restablecer tu movilidad y vitalidad óptimas. 
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed -mt-3">
              En <strong>Fisioterapia Movimiento Vital</strong>, combinamos la calidez humana de un servicio empático con técnicas terapéuticas avanzadas respaldadas clínicamente, asegurando sesiones que realmente marcan la diferencia desde el primer día.
            </p>

            {/* Grid of accomplishments */}
            <div className="grid sm:grid-cols-2 gap-6 w-full mt-2">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white/70 p-4 rounded-2xl border border-brand-beige/40 hover:border-brand-teal/20 hover:bg-brand-beige/10 transition-all duration-300">
                  <div className="text-brand-teal shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-brand-teal" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-brand-teal leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Humanized Direct CTA to WhatsApp */}
            <div className="mt-4 w-full flex flex-col sm:flex-row items-center gap-4 border-t border-brand-beige/20 pt-6">
              <p className="text-xs text-gray-500 text-center sm:text-left">
                ¿Tienes dudas sobre tu caso clínico o diagnóstico anterior? Escríbeme de forma directa y te orientaré con gusto.
              </p>
              <a
                href="https://wa.me/525512345678?text=Hola%20Dra.%20Valentina%20Guerrero,%20vi%20su%20perfil%20profesional%20y%20me%20gustaría%20hacerle%20una%20consulta%20rápida%20sobre%20mi%20dolor."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-teal hover:bg-brand-teal/95 text-white font-display text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
              >
                <Send size={15} />
                <span>Hablar con la Dra. Valentina</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
