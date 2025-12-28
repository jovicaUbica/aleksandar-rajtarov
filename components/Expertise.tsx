import React from 'react';
import { PRACTICE_AREAS } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section id="usluge" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-amber-600 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Specijalizacije</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-[#121a2b] font-bold">Oblasti Rada</h3>
          <div className="mt-4 h-1 w-16 md:w-20 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              className="group p-5 md:p-6 border border-slate-200 rounded-sm hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-[#121a2b] inline-block rounded-sm shadow-sm group-hover:bg-amber-600 transition-colors w-fit">
                <div className="text-amber-500 group-hover:text-white">
                  {area.icon}
                </div>
              </div>
              <h4 className="text-base md:text-lg font-serif font-bold text-[#121a2b] mb-2">{area.title}</h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed flex-grow">
                {area.description}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-amber-600 font-bold text-[10px] md:text-xs cursor-pointer group-hover:text-[#121a2b] transition-colors">
                DETALJNIJE
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;