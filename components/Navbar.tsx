import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.FormEvent, href: string) => {
    if (e) e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-[#121a2b] shadow-2xl py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={(e) => scrollToSection(e, '#pocetna')}>
            <div className="text-3xl font-serif text-white border-r border-white/20 pr-3 leading-none">AP</div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-serif font-bold tracking-widest text-white uppercase">
                A. Rajtarov
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-amber-500 font-bold">
                Advokat
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80 hover:text-amber-500 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-amber-500 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={(e) => scrollToSection(e, '#kontakt')}
                className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-[#121a2b] px-5 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all"
              >
                Kontakt
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white bg-white/10 rounded-sm"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#121a2b] shadow-2xl transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-6 space-y-1 border-t border-white/10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block px-4 py-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70 hover:text-amber-500 border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6">
            <button 
              onClick={(e) => scrollToSection(e, '#kontakt')}
              className="block w-full text-center bg-amber-600 text-white px-5 py-4 rounded-sm text-xs font-bold uppercase tracking-widest"
            >
              Zakažite Konsultacije
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;