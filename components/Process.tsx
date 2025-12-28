import React from 'react';
import { WORK_PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="proces" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2">Metodologija</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold">Kako Radimo</h3>
          <div className="mt-4 h-1 w-20 bg-amber-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WORK_PROCESS.map((step, index) => (
              <div key={index} className="bg-white p-8 text-center group">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors duration-300 shadow-xl">
                  {step.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 text-amber-600 font-serif italic text-lg opacity-20">0{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;