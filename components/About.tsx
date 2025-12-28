import React from 'react';
import { Shield, Award, Target, Landmark, Star, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="o-nama" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-b-8 border-amber-600">
              <img
                src="/aleksandar-rajtarov.jpg"
                alt="Advokat Aleksandar Rajtarov"
                className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121a2b]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Advokat • Osnivač</p>
                <h4 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight">Aleksandar Rajtarov</h4>
              </div>
            </div>

            <div className="hidden md:block absolute -bottom-10 -left-10 w-64 h-64 bg-slate-50 rounded-sm -z-0"></div>
            <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 border-[16px] border-[#121a2b]/5 rounded-full -z-0"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="text-3xl font-serif text-[#121a2b] mb-4 opacity-20">AP</div>
            <h2 className="text-amber-600 text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4">Profesionalna Biografija</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-[#121a2b] font-bold mb-8 italic leading-tight">Autoritet izgrađen na <br className="hidden sm:block" />znanju i uspesima.</h3>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <span className="text-[#121a2b] font-bold">Aleksandar Rajtarov</span> je diplomirani pravnik čija je karijera obeležena rešavanjem najkompleksnijih pravnih pitanja u domenu privrednog, građanskog i krivičnog prava.
              </p>
              <p>
                Sa kancelarijama u <span className="text-amber-700 font-semibold italic">Novom Sadu i Beogradu</span>, Aleksandar pruža personalizovanu i elitnu pravnu zaštitu, fokusirajući se na klijente koji zahtevaju maksimalnu diskreciju i vrhunski nivo stručnosti.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {[
                "Pravni fakultet Novi Sad",
                "15+ Godina iskustva",
                "Specijalista za teške sporove",
                "Beograd • Novi Sad",
                "Maksimalna diskrecija",
                "Pristup 24/7 za klijente"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 border border-slate-100 group hover:border-amber-500 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-[#121a2b] uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-[#121a2b] rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-5 text-white italic text-8xl font-serif">"</div>
              <p className="text-white font-serif italic text-xl leading-relaxed relative z-10">
                "U pravu, kao i u šahu, svaki potez mora biti proračunat tri koraka unapred."
              </p>
              <div className="mt-6 flex items-center gap-4 relative z-10">
                <div className="h-[1px] w-12 bg-amber-500"></div>
                <p className="font-bold text-amber-500 uppercase tracking-[0.3em] text-[10px]">A. Rajtarov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;