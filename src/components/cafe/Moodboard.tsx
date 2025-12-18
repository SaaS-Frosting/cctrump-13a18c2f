import { Bike, Skull } from 'lucide-react';

export const Moodboard = () => (
  <section id="vibra" className="bg-background py-0 px-0">
    <div className="grid grid-cols-2 md:grid-cols-4 h-96 md:h-80 w-full">
      <div className="bg-neutral-900 border-r border-b border-border flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-card opacity-50 group-hover:opacity-20 transition-opacity"></div>
        <span className="relative z-10 font-serif italic text-stone-500 text-2xl rotate-[-15deg]">Espresso</span>
      </div>
      <div className="bg-neutral-800 border-r border-b border-border flex items-center justify-center relative overflow-hidden">
        <Bike size={64} className="text-stone-700 opacity-50" />
      </div>
      <div className="bg-card border-r border-b border-border flex items-center justify-center text-center p-4">
        <p className="text-stone-100 font-display uppercase text-xl leading-none">In Coffee<br/><span className="text-red-700">We Trust</span></p>
      </div>
      <div className="bg-neutral-950 border-b border-border flex items-center justify-center">
        <Skull size={48} className="text-stone-600" />
      </div>
    </div>
    
    <div className="bg-red-800 py-8 text-center">
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-red-600 font-bold uppercase tracking-widest text-xs md:text-sm">
        <span className="text-primary-foreground">Más café, más kilómetros</span>
        <span className="hidden md:inline text-primary-foreground">•</span>
        <span className="text-primary-foreground">Throttle & Brew</span>
        <span className="hidden md:inline text-primary-foreground">•</span>
        <span className="text-primary-foreground">Menos prisa, más ruta</span>
      </div>
    </div>
  </section>
);
