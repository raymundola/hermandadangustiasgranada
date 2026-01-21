import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Rosario de la Aurora",
    date: "Domingo 26 de Enero",
    time: "07:00",
    location: "Basílica de las Angustias",
    description: "Tradicional Rosario de la Aurora por las calles del centro histórico.",
  },
  {
    title: "Misa Solemne",
    date: "Sábado 1 de Febrero",
    time: "12:00",
    location: "Basílica de las Angustias",
    description: "Santa Misa en honor a Nuestra Señora de las Angustias con motivo de la Candelaria.",
  },
  {
    title: "Función Principal",
    date: "Último Domingo de Septiembre",
    time: "11:00",
    location: "Basílica de las Angustias",
    description: "Solemne Función Principal en honor a la Patrona de Granada.",
  },
];

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eventos" className="section-padding bg-surface-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Calendario
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream-50 mb-4">
            Próximos <span className="text-gradient-gold">Cultos y Eventos</span>
          </h2>
          <p className="text-cream-300">
            Participa en las celebraciones y actividades de nuestra Hermandad
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-surface-200 rounded-lg p-6 border border-border hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-gold-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{event.date}</span>
              </div>
              
              <h3 className="font-display text-2xl text-cream-50 mb-3 group-hover:text-gold-400 transition-colors">
                {event.title}
              </h3>
              
              <p className="text-cream-300 text-sm mb-4 leading-relaxed">
                {event.description}
              </p>
              
              <div className="flex flex-col gap-2 text-cream-300 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span>{event.time}h</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="goldOutline" size="lg">
            Ver Calendario Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
