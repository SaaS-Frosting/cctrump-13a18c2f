import { Badge } from './Badge';
import experienceBoxImg from '@/assets/experience-box.jpg';

export const ExperienceBox = () => (
  <section id="drop" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900">
    <div className="max-w-6xl mx-auto bg-card/50 rounded-2xl border border-border p-8 md:p-12 overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square bg-neutral-950 rounded-xl border border-border overflow-hidden group shadow-card">
           <div className="absolute top-4 left-4 z-10">
             <Badge color="red">SOLD OUT</Badge>
           </div>
           
           <img 
             src={experienceBoxImg} 
             alt="Coffee Experience Box - Edición Limitada" 
             className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0"
           />
           
           <div className="absolute inset-0 bg-overlay-gradient pointer-events-none"></div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Último Box</span>
            <h2 className="text-3xl md:text-5xl font-display text-stone-100 uppercase">Coffee Experience Box</h2>
            <p className="text-xl text-muted-foreground font-serif italic">Seis latas. Seis orígenes. Una experiencia.</p>
          </div>
          
          <div className="space-y-4">
             <p className="text-stone-200 font-medium">
               Esta edición limitada estuvo conformada por <span className="text-amber-500">seis latas con café de seis cafeterías distintas de Lima y Cusco</span>, seleccionados personalmente por nosotros mismos.
             </p>
             
             <div className="relative pl-6 border-l-2 border-red-800 py-1">
               <p className="text-muted-foreground text-sm leading-relaxed italic">
                "Este Coffee Experience Box reúne seis cafés que destacaron en diferentes momentos y lugares.
                Cafés que probé en situaciones distintas y que me hicieron decir: <strong className="text-stone-300">'esto vale la pena compartirlo.'</strong>
                <br /><br />
                Abrir este box es entrar a una selección pensada con intención, basada en lo que me sorprendió, me gustó y considero que suma a esta experiencia del café peruano.
                Ojalá alguno de estos cafés también se vuelva parte de tu camino."
               </p>
             </div>
          </div>
          
          <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-lg mt-2">
            <p className="text-stone-300 font-bold mb-4 text-sm uppercase">
              Se agotó rápido. No te pierdas el próximo:
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email de piloto..." 
                className="bg-neutral-950 border border-border text-stone-200 px-4 py-3 rounded-md w-full focus:outline-none focus:border-red-700 placeholder:text-stone-600"
              />
              <button className="bg-stone-200 text-background font-bold px-6 py-3 rounded-md hover:bg-stone-100 whitespace-nowrap transition-colors">
                Avísame
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
