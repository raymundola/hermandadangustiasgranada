import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-surface-200 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-surface-0/0 group-hover:bg-surface-0/20 transition-colors duration-300" />
        
        {/* Quick add button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button
            variant="gold"
            className="w-full"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="w-4 h-4" />
            Añadir al carrito
          </Button>
        </motion.div>
      </div>

      {/* Info */}
      <div>
        <p className="text-gold-500 text-xs font-medium tracking-wider uppercase mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-lg text-cream-100 group-hover:text-gold-400 transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-gold-400 font-semibold text-lg">
          {product.price.toFixed(2)} €
        </p>
      </div>
    </motion.div>
  );
}
