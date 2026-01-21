import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import churchImage from "@/assets/church-interior.jpg";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hermandad" className="section-padding bg-surface-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={churchImage}
                alt="Interior de la Basílica"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold-400 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream-50 mb-6">
              Más de cuatro siglos de <span className="text-gradient-gold">devoción</span>
            </h2>
            <div className="space-y-4 text-cream-200 leading-relaxed">
              <p>
                La Real e Ilustre Hermandad de Nuestra Señora de las Angustias, Patrona de Granada, 
                custodia y venera la imagen de la Santísima Virgen en su advocación de las Angustias 
                desde el siglo XVI.
              </p>
              <p>
                Nuestra Basílica, joya del barroco granadino, acoge a miles de devotos cada año 
                que acuden a venerar a su Patrona, especialmente durante las fiestas del último 
                domingo de septiembre.
              </p>
              <p>
                Trabajamos incansablemente por mantener viva la fe y las tradiciones, promoviendo 
                la caridad, la formación espiritual y el culto a Nuestra Madre de las Angustias.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-display text-3xl text-gold-400">1545</p>
                <p className="text-cream-300 text-sm mt-1">Fundación</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold-400">10.000+</p>
                <p className="text-cream-300 text-sm mt-1">Hermanos</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold-400">479</p>
                <p className="text-cream-300 text-sm mt-1">Años de historia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
