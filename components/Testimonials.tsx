import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-5">
        <Quote className="w-96 h-96 -translate-y-20 translate-x-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Poverenje</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold">Reči Naših Klijenta</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
              <Quote className="w-8 h-8 text-amber-500 mb-6" />
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-amber-500 text-xs uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;