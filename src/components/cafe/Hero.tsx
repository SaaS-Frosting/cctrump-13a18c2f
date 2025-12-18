import { Zap, ChevronRight, Instagram, Bike, Coffee, Skull } from 'lucide-react';
import { Button } from './Button';

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
        <div className="relative bg-neutral-900 border border-border rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center min-h-[400px] gap-6 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <Bike size={200} className="text-stone-100" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 opacity-10 -rotate-12">
            <Coffee size={200} className="text-stone-100" />
          </div>
          
          <div className="z-10 text-center space-y-4">
            <div className="w-48 h-48 bg-neutral-800 rounded-full mx-auto border-4 border-dashed border-stone-700 flex items-center justify-center relative animate-float">
               <Skull size={64} className="text-stone-300" />
               <div className="absolute -bottom-4 bg-red-800 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                 Riders Only
               </div>
            </div>
            <h3 className="text-2xl font-bold text-stone-200 uppercase font-serif italic">Café con Moto</h3>
            <p className="text-stone-500 text-sm">Experience Boxes & Merch</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
