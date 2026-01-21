import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function Cart() {
  const { items, cartTotal, isOpen, toggleCart, updateQuantity, removeFromCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-surface-0/80 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-100 border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-gold-400" />
                <h2 className="font-display text-2xl text-cream-50">Tu Carrito</h2>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 text-cream-300 hover:text-gold-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-16 h-16 text-surface-300 mb-4" />
                  <p className="text-cream-300 mb-2">Tu carrito está vacío</p>
                  <p className="text-cream-300/60 text-sm">
                    Explora nuestra colección de joyería religiosa
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-200 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-cream-100 truncate">{item.name}</h3>
                        <p className="text-gold-400 font-semibold">{item.price.toFixed(2)} €</p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-surface-200 flex items-center justify-center text-cream-200 hover:bg-surface-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-cream-100 font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-surface-200 flex items-center justify-center text-cream-200 hover:bg-surface-300 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-cream-300/60 hover:text-destructive transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-cream-200">Total</span>
                  <span className="font-display text-2xl text-gold-400">
                    {cartTotal.toFixed(2)} €
                  </span>
                </div>
                <Button variant="hero" className="w-full" size="lg">
                  Finalizar Compra
                </Button>
                <p className="text-center text-cream-300/60 text-xs">
                  Pago seguro · Envío a toda España
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
