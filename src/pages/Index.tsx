import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Shop } from "@/components/Shop";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Events />
          <Shop />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
