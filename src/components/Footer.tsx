import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-surface-100 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-surface-0 font-display font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-display text-lg text-cream-100">Hermandad</p>
                <p className="text-gold-400 text-sm">Ntra. Sra. de las Angustias</p>
              </div>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed">
              Real e Ilustre Hermandad de Nuestra Señora de las Angustias, Patrona de Granada.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-cream-300">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span>Carrera del Darro, 29<br />18010 Granada, España</span>
              </div>
              <div className="flex items-center gap-3 text-cream-300">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>+34 958 22 62 28</span>
              </div>
              <div className="flex items-center gap-3 text-cream-300">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>info@angustiasgranada.es</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Horario Basílica</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-cream-300">
                <Clock className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-cream-200">Lunes a Sábado</p>
                  <p>08:00 - 13:30 / 18:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-cream-300">
                <Clock className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-cream-200">Domingos y Festivos</p>
                  <p>09:00 - 14:00 / 18:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Enlaces</h4>
            <nav className="space-y-2 text-sm">
              <a href="#hermandad" className="block text-cream-300 hover:text-gold-400 transition-colors">
                La Hermandad
              </a>
              <a href="#eventos" className="block text-cream-300 hover:text-gold-400 transition-colors">
                Cultos y Eventos
              </a>
              <a href="#tienda" className="block text-cream-300 hover:text-gold-400 transition-colors">
                Tienda Online
              </a>
              <a href="#" className="block text-cream-300 hover:text-gold-400 transition-colors">
                Hacerse Hermano
              </a>
              <a href="#" className="block text-cream-300 hover:text-gold-400 transition-colors">
                Historia
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-line mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream-300/60">
          <p>© 2024 Hermandad de Nuestra Señora de las Angustias. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
