import { Zap, ChevronRight, Instagram } from 'lucide-react';
import { Button } from './Button';
import heroCoffee from '@/assets/hero-coffee.png';

const INSTAGRAM_URL = "https://www.instagram.com/cafeconmoto/";
const WHATSAPP_URL = "https://chat.whatsapp.com/JLePjv21vMjLhhXPQL7s6l";

export const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-neutral-950">
    <div className="absolute inset-0 bg-hero-gradient opacity-60"></div>
    <div className="absolute inset-0 bg-noise"></div>
    
    <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest text-xs uppercase animate-pulse-slow">
          <Zap size={14} /> Est. 2019 · Lima, Perú
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase text-stone-100 leading-[0.9] tracking-tighter">
          Alta <span className="text-gradient">Cafeína.</span> <br />
          Alto <span className="text-red-700">Octanaje.</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-400 max-w-lg mx-auto md:mx-0 font-serif leading-relaxed">
          La comunidad definitiva para quienes viven entre el espresso perfecto y el rugido del motor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button variant="primary" icon={ChevronRight} onClick={() => window.open(WHATSAPP_URL, '_blank')}>Únete a WhatsApp</Button>
          <Button variant="secondary" icon={Instagram} onClick={() => window.open(INSTAGRAM_URL, '_blank')}>Ver Instagram</Button>
        </div>
        
        <p className="text-xs text-stone-600 pt-4 font-mono">
          // Riders & Coffee Lovers united.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-glow-gradient rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-neutral-900 border border-border rounded-2xl overflow-hidden min-h-[400px]">
          <img 
            src={heroCoffee} 
            alt="Café de especialidad - Café con Moto" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
);
