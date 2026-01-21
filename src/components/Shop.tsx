import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

import productMedal1 from "@/assets/product-medal-1.jpg";
import productMedal2 from "@/assets/product-medal-2.jpg";
import productMedal3 from "@/assets/product-medal-3.jpg";
import productMedal4 from "@/assets/product-medal-4.jpg";

const products: Product[] = [
  {
    id: "1",
    name: "Medalla Virgen de las Angustias Oro",
    price: 49.99,
    image: productMedal1,
    category: "Medallas",
    description: "Medalla en oro de 18k con imagen de Nuestra Señora de las Angustias.",
  },
  {
    id: "2",
    name: "Cruz Barroca Plata 925",
    price: 34.99,
    image: productMedal2,
    category: "Cruces",
    description: "Cruz de estilo barroco en plata de ley 925 con detalles grabados.",
  },
  {
    id: "3",
    name: "Rosario Dorado Tradicional",
    price: 59.99,
    image: productMedal3,
    category: "Rosarios",
    description: "Rosario tradicional con cuentas doradas y cruz de estilo granadino.",
  },
  {
    id: "4",
    name: "Medalla Milagrosa Chapada Oro",
    price: 44.99,
    image: productMedal4,
    category: "Medallas",
    description: "Medalla milagrosa chapada en oro de 18k con cadena incluida.",
  },
];

const categories = ["Todos", "Medallas", "Cruces", "Rosarios"];

export function Shop() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="tienda" className="section-padding bg-surface-0">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Joyería Religiosa
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream-50 mb-4">
            Nuestra <span className="text-gradient-gold">Tienda</span>
          </h2>
          <p className="text-cream-300">
            Piezas únicas de joyería religiosa artesanal. Cada compra apoya a nuestra Hermandad.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "gold" : "subtle"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Decorative line */}
        <div className="gold-line mt-16" />
      </div>
    </section>
  );
}
