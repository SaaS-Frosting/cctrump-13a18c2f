import { Navbar } from '@/components/cafe/Navbar';
import { Hero } from '@/components/cafe/Hero';
import { About } from '@/components/cafe/About';
import { StickerPacks } from '@/components/cafe/StickerPacks';
import { ExperienceBox } from '@/components/cafe/ExperienceBox';
import { Benefits } from '@/components/cafe/Benefits';
import { Events } from '@/components/cafe/Events';
import { Footer } from '@/components/cafe/Footer';

const Index = () => {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <About />
      <StickerPacks />
      <ExperienceBox />
      <Benefits />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
