import { Badge } from './Badge';
import experienceBoxImg from '@/assets/experience-box-v2.jpg';

export const ExperienceBox = () => (
  <section id="drop" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900">
    <div className="max-w-6xl mx-auto bg-card/50 rounded-2xl border border-border p-8 md:p-12 overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square bg-neutral-950 rounded-xl border border-border overflow-hidden group shadow-card">
           <div className="absolute top-4 left-4 z-10">
             <Badge color="red">NUEVO DROP</Badge>
           </div>
           
           <img 
             src={experienceBoxImg} 
             alt="Coffee Experience Box Vol.02 - Edición Limitada" 
             className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0"
           />
           
           <div className="absolute inset-0 bg-overlay-gradient pointer-events-none"></div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Edición Limitada</span>
            <h2 className="text-3xl md:text-5xl font-display text-stone-100 uppercase">Coffee Experience Box Vol.O2</h2>
            <p className="text-xl text-muted-foreground font-serif italic">Seis latas. Seis nuevos orígenes. Una nueva experiencia.</p>
          </div>
          
          <div className="space-y-4">
             <p className="text-stone-200 font-medium">
               Este CafeConMoto Experience Box Edición Limitada trae <span className="text-amber-500">6 cafés increíbles, uno de ellos 4.º puesto de los Mejores Cafés del Perú – Taza de Excelencia 2025</span>.
             </p>
             
             <p className="text-stone-300 text-sm leading-relaxed">
               Cada uno tiene su origen, su historia y una forma propia de disfrutarse. La idea es simple: que los prepares con calma y descubras qué te dice cada taza.
             </p>

             <div className="relative pl-6 border-l-2 border-amber-600 py-1">
               <p className="text-muted-foreground text-sm leading-relaxed italic">
                "Este Vol. 02 es una nueva selección, más afinada y construida desde lo que más me sorprendió últimamente dentro del café peruano."
               </p>
             </div>
          </div>
          
          <div className="bg-amber-900/10 border border-amber-700/30 p-6 rounded-lg mt-2">
            <p className="text-stone-300 font-bold mb-4 text-sm uppercase">
              Cantidad limitada. Drop único:
            </p>
            <button 
              onClick={() => window.open('https://wa.me/51961789492/', '_blank')}
              className="bg-stone-200 text-background font-bold px-6 py-3 rounded-md hover:bg-stone-100 transition-colors w-full uppercase tracking-wider"
            >
              Acceder a la Preventa
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
