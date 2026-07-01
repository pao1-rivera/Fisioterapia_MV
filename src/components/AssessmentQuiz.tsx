import React, { useState } from "react";
import { 
  Activity, 
  HelpCircle, 
  Sparkles, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  TrendingUp, 
  FileText,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Option {
  label: string;
  value: string;
  icon?: string;
}

export default function AssessmentQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    bodyPart: "",
    intensity: "",
    duration: ""
  });

  const bodyParts: Option[] = [
    { label: "Dolor en Cuello / Cervical", value: "Cuello / Cervical" },
    { label: "Dolor en Espalda Alta / Hombros", value: "Espalda Alta / Hombros" },
    { label: "Dolor Lumbar / Espalda Baja", value: "Espalda Baja / Lumbar" },
    { label: "Dolor en Cadera / Glúteos", value: "Cadera / Glúteos" },
    { label: "Dolor en Rodilla", value: "Rodilla" },
    { label: "Dolor en Tobillo o Pie", value: "Tobillo / Pie" },
    { label: "Lesión Deportiva / Desgarre", value: "Lesión Deportiva" },
    { label: "Otro Dolor / Rigidez Corporal", value: "Otra articulación o músculo" }
  ];

  const intensities: Option[] = [
    { label: "Leve (Es una molestia tolerable, puedo realizar mis actividades)", value: "Leve" },
    { label: "Moderado (Interfiere con mi trabajo, ejercicio o concentración)", value: "Moderado" },
    { label: "Severo (Es incapacitante, me despierta por las noches o limita caminar)", value: "Severo" }
  ];

  const durations: Option[] = [
    { label: "Reciente (Menos de una semana)", value: "Menos de 1 semana" },
    { label: "Agudo (Algunas semanas)", value: "Algunas semanas" },
    { label: "Crónico (Meses o Años)", value: "Meses o Años" }
  ];

  const handleSelect = (field: "bodyPart" | "intensity" | "duration", value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    // Auto-advance with slight delay for delightful UX
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 250);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ bodyPart: "", intensity: "", duration: "" });
  };

  // Generate recommendation based on selected parameters
  const getRecommendation = () => {
    const { bodyPart, intensity, duration } = answers;
    
    let advice = "Te sugerimos evitar movimientos repetitivos y agendar una valoración.";
    let tips: string[] = [];

    if (intensity === "Severo") {
      advice = "⚠️ Tu dolor requiere atención prioritaria. No apliques calor directo si hay inflamación reciente, y evita cargar objetos pesados.";
      tips = [
        "Aplica compresas frías por 15 minutos para modular el dolor agudo.",
        "Evita reposar en cama de forma prolongada, el movimiento suave y controlado ayuda.",
        "No realices estiramientos forzados que puedan irritar los nervios."
      ];
    } else {
      tips = [
        "Realiza pausas activas cada 45 minutos si trabajas sentado.",
        "Mantén una hidratación constante para favorecer la elasticidad de fascias y tendones.",
        "Aplica compresas húmedo-calientes por 15 minutos para relajar las fibras musculares."
      ];
    }

    if (bodyPart.includes("Lumbar") || bodyPart.includes("Espalda")) {
      advice = "Tu zona lumbar y de columna está bajo estrés muscular o compresión de discos.";
      tips.unshift("Cuida tu postura al sentarte apoyando completamente la espalda baja en un cojín lumbar.");
    } else if (bodyPart.includes("Cuello")) {
      advice = "La tensión cervical suele asociarse a estrés acumulado o posturas de oficina.";
      tips.unshift("Ajusta la pantalla de tu celular y computadora a la altura de tus ojos para evitar flexionar el cuello.");
    } else if (bodyPart.includes("Rodilla") || bodyPart.includes("Tobillo")) {
      advice = "Tus articulaciones de soporte inferior requieren una revisión biomecánica.";
      tips.unshift("Utiliza calzado amortiguado y evita superficies duras mientras persista el dolor.");
    }

    return { advice, tips };
  };

  const getWhatsAppMessage = () => {
    const { bodyPart, intensity, duration } = answers;
    const message = `Hola Dra. Valentina Guerrero, acabo de realizar la autoevaluación rápida en su sitio web:\n\n` +
      `- *Zona de molestia:* ${bodyPart}\n` +
      `- *Intensidad del dolor:* ${intensity}\n` +
      `- *Duración:* ${duration}\n\n` +
      `Me gustaría recibir orientación o agendar una sesión de valoración personalizada. ¿Qué horarios tiene disponibles?`;
    
    return `https://wa.me/525512345678?text=${encodeURIComponent(message)}`;
  };

  const progressPercentage = ((step - 1) / 3) * 100;

  return (
    <section id="valoracion" className="py-24 bg-transparent font-sans scroll-mt-10 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">AUTOVALORACIÓN RÁPIDA</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-teal tracking-tight">
            ¿Sientes molestias? <span className="text-brand-orange">Evalúa tu dolor</span> en 15 segundos
          </h2>
          <div className="w-16 h-1 bg-brand-teal rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-2xl">
            Responde 3 preguntas guiadas para obtener recomendaciones de higiene postural y enviar tu diagnóstico preliminar directamente a la doctora.
          </p>
        </div>

        {/* Main Quiz Card */}
        <div className="bg-white/95 backdrop-blur-md border border-brand-beige/25 rounded-[2.5rem] p-6 sm:p-10 shadow-xl relative min-h-[420px] flex flex-col justify-between">
          
          {/* Progress Bar */}
          {step <= 3 && (
            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mb-8">
              <div 
                className="bg-brand-teal h-full transition-all duration-300"
                style={{ width: `${progressPercentage || 10}%` }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            
            {/* STEP 1: Body Part */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">PREGUNTA 1 DE 3</span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mt-1">
                    ¿En qué parte del cuerpo localizas el dolor o molestia principal?
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                  {bodyParts.map((part) => (
                    <button
                      key={part.value}
                      onClick={() => handleSelect("bodyPart", part.value)}
                      className={`p-4 rounded-2xl border text-left text-sm sm:text-base font-semibold transition-all flex items-center justify-between group cursor-pointer ${
                        answers.bodyPart === part.value
                          ? "bg-brand-teal border-brand-teal text-white shadow-md"
                          : "bg-white border-brand-beige/20 text-brand-dark hover:border-brand-teal hover:bg-brand-teal/5"
                      }`}
                    >
                      <span>{part.label}</span>
                      <ChevronRight 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          answers.bodyPart === part.value ? "text-brand-orange" : "text-gray-400 group-hover:translate-x-1"
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Intensity */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">PREGUNTA 2 DE 3</span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mt-1">
                    ¿Qué tan intenso sientes este malestar en tu día a día?
                  </h3>
                </div>

                <div className="flex flex-col gap-3.5 pt-2">
                  {intensities.map((intensity) => (
                    <button
                      key={intensity.value}
                      onClick={() => handleSelect("intensity", intensity.value)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                        answers.intensity === intensity.value
                          ? "bg-brand-teal border-brand-teal text-white shadow-md"
                          : "bg-white border-brand-beige/20 text-brand-dark hover:border-brand-teal hover:bg-brand-teal/5"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pr-4">
                        <span className={`text-sm sm:text-base font-bold ${answers.intensity === intensity.value ? "text-white" : "text-brand-dark"}`}>
                          {intensity.value === "Leve" && "🟢 Leve"}
                          {intensity.value === "Moderado" && "🟡 Moderado"}
                          {intensity.value === "Severo" && "🔴 Severo"}
                        </span>
                        <span className={`text-xs ${answers.intensity === intensity.value ? "text-gray-200" : "text-gray-500"}`}>
                          {intensity.label.split("(")[1]?.replace(")", "") || intensity.label}
                        </span>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`shrink-0 transition-transform ${
                          answers.intensity === intensity.value ? "text-brand-orange" : "text-gray-400 group-hover:translate-x-1"
                        }`} 
                      />
                    </button>
                  ))}
                </div>

                {/* Back button */}
                <button
                  onClick={() => setStep(1)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <ChevronLeft size={14} />
                  <span>Regresar a pregunta anterior</span>
                </button>
              </motion.div>
            )}

            {/* STEP 3: Duration */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">PREGUNTA 3 DE 3</span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mt-1">
                    ¿Desde hace cuánto tiempo experimentas este dolor?
                  </h3>
                </div>

                <div className="flex flex-col gap-3.5 pt-2">
                  {durations.map((duration) => (
                    <button
                      key={duration.value}
                      onClick={() => handleSelect("duration", duration.value)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                        answers.duration === duration.value
                          ? "bg-brand-teal border-brand-teal text-white shadow-md"
                          : "bg-white border-brand-beige/20 text-brand-dark hover:border-brand-teal hover:bg-brand-teal/5"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pr-4">
                        <span className={`text-sm sm:text-base font-bold ${answers.duration === duration.value ? "text-white" : "text-brand-dark"}`}>
                          {duration.label}
                        </span>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`shrink-0 transition-transform ${
                          answers.duration === duration.value ? "text-brand-orange" : "text-gray-400 group-hover:translate-x-1"
                        }`} 
                      />
                    </button>
                  ))}
                </div>

                {/* Back button */}
                <button
                  onClick={() => setStep(2)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <ChevronLeft size={14} />
                  <span>Regresar a pregunta anterior</span>
                </button>
              </motion.div>
            )}

            {/* STEP 4: Results */}
            {step === 4 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-left"
              >
                {/* Result header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-brand-beige/20">
                  <div>
                    <span className="text-[10px] font-bold text-brand-olive uppercase tracking-wider">RESULTADO DE TU AUTOEVALUACIÓN</span>
                    <h3 className="font-display font-bold text-2xl text-brand-teal">
                      Recomendación Preventiva
                    </h3>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1 text-xs font-semibold text-brand-orange hover:text-brand-dark transition-colors border border-brand-orange/20 px-3.5 py-1.5 rounded-full bg-white cursor-pointer"
                  >
                    <RotateCcw size={13} />
                    <span>Reiniciar Test</span>
                  </button>
                </div>

                {/* Answers Summary Grid */}
                <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-brand-beige/10">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Zona</p>
                    <p className="text-xs sm:text-sm font-bold text-brand-dark truncate">{answers.bodyPart}</p>
                  </div>
                  <div className="text-center sm:text-left border-x border-gray-100 px-2">
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Intensidad</p>
                    <p className="text-xs sm:text-sm font-bold text-brand-dark">
                      {answers.intensity === "Leve" && "🟢 Leve"}
                      {answers.intensity === "Moderado" && "🟡 Moderado"}
                      {answers.intensity === "Severo" && "🔴 Severo"}
                    </p>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Duración</p>
                    <p className="text-xs sm:text-sm font-bold text-brand-dark truncate">{answers.duration}</p>
                  </div>
                </div>

                {/* Recommendation Box */}
                <div className="bg-brand-teal/5 border border-brand-teal/10 p-5 rounded-2xl space-y-4">
                  <p className="text-sm font-semibold text-brand-dark leading-relaxed">
                    {getRecommendation().advice}
                  </p>
                  
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-brand-teal uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp size={14} className="text-brand-orange" />
                      Consejos de Higiene Postural
                    </h4>
                    <ul className="space-y-2">
                      {getRecommendation().tips.map((tip, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Clincal Disclaimer */}
                <div className="flex gap-2 items-start text-[10px] sm:text-xs text-gray-400 leading-relaxed">
                  <AlertCircle size={14} className="text-brand-orange shrink-0 mt-0.5" />
                  <p>
                    <strong>Aviso importante:</strong> Este cuestionario automatizado es únicamente informativo y de carácter preventivo. No sustituye un diagnóstico clínico ni una valoración biomecánica profesional efectuada por un especialista licenciado.
                  </p>
                </div>

                {/* Final Booking WhatsApp Card */}
                <div className="bg-gradient-to-tr from-brand-teal to-brand-dark text-white p-6 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 mt-6">
                  <div className="text-left space-y-1">
                    <h4 className="font-display font-bold text-base tracking-wide text-brand-orange">¿Quieres iniciar tu alivio?</h4>
                    <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
                      Envía este reporte preliminar directo a la Dra. Valentina para recibir atención prioritaria y coordinar tu cita clínica de valoración presencial.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-sm font-semibold px-6 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 shrink-0 transform hover:-translate-y-0.5 cursor-pointer animate-soft-pulse"
                  >
                    <MessageCircle size={18} className="fill-current text-white" />
                    <span>Enviar Reporte y Agendar</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
