import React from "react";
import { Star, Quote, MessageSquare } from "lucide-react";
import { Testimonial } from "../types";
import { motion } from "motion/react";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Andrés Delgado",
      age: 28,
      condition: "Desgarre Isquiotibial (Fútbol)",
      quote: "Llegué con mucha frustración tras una lesión jugando fútbol. La Dra. Valentina diseñó un plan de readaptación progresiva que no solo me alivió el dolor, sino que me enseñó a fortalecer mis piernas. Volví a jugar antes de lo esperado y sin ningún temor.",
      rating: 5,
      imageSeed: "athlete"
    },
    {
      id: "2",
      name: "Mariana S.",
      age: 34,
      condition: "Lumbalgia Crónica por Oficina",
      quote: "Trabajo más de 8 horas sentada y el dolor de espalda baja era insoportable, incluso me costaba dormir. Con la terapia manual y los ejercicios que me prescribió Valentina, el dolor desapareció por completo. Las sesiones valen cada segundo.",
      rating: 5,
      imageSeed: "office"
    },
    {
      id: "3",
      name: "Don Humberto Treviño",
      age: 69,
      condition: "Rehabilitación de Prótesis de Cadera",
      quote: "Estaba muy asustado de no volver a caminar bien tras mi operación de cadera. Gracias a la paciencia de la fisioterapeuta, recuperé mi fuerza, mi equilibrio y, sobre todo, mi autonomía. Ya puedo jugar con mis nietos en el jardín sin ayuda.",
      rating: 5,
      imageSeed: "elderly"
    },
    {
      id: "4",
      name: "Verónica Ordóñez",
      age: 41,
      condition: "Esguince de Tobillo Grado 2",
      quote: "Me doblé el tobillo bajando unas escaleras. La atención fue impecable: combinaron ultrasonido, electroterapia y movilizaciones manuales. Mi tobillo está fuerte y desinflamado al 100%. ¡La recomiendo con absoluta confianza!",
      rating: 5,
      imageSeed: "teacher"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-transparent font-sans scroll-mt-10 overflow-hidden relative">
      {/* Decorative leaf design */}
      <div className="absolute top-10 left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">CASOS DE ÉXITO</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-teal tracking-tight">
            Opiniones de pacientes reales que <br className="hidden sm:inline" /> han <span className="text-brand-orange">recuperado su movilidad</span> y sonrisas
          </h2>
          <div className="w-16 h-1 bg-brand-teal rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            La confianza y el alivio de las personas que atendemos son nuestra mejor carta de presentación profesional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-brand-beige/25 hover:border-brand-teal/20 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative"
            >
              {/* Top Quote Icon and Stars */}
              <div className="flex justify-between items-start gap-4 mb-6">
                <div className="flex gap-1 text-brand-orange">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <div className="text-brand-teal/10">
                  <Quote size={48} className="stroke-[1.5px]" />
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed flex-1 mb-8">
                "{test.quote}"
              </p>

              {/* Patient Details Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-beige/10">
                {/* Patient Avatar (Using seed for consistent picsum images) */}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-beige/30 bg-brand-cream shrink-0">
                  <img
                    src={`https://picsum.photos/seed/${test.imageSeed}/150/150`}
                    alt={test.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-left font-sans">
                  <h4 className="font-display font-bold text-sm sm:text-base text-brand-teal leading-tight">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] bg-brand-teal/5 text-brand-teal px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {test.condition}
                    </span>
                    <span className="text-xs text-gray-400">
                      • {test.age} años
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Short motivational call to action */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Tú también puedes vivir sin dolor. Únete a los cientos de historias de éxito.
          </p>
          <a
            href="https://wa.me/525512345678?text=Hola%20Dra.%20Valentina%20Guerrero,%20leí%20los%20testimonios%20de%20sus%20pacientes%20y%20me%20gustaría%20agendar%20mi%20cita%20con%20usted."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-orange font-display font-semibold text-sm tracking-wide mt-2 border-b border-brand-teal/20 hover:border-brand-orange/30 pb-0.5 transition-colors"
          >
            <MessageSquare size={14} />
            <span>Quiero agendar mi cita por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
