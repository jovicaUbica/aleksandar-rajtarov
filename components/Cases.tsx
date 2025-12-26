import React from 'react';
import { Gavel, CheckCircle2 } from 'lucide-react';
import { NOTABLE_CASES } from '../constants';

const Cases: React.FC = () => {
  return (
    <section id="uspesi" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-amber-600 text-sm font-bold uppercase tracking-[0.3em] mb-4">Portfoliо Uspeha</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold italic">Presude koje govore više od reči</h3>
          </div>
          <p className="text-slate-500 text-sm max-w-xs border-l-2 border-amber-600 pl-4">
            Zbog poverljivosti, imena klijenata su izmenjena, dok su pravne činjenice i ishodi autentični.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NOTABLE_CASES.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
                <Gavel className="w-6 h-6 text-slate-200 group-hover:text-amber-600 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 font-serif">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                {item.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;