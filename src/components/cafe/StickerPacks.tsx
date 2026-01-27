import { Skull } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Badge } from './Badge';
import packOrigen from '@/assets/pack-origen.png';
import packTrustNoDecaf from '@/assets/pack-trust-no-decaf.jpg';

const WHATSAPP_CONTACT = "https://wa.me/51961789492/";

const packs = [
  { 
    name: "Sticker Pack", 
    price: "S/ 15.00", 
    desc: "El inicio de todo. Diseños originales que iniciaron la comunidad.",
    soldOut: false,
    tag: "Disponible",
    tagColor: "amber" as const,
    image: packOrigen,
    buttonText: "Quiero este producto"
  },
  { 
    name: "Experience Box", 
    price: "S/ 80.00", 
    desc: "Seis latas con café de seis cafeterías distintas de Lima y Cusco, seleccionados personalmente.",
    soldOut: true,
    tag: "Sold Out",
    tagColor: "red" as const,
    image: packTrustNoDecaf,
    buttonText: "Agotado"
  },
  { 
    name: "HandMade", 
    price: null,
    desc: "Accesorios de cuero hechos a mano para moteros. Piezas únicas y exclusivas.",
    soldOut: false,
    isExclusive: true,
    tag: "Exclusivo",
    tagColor: "amber" as const,
    image: null,
    buttonText: "Quiero comprar"
  },
];

export const StickerPacks = () => (
  <section id="stickers" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-950 border-t border-border">
    <SectionTitle 
      title="Merch Oficial" 
      subtitle="Sticker packs con calaveras, cascos y cafeína para donde se te ocurra."
    />

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
      {packs.map((pack, idx) => (
        <div key={idx} className={`bg-neutral-900 rounded-xl overflow-hidden border transition-all group ${pack.soldOut && !pack.isExclusive ? 'border-border opacity-80' : 'border-border hover:border-stone-600'}`}>
          <div className="h-48 bg-neutral-800 relative flex items-center justify-center overflow-hidden">
             {pack.image ? (
               <img 
                 src={pack.image} 
                 alt={pack.name} 
                 className={`w-full h-full object-cover transition-transform duration-500 ${!pack.soldOut && 'group-hover:scale-110'}`}
               />
             ) : (
               <>
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-700 to-neutral-900 opacity-50"></div>
                 <Skull className="text-stone-600 opacity-20" size={120} />
               </>
             )}
             
             {pack.soldOut && !pack.isExclusive && (
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center z-10">
                  <span className="text-red-600 font-display uppercase text-2xl border-4 border-red-600 px-4 py-2 -rotate-12">Sold Out</span>
                </div>
             )}
             
             {pack.tag && !pack.soldOut && (
               <div className="absolute top-4 right-4">
                  <Badge color={pack.tagColor}>{pack.tag}</Badge>
               </div>
             )}

              {pack.isExclusive && (
               <div className="absolute top-4 right-4">
                  <Badge color="amber">Solo en Box</Badge>
               </div>
             )}
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-stone-100 uppercase mb-1">{pack.name}</h3>
            <p className="text-muted-foreground text-sm mb-4 h-10">{pack.desc}</p>
            <div className="flex justify-between items-center mt-6">
              <span className="text-amber-500 font-bold font-mono">
                {pack.price ? pack.price : "Exclusivo"}
              </span>
              
              {pack.soldOut ? (
                 <button disabled className="text-xs font-bold text-stone-500 border border-stone-700 px-3 py-2 rounded uppercase tracking-wider cursor-not-allowed">
                   Agotado
                 </button>
              ) : (
                <button className="text-xs font-bold text-stone-300 border border-stone-600 px-3 py-2 rounded hover:bg-muted uppercase tracking-wider" onClick={() => window.open(WHATSAPP_CONTACT, '_blank')}>
                  {pack.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    <p className="text-center text-muted-foreground text-sm font-mono">
      * Pedidos por DM de Instagram o WhatsApp.
    </p>
  </section>
);
