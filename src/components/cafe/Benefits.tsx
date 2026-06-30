import { Zap, ChevronRight } from 'lucide-react';
import { Button } from './Button';

const WHATSAPP_URL = "https://chat.whatsapp.com/JLePjv21vMjLhhXPQL7s6l";

const discounts = [
  "Sorteos especiales", "10% dscto. Socopur", "15% dscto. CafeStudio",
  "15% dscto. Cueros 1811", "10% dscto. CoffeePoint", "10% dscto. Artidoro",
  "20% dscto. Fotos (1h)", "10% dscto. CoffeePass", "S/20 off MotoRescate"
];

export const Benefits = () => (
  <section id="benefits" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-950">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-display uppercase text-stone-100 mb-6 tracking-tighter">
        La comunidad
      </h2>
      <p className="text-lg md:text-xl text-stone-300 font-serif leading-relaxed mb-4">
        La comunidad no es ruido ni spam.<br />
        <span className="text-amber-500">Es un espacio para estar, aprender y compartir.</span>
      </p>
      <p className="text-stone-400 font-serif italic">
        Aquí puedes preguntar, compartir rutas, recomendar cafés<br />
        o simplemente sumarte a la conversación.
      </p>
      <div className="h-1 w-24 bg-red-800 mt-6 rounded-full mx-auto"></div>
    </div>
    
    <div className="max-w-3xl mx-auto mb-12">
      <h3 className="text-2xl font-bold text-stone-100 mb-6 flex items-center justify-center gap-3">
        <Zap className="text-amber-500" /> Perks Exclusivos
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {discounts.map((benefit, idx) => (
          <span key={idx} className="bg-neutral-900 border border-border text-stone-300 px-3 py-2 rounded text-sm hover:border-amber-900 hover:text-amber-500 transition-colors cursor-default">
            {benefit}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-stone-600 text-center">* Aplican T&C para cada beneficio.</p>
    </div>

    <div className="text-center">
      <Button variant="primary" icon={ChevronRight} onClick={() => window.open(WHATSAPP_URL, '_blank')}>
        Únete a la comunidad de WhatsApp
      </Button>
      <p className="mt-4 text-sm text-stone-500">Es gratis y tienes beneficios increíbles.</p>
    </div>
  </section>
);
