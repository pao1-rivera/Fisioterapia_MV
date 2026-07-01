import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppFloat({
  phoneNumber = "525512345678",
  defaultMessage = "Hola, me gustaría agendar una valoración fisioterapéutica para recuperar mi movilidad.",
}: WhatsAppFloatProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a small delay to grab attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="pointer-events-auto bg-brand-dark text-white text-sm py-2.5 px-4 rounded-2xl shadow-xl border border-brand-teal/20 mb-3 mr-1 flex items-center gap-2 max-w-[260px] relative font-sans"
          >
            {/* Tiny triangle for speech bubble */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-brand-dark rotate-45 border-r border-b border-brand-teal/20" />
            
            <div className="flex-1">
              <p className="font-semibold text-xs text-brand-orange">¿Sientes dolor o molestia?</p>
              <p className="text-xs text-gray-200 mt-0.5">Escríbeme para agendar tu consulta hoy mismo.</p>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-white transition-colors self-start p-0.5"
              aria-label="Cerrar"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="pointer-events-auto bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Soft pulse animation wrapper */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 -z-10 animate-ping group-hover:animate-none opacity-75" />
        
        {/* SVG WhatsApp icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.265 2.267 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.417 9.864-9.861.002-2.638-1.018-5.118-2.872-6.974C16.398 1.916 13.91 1.9 12.012 1.9c-5.441 0-9.866 4.42-9.869 9.866-.001 1.774.475 3.511 1.38 5.043L2.525 21.5l4.122-1.346zM17.472 14.34c-.3-.149-1.772-.874-2.047-.975-.275-.101-.475-.149-.675.149-.2.3-.775.975-.95 1.174-.175.2-.35.224-.65.074-.3-.149-1.265-.466-2.41-1.485-.89-.794-1.49-1.775-1.665-2.074-.175-.3-.019-.461.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.624-.925-2.225-.244-.589-.493-.51-.675-.52l-.574-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.309 1.272.494 1.707.632.716.228 1.368.196 1.883.118.574-.087 1.772-.724 2.022-1.424.25-.7.25-1.3 1.75-1.424z" />
        </svg>
      </motion.a>
    </div>
  );
}
