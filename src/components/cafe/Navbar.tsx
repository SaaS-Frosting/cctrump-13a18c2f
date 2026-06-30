import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

const WHATSAPP_URL = "https://chat.whatsapp.com/JLePjv21vMjLhhXPQL7s6l";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Qué es", href: "#about" },
  { name: "Productos", href: "#stickers" },
  { name: "Beneficios", href: "#benefits" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleJoinClick = () => {
    window.open(WHATSAPP_URL, '_blank');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <span className="text-xl font-display uppercase tracking-tighter text-stone-100">
            Café<span className="text-red-600">Con</span>Moto
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase text-stone-400 hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-stone-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-border absolute w-full px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase text-stone-300 hover:text-red-600"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="mt-4 w-full" onClick={handleJoinClick}>Unirse a WhatsApp</Button>
        </div>
      )}
    </nav>
  );
};
