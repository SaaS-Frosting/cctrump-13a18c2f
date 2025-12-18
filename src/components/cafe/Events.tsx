import { Coffee, Zap, Camera, ArrowRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';

const WHATSAPP_URL = "https://chat.whatsapp.com/JLePjv21vMjLhhXPQL7s6l";

const pastEvents = [
  { 
    title: "Taller de Cata", 
    desc: "Nuestra primera experiencia sensorial. Probamos cafesazos de distintos orígenes en un taller práctico mientras conversamos y nos conocímos",
    icon: Coffee 
  },
  { 
    title: "Masterclass de Café", 
    desc: "Un especialista nos guió por el mundo del café de especialidad mientras degustábamos diferentes métodos de extracción.",
    icon: Zap 
  }
];

export const Events = () => (
  <section id="events" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900 relative">
    <SectionTitle 
      title="Eventos & Experiencias" 
      subtitle="Momentos que ya vivimos. Únete para no perderte el próximo."
    />

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {pastEvents.map((evt, idx) => (
        <div key={idx} className="group relative bg-neutral-950 rounded-xl overflow-hidden border border-border hover:border-amber-900 transition-all duration-300">
          <div className="h-64 bg-neutral-900 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-background opacity-60"></div>
            <evt.icon size={120} className="text-stone-700 absolute -right-4 -bottom-4 rotate-12 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Camera size={32} className="text-stone-500 mb-2 opacity-80" />
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500 border border-stone-700 px-3 py-1 rounded">
                Evento Pasado
              </span>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-display text-stone-100 uppercase mb-3 italic font-serif">
              {evt.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {evt.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-muted-foreground text-sm mb-4">¿Te los perdiste?</p>
      <Button variant="outline" icon={ArrowRight} onClick={() => window.open(WHATSAPP_URL, '_blank')}>Ver próximos en WhatsApp</Button>
    </div>
  </section>
);
