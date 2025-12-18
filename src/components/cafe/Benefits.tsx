import { Users, Zap } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const discounts = [
  "Sorteos especiales", "10% dscto. Socopur", "15% dscto. CafeStudio",
  "15% dscto. Cueros 1811", "10% dscto. CoffeePoint", "10% dscto. Artidoro",
  "20% dscto. Fotos (1h)", "10% dscto. CoffeePass", "S/20 off MotoRescate"
];

export const Benefits = () => (
  <section id="benefits" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-950">
    <SectionTitle title="Beneficios de la Comunidad" />
    
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div>
        <h3 className="text-2xl font-bold text-stone-100 mb-6 flex items-center gap-3">
          <Users className="text-amber-500" /> Dentro del Casco
        </h3>
        <ul className="space-y-4">
          {[
            "Conversaciones reales entre riders & coffee lovers.",
            "Novedades, tips de café y rutas antes que en redes.",
            "Invitaciones a rodadas y encuentros abiertos.",
            "Compañerismo en ruta y en barra."
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <div className="min-w-[6px] h-[6px] mt-2 rounded-full bg-stone-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-stone-100 mb-6 flex items-center gap-3">
          <Zap className="text-amber-500" /> Perks Exclusivos
        </h3>
        <div className="flex flex-wrap gap-3">
          {discounts.map((benefit, idx) => (
            <span key={idx} className="bg-neutral-900 border border-border text-stone-300 px-3 py-2 rounded text-sm hover:border-amber-900 hover:text-amber-500 transition-colors cursor-default">
              {benefit}
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs text-stone-600">* Aplican T&C para cada beneficio.</p>
      </div>
    </div>
  </section>
);
