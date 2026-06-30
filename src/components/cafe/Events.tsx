import { Coffee, Zap, ArrowRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import tallerCataImg from '@/assets/taller-cata.png';
import masterclassCafeImg from '@/assets/masterclass-cafe.png';

const WHATSAPP_URL = "https://chat.whatsapp.com/JLePjv21vMjLhhXPQL7s6l";

const pastEvents = [
  { 
    title: "Taller de Cata", 
    desc: "Nuestra primera experiencia sensorial. Probamos cafesazos de distintos orígenes en un taller práctico mientras conversamos y nos conocímos",
    icon: Coffee,
    image: tallerCataImg
  },
  { 
    title: "Masterclass de Café", 
    desc: "Un especialista nos guió por el mundo del café de especialidad mientras degustábamos diferentes métodos de extracción.",
    icon: Zap,
    image: masterclassCafeImg
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
            <img 
              src={evt.image} 
              alt={evt.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-4 z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-300 bg-background/80 backdrop-blur-sm border border-stone-700 px-3 py-1 rounded">
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
