import React from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Globe, 
  MessageCircle, 
  ExternalLink,
  ShieldCheck,
  Award
} from "lucide-react";
import { motion } from "motion/react";

// @ts-expect-error - image asset compiled by Vite
import logoFisio from "../assets/images/logo_fisio.png";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación de la Clínica",
      desc: "Av. Universidad 1234, Col. Del Valle, Coyoacán, CDMX, CP 04100.",
      link: "https://maps.google.com",
      actionLabel: "Ver en Google Maps"
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      desc: "Lunes a Viernes: 8:00 AM - 8:00 PM\nSábados: 9:00 AM - 2:00 PM",
      link: null,
      actionLabel: "Bajo cita previa"
    },
    {
      icon: Phone,
      title: "Teléfono & WhatsApp",
      desc: "+52 55 1234 5678",
      link: "https://wa.me/525512345678?text=Hola%20Dra.%20Valentina%20Guerrero,%20me%20gustaría%20agendar%20una%20cita.",
      actionLabel: "Escríbenos directamente"
    }
  ];

  return (
    <footer id="contacto" className="bg-brand-dark text-white pt-24 font-sans scroll-mt-10 overflow-hidden relative">
      {/* Soft overlay lines */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-teal/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* FINAL CLOSING CTA BANNERS */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">RECUPERA TU CALIDAD DE VIDA</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            ¿Listo para volver a <span className="text-brand-orange">moverte sin dolor</span>?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            No postergues tu salud física. Una pequeña sesión de valoración inicial es el primer paso para corregir tu postura, reparar viejas lesiones y devolverle la vitalidad a tu cuerpo.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/525512345678?text=Hola%20Dra.%20Valentina%20Guerrero,%20me%20gustaría%20agendar%20una%20sesión%20de%20valoración%20fisioterapéutica.%20¿Qué%20disponibilidad%20tiene?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-sm sm:text-base font-semibold px-8 py-4.5 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 animate-soft-pulse"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Agendar mi Valoración por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* CONTACT INFO GRID & MAP */}
        <div className="grid lg:grid-cols-12 gap-12 border-t border-white/10 pt-16 pb-12 text-left">
          
          {/* Info card block */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <img src={logoFisio} alt="Fisioterapia Movimiento Vital" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer" />
              <p className="text-xs text-gray-400 max-w-sm pt-2 leading-relaxed">
                Clínica de fisioterapia dedicada a restaurar la movilidad y bienestar físico mediante tratamientos manuales avanzados e individualizados.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">{info.title}</h4>
                      <p className="text-sm text-gray-300 mt-1 whitespace-pre-line leading-relaxed">{info.desc}</p>
                      {info.link && (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-brand-orange hover:text-white font-semibold mt-1.5 transition-colors"
                        >
                          <span>{info.actionLabel}</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {!info.link && (
                        <span className="inline-block text-[10px] text-brand-beige font-semibold uppercase tracking-wider mt-1">
                          {info.actionLabel}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Styled Map Block */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-left">
                  <h4 className="font-display font-semibold text-white text-base">Nuestra Ubicación</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Visítanos con previa cita en un espacio cómodo y equipado</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-brand-dark font-display text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Cómo llegar</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Styled Mock Map Frame */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-brand-cream">
                {/* Visual grid representing streets */}
                <div className="absolute inset-0 opacity-15" style={{ 
                  backgroundImage: "radial-gradient(#5A5A40 1px, transparent 1px), linear-gradient(0deg, #5A5A40 0.5px, transparent 0.5px), linear-gradient(90deg, #5A5A40 0.5px, transparent 0.5px)", 
                  backgroundSize: "20px 20px" 
                }} />
                
                {/* Mock streets drawing */}
                <svg className="absolute inset-0 w-full h-full text-brand-teal/20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-10 100 H500 M-10 200 H500 M150 -10 V300 M350 -10 V300" stroke="currentColor" strokeWidth="4" />
                  <path d="M-10 150 C100 150, 150 50, 400 50" stroke="#B86F52" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                </svg>

                {/* Patient markers */}
                <div className="absolute top-[100px] left-[150px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  {/* Glowing target pulsing ring */}
                  <span className="absolute w-12 h-12 rounded-full bg-brand-orange/30 animate-ping" />
                  <div className="w-10 h-10 rounded-full bg-brand-orange border-2 border-white flex items-center justify-center text-white shadow-lg relative z-10">
                    <MapPin size={20} className="stroke-[2.5px]" />
                  </div>
                  <span className="bg-brand-dark/90 text-[10px] text-white font-bold py-1 px-2.5 rounded-lg border border-white/20 whitespace-nowrap shadow-md">
                    Movimiento Vital
                  </span>
                </div>

                {/* Neighborhood landmarks for realism */}
                <div className="absolute top-[40px] left-[40px] text-gray-500 font-bold text-[10px] uppercase tracking-wider opacity-60">Parque Arboledas</div>
                <div className="absolute bottom-[40px] right-[40px] text-gray-500 font-bold text-[10px] uppercase tracking-wider opacity-60">Metro Universidad</div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM RIGHTS & CREDITS FOOTER */}
        <div className="border-t border-white/5 py-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Fisioterapia Movimiento Vital. Todos los derechos reservados.</p>
            <p className="text-[10px] text-gray-500">
              Desarrollado de forma profesional con calidez y rigor clínico para el sector salud.
            </p>
          </div>

          {/* Socials & Credentials */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/fisioterapia_movimientovital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-orange transition-colors flex items-center gap-1.5"
              aria-label="Instagram"
            >
              <Instagram size={14} />
              <span>@fisioterapia_movimientovital</span>
            </a>
            <span className="text-white/10">|</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-orange font-bold flex items-center gap-1">
              <ShieldCheck size={12} strokeWidth={3} />
              <span>Sitio Seguro</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
