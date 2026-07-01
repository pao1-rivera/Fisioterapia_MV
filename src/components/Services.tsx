import React, { useState } from "react";
import {
  Activity,
  HeartHandshake,
  ShieldAlert,
  Zap,
  Dumbbell,
  Accessibility,
  Check,
  X,
  MessageCircle,
  Stethoscope
} from "lucide-react";
import { Service } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: "ortopedica",
      title: "Fisioterapia Ortopédica",
      description: "Tratamiento de lesiones óseas, articulares y de tendones como fracturas, esguinces, tendinitis y luxaciones.",
      iconName: "Stethoscope",
      symptoms: [
        "Dolor e inflamación en articulaciones",
        "Esguinces de tobillo o muñeca",
        "Recuperación tras fracturas o fisuras",
        "Rigidez articular post-inmovilización"
      ],
      benefits: [
        "Acelera la consolidación ósea y muscular",
        "Disminuye notablemente el dolor sin exceso de fármacos",
        "Recupera el rango completo de movimiento articular",
        "Fortalece tendones y ligamentos para prevenir recaídas"
      ]
    },
    {
      id: "deportiva",
      title: "Rehabilitación Deportiva",
      description: "Especializada en reintegrar al atleta a su disciplina en el menor tiempo y con la mayor seguridad posible.",
      iconName: "Activity",
      symptoms: [
        "Desgarres musculares o tirones",
        "Lesiones de ligamento cruzado anterior (LCA)",
        "Sobrecarga de entrenamiento",
        "Codo de tenista o fascitis plantar"
      ],
      benefits: [
        "Readaptación funcional específica del gesto deportivo",
        "Prevención de lesiones futuras mediante corrección técnica",
        "Optimización del rendimiento muscular y flexibilidad",
        "Acompañamiento en el retorno progresivo al deporte"
      ]
    },
    {
      id: "manual",
      title: "Terapia Manual",
      description: "Técnicas manuales pasivas avanzadas para movilizar tejidos, aliviar dolor y normalizar la biomecánica corporal.",
      iconName: "HeartHandshake",
      symptoms: [
        "Contracturas musculares severas",
        "Restricciones de movilidad articular",
        "Puntos gatillo activos (dolor irradiado)",
        "Dolor de cabeza de origen tensional"
      ],
      benefits: [
        "Alivio del dolor de forma inmediata en sesión",
        "Mejora instantánea de la circulación y flujo de nutrientes",
        "Liberación de fascias y tejidos profundos adheridos",
        "Sensación profunda de relajación y bienestar neuromuscular"
      ]
    },
    {
      id: "lumbar-cervical",
      title: "Dolor Lumbar y Cervical",
      description: "Diagnóstico y tratamiento preciso de las dolencias de columna, ciática, dolor de cuello y hernias discales.",
      iconName: "ShieldAlert",
      symptoms: [
        "Dolor sordo o agudo en la espalda baja (lumbalgia)",
        "Dolor de cuello (cervicalgia) y hombros por estrés",
        "Pinchazo del nervio ciático (dolor que baja a la pierna)",
        "Adormecimiento de brazos, manos o dedos"
      ],
      benefits: [
        "Descompresión segura de los discos intervertebrales",
        "Higiene de columna y reeducación postural para el trabajo",
        "Fortalecimiento del core profundo (músculos de soporte)",
        "Eliminación de la dependencia de analgésicos y antiinflamatorios"
      ]
    },
    {
      id: "electroterapia",
      title: "Electroterapia",
      description: "Uso de corrientes terapéuticas, ultrasonido y termoterapia para modular el dolor, desinflamar y bioestimular.",
      iconName: "Zap",
      symptoms: [
        "Dolores inflamatorios agudos o crónicos",
        "Edemas o inflamaciones localizadas persistentes",
        "Atrofia muscular por desuso temporal",
        "Procesos degenerativos crónicos como artrosis"
      ],
      benefits: [
        "Analgesia localizada de acción rápida",
        "Estimulación del metabolismo celular para autocuración",
        "Facilitación de la contracción en músculos debilitados",
        "Mejora del drenaje linfático y reabsorción de líquidos"
      ]
    },
    {
      id: "ejercicio",
      title: "Ejercicio Terapéutico",
      description: "Prescripción personalizada de movimiento asistido para reestablecer la fuerza, balance y control motor óptimos.",
      iconName: "Dumbbell",
      symptoms: [
        "Debilidad muscular generalizada o asimetrías",
        "Pérdida de equilibrio y caídas frecuentes",
        "Falta de condición física tras periodos de reposo",
        "Inestabilidad en rodillas, cadera o tobillos"
      ],
      benefits: [
        "Independencia funcional a largo plazo",
        "Fortalecimiento del tejido óseo, muscular y de cartílago",
        "Mejora notable del equilibrio dinámico y coordinación",
        "Mejoría del estado de ánimo y energía general"
      ]
    },
    {
      id: "adulto-mayor",
      title: "Adulto Mayor",
      description: "Fisioterapia adaptada y de bajo impacto para mantener la autonomía, movilidad y fuerza en la tercera edad.",
      iconName: "Accessibility",
      symptoms: [
        "Rigidez matutina por artrosis o artritis",
        "Dificultad para levantarse, caminar o subir escaleras",
        "Miedo a caerse o inseguridad al andar",
        "Recuperación tras prótesis de cadera o rodilla"
      ],
      benefits: [
        "Preserva y aumenta la autonomía en actividades del hogar",
        "Reduce drásticamente el riesgo de caídas y fracturas",
        "Disminuye dolores articulares crónicos por desgaste",
        "Mejora la calidad de vida y longevidad activa del paciente"
      ]
    }
  ];

  // Helper to get the correct icon component
  const getIcon = (name: string) => {
    switch (name) {
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Dumbbell":
        return <Dumbbell className="w-6 h-6" />;
      case "Accessibility":
        return <Accessibility className="w-6 h-6" />;
      default:
        return <Activity className="w-6 h-6" />;
    }
  };

  const getWhatsAppLink = (serviceTitle: string) => {
    const message = `Hola Dra. Valentina Guerrero, me gustaría solicitar información, costos y disponibilidad para el tratamiento de *${serviceTitle}* en Fisioterapia Movimiento Vital.`;
    return `https://wa.me/525512345678?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicios" className="py-24 bg-transparent font-sans scroll-mt-10 relative">
      <div className="absolute top-0 right-0 w-[20%] h-[20%] rounded-full bg-brand-olive/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">NUESTROS SERVICIOS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-teal tracking-tight">
            Soluciones terapéuticas diseñadas <br className="hidden sm:inline" /> para <span className="text-brand-orange">aliviar tu dolor</span> y restaurar tu vida
          </h2>
          <div className="w-16 h-1 bg-brand-teal rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Selecciona cualquiera de nuestros tratamientos especializados para conocer en detalle qué síntomas tratamos, los beneficios clínicos que obtendrás y agendar tu cita directa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedService(service)}
              className="bg-white p-8 rounded-[2rem] border border-brand-beige/20 hover:border-brand-teal/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left cursor-pointer group relative transform hover:-translate-y-1"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/5 text-brand-teal flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-brand-teal group-hover:text-brand-orange transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-brand-beige/10 flex items-center justify-between text-brand-teal font-display text-xs font-bold tracking-wider uppercase group-hover:text-brand-orange transition-colors">
                <span>Ver detalles clínicos</span>
                <span className="w-6 h-6 rounded-full bg-brand-teal/5 flex items-center justify-center group-hover:bg-brand-orange/10 transition-colors">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail Dialog */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-brand-dark/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            >
              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[2.5rem] shadow-2xl border border-brand-beige/20 max-w-2xl w-full overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="bg-brand-teal p-6 sm:p-8 text-white relative text-left">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
                    aria-label="Cerrar modal"
                  >
                    <X size={16} />
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-orange flex items-center justify-center">
                      {getIcon(selectedService.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-beige/80">Tratamiento de Especialidad</span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl mt-0.5">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-left">
                  {/* Brief */}
                  <div>
                    <h4 className="font-display font-bold text-xs text-brand-dark tracking-wider uppercase mb-2">DESCRIPCIÓN DEL TRATAMIENTO</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 pt-2">
                    {/* Symptoms */}
                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-xs text-brand-teal tracking-wider uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                        ¿Qué atendemos? (Síntomas)
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.symptoms.map((sym, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs text-gray-500">
                            <span className="text-brand-orange shrink-0 mt-0.5">▪</span>
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-xs text-brand-teal tracking-wider uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                        Beneficios Clínicos
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((ben, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs text-gray-500">
                            <Check size={14} className="text-brand-olive shrink-0 mt-0.5 stroke-[3px]" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Modal Footer / WhatsApp Booking */}
                <div className="p-6 bg-brand-cream border-t border-brand-beige/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Sesiones individuales y guiadas de:</p>
                    <p className="text-sm font-semibold text-brand-dark">50 a 60 minutos aprox.</p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="border border-gray-300 hover:border-gray-400 bg-white text-gray-600 font-display text-xs font-semibold px-5 py-3 rounded-xl transition-all"
                    >
                      Cerrar
                    </button>
                    <a
                      href={getWhatsAppLink(selectedService.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={15} className="fill-current text-white" />
                      <span>Agendar Tratamiento</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
