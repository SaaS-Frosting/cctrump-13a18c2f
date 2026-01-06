import { MessageCircle, Route, Users } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const cards = [
  {
    icon: MessageCircle,
    title: "Conversaciones",
    desc: "Intercambia ideas, experiencias y recomendaciones con la comunidad."
  },
  {
    icon: Route,
    title: "Rutas compartidas",
    desc: "Descubre nuevos caminos y comparte tus rutas favoritas."
  },
  {
    icon: Users,
    title: "Conectar con gente",
    desc: "Conoce personas que comparten tus mismas pasiones."
  }
];

export const About = () => (
  <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-display uppercase text-stone-100 mb-6 tracking-tighter">
        ¿Qué es CaféconMoto?
      </h2>
      <p className="text-lg md:text-xl text-stone-300 font-serif leading-relaxed mb-4">
        CaféconMoto nace de dos pasiones que se encuentran en el camino:<br />
        <span className="text-amber-500">las motos y el café.</span>
      </p>
      <p className="text-stone-400 font-serif italic">
        Hay quienes aman rodar, quienes aman preparar café,<br />
        y quienes descubrieron que ambas cosas se disfrutan mejor en compañía.
      </p>
      <div className="h-1 w-24 bg-red-800 mt-6 rounded-full mx-auto"></div>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-neutral-950 p-8 rounded-xl border border-border hover:border-red-900/50 transition-colors group">
          <div className="bg-neutral-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/20 transition-colors">
            <card.icon className="text-stone-300 group-hover:text-red-600" size={28} />
          </div>
          <h3 className="text-xl font-bold text-stone-100 mb-3 uppercase tracking-wide">{card.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
