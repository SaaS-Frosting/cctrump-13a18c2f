import { Skull, Instagram } from 'lucide-react';
import { Button } from './Button';

const INSTAGRAM_URL = "https://www.instagram.com/cafeconmoto/";
const WHATSAPP_URL = "https://chat.whatsapp.com/JLePjv21vMjLhhXPQL7s6l";

export const Footer = () => (
  <footer className="bg-neutral-950 py-12 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col items-center text-center">
      <div className="mb-8">
        <h2 className="text-4xl md:text-6xl font-display uppercase text-stone-100 mb-6">
          Únete al ride
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Invitaciones a rodadas, drops exclusivos y descuentos. Todo pasa primero por el grupo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" className="text-lg px-8" onClick={() => window.open(WHATSAPP_URL, '_blank')}>Entrar al grupo de WhatsApp</Button>
          <Button variant="secondary" icon={Instagram} onClick={() => window.open(INSTAGRAM_URL, '_blank')}>Seguir en Instagram</Button>
        </div>
        <p className="text-stone-600 text-xs mt-6">
          * Tu privacidad es importante. Solo enviamos buena vibra y café.
        </p>
      </div>

      <div className="w-full h-px bg-border my-8"></div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full text-muted-foreground text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Skull size={16} /> Café con Moto © 2025
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-400">Términos y Condiciones</a>
          <span className="text-red-900 font-bold">Made in Perú</span>
        </div>
      </div>
    </div>
  </footer>
);
