import React from 'react';
import { ChevronDown, ShieldCheck, Award, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pocetna" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121a2b]">
      {/* Background with darker overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-10 animate-fade-in flex flex-col items-center">
          <div className="text-6xl md:text-8xl font-serif text-white mb-4 tracking-tighter">AP</div>
          <div className="h-[1px] w-24 bg-amber-500 mb-4"></div>
          <div className="flex items-center gap-2 text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">
            Besprekorna Pravna Zaštita
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-8 leading-tight uppercase tracking-tight">
          Pravda Bez <span className="italic text-amber-500">Kompromisa.</span>
        </h1>
        
        <p className="text-base md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          Advokatska kancelarija <span className="text-white font-semibold">Aleksandar Rajtarov</span>. <br/> Vaš strateški partner u najkompleksnijim pravnim izazovima.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full sm:w-auto">
          <button 
            onClick={() => scrollTo('usluge')}
            className="w-full sm:w-auto px-10 py-5 bg-amber-600 hover:bg-amber-700 text-[#121a2b] font-black rounded-sm transition-all shadow-2xl uppercase tracking-widest text-sm"
          >
            Pregled Usluga
          </button>
          <button 
            onClick={() => scrollTo('kontakt')}
            className="w-full sm:w-auto px-10 py-5 border border-white/30 text-white font-bold rounded-sm hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
          >
            Kontakt
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center">
            <a 
                href="tel:+381644939453" 
                className="group flex items-center gap-4 text-white hover:text-amber-500 transition-colors"
            >
                <div className="p-3 rounded-full border border-white/20 group-hover:border-amber-500 transition-colors">
                    <PhoneCall className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Kontaktirajte me direktno</p>
                    <p className="text-xl md:text-2xl font-serif">+381 64 493 9453</p>
                </div>
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber-500/50 cursor-pointer hidden md:block" onClick={() => scrollTo('o-nama')}>
        <ChevronDown className="w-10 h-10" />
      </div>
    </section>
  );
};

export default Hero;