import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f1a] text-white/50 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl font-serif text-white">AP</div>
              <div className="h-10 w-[1px] bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white tracking-widest uppercase">
                  Aleksandar Rajtarov
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">
                  Advokat
                </span>
              </div>
            </div>
            <p className="max-w-md mb-8 text-sm leading-relaxed italic text-white/40">
              "Pravda zahteva posvećenost i hrabrost. Naš cilj je da osiguramo da vaša prava budu zaštićena u svakom trenutku, uz maksimalnu profesionalnost."
            </p>
            <div className="space-y-3">
              <a href="tel:+381644939453" className="flex items-center gap-3 hover:text-amber-500 transition-colors text-white font-bold text-sm">
                <Phone className="w-4 h-4 text-amber-500" /> +381 64 493 9453
              </a>
              <a href="mailto:rajtarovaleksandar44@gmail.com" className="flex items-center gap-3 hover:text-amber-500 transition-colors text-white font-bold text-sm">
                <Mail className="w-4 h-4 text-amber-500" /> rajtarovaleksandar44@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-amber-500" /> Avijatičarska 21, 21000 Novi Sad
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-8">Navigacija</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#pocetna" className="hover:text-white transition-colors">Početna</a></li>
              <li><a href="#o-nama" className="hover:text-white transition-colors">O Advokatu</a></li>
              <li><a href="#usluge" className="hover:text-white transition-colors">Specijalizacije</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-8">Kancelarija</h4>
            <div className="text-xs space-y-4 leading-relaxed">
              <p>Radno vreme: Pon - Pet: 09:00 - 17:00</p>
              <p>Hitni slučajevi: Dostupni 24/7 putem telefona.</p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 bg-white/5 hover:bg-amber-600 hover:text-[#121a2b] transition-all rounded-sm"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-white/5 hover:bg-amber-600 hover:text-[#121a2b] transition-all rounded-sm"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-white/5 hover:bg-amber-600 hover:text-[#121a2b] transition-all rounded-sm"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] font-bold">
          <p>&copy; {new Date().getFullYear()} Aleksandar Rajtarov - Advokat. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;