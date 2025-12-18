import { Users, ShoppingBag, MapPin } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const cards = [
  {
    icon: Users,
    title: "Comunidad",
    desc: "Conecta con riders & coffee lovers que comparten tu estilo de vida urbano."
  },
  {
    icon: ShoppingBag,
    title: "Productos",
    desc: "Merch oficial y boxes de café curados exclusivamente para la comunidad."
  },
  {
    icon: MapPin,
    title: "Experiencias",
    desc: "Rodadas, juntes privados y encuentros en las mejores cafeterías de especialidad."
  }
];

export const About = () => (
  <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900">
    <SectionTitle 
      title="¿Qué es Café con Moto?" 
      subtitle="No somos un club de motos tradicional. Somos una excusa para rodar y tomar buen café."
    />
    
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
