import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("1");

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "¿Necesito una orden médica previa para agendar una cita?",
      answer: "No, no es obligatorio contar con una orden o pase médico anterior. En nuestra primera consulta realizamos una valoración biomecánica, ortopédica y de postura completa para estructurar tu diagnóstico fisioterapéutico desde cero y diseñar un plan personalizado."
    },
    {
      id: "2",
      question: "¿Cuánto dura cada sesión y qué hacen en ella?",
      answer: "Cada sesión tiene una duración aproximada de 50 a 60 minutos. Durante este tiempo, la Dra. Valentina trabaja de forma 100% individual contigo. Se aplican técnicas de terapia manual, agentes físicos (electroterapia, ultrasonido o termoterapia) y ejercicio terapéutico adaptado, según las necesidades específicas de tu caso."
    },
    {
      id: "3",
      question: "¿Qué tipo de ropa debo llevar a mi cita?",
      answer: "Te recomendamos asistir con ropa cómoda, holgada o de tipo deportivo que te permita moverte libremente. Esto también nos facilita acceder fácilmente a la zona del cuerpo que vamos a tratar (por ejemplo, shorts para rodilla o playera de manga corta para hombros/cuello)."
    },
    {
      id: "4",
      question: "¿Con cuántas sesiones veré una mejoría en mi dolor?",
      answer: "La mayoría de nuestros pacientes reportan un alivio significativo y mayor movilidad desde la primera o segunda sesión. Sin embargo, el número total de sesiones necesarias varía según la gravedad del caso, la cronicidad del dolor y tu disciplina con las tareas posturales en casa."
    },
    {
      id: "5",
      question: "¿Tienen servicio de facturación para seguros médicos?",
      answer: "Sí, emitimos facturas de honorarios médicos (válidas para la deducción fiscal en salud o reembolso con aseguradoras que admitan la opción de médico particular). Solicita tu factura al agendar o finalizar tu consulta."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-transparent font-sans scroll-mt-10 overflow-hidden relative">
      <div className="absolute top-20 right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">PREGUNTAS FRECUENTES</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-teal tracking-tight">
            Resolvemos tus dudas <span className="text-brand-orange">al instante</span>
          </h2>
          <div className="w-16 h-1 bg-brand-teal rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Todo lo que necesitas saber antes de iniciar tu camino hacia una vida sin dolor.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-brand-beige/15 border-brand-teal/30 shadow-md"
                    : "bg-white border-brand-beige/20 hover:border-brand-teal/20"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-brand-teal hover:text-brand-orange transition-colors cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-brand-teal shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className={`p-1.5 rounded-full ${isOpen ? "bg-brand-teal text-white" : "bg-gray-100 text-gray-500"} transition-all`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed pl-11 text-left border-t border-brand-beige/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
