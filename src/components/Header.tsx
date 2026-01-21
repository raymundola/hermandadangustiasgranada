import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Hermandad", href: "#hermandad" },
  { name: "Eventos", href: "#eventos" },
  { name: "Tienda", href: "#tienda" },
  { name: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-0/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-surface-0 font-display font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg text-cream-100">Hermandad</p>
              <p className="text-gold-400 text-sm font-medium tracking-wider">Ntra. Sra. de las Angustias</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cream-200 hover:text-gold-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Cart & Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-cream-200 hover:text-gold-400 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-400 text-surface-0 text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-cream-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-100 border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cream-200 hover:text-gold-400 transition-colors py-2 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
