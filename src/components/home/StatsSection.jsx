import React from 'react';
import { COMPANY_INFO } from '../../data/pharmaData';
import { Trophy, Users, FlaskConical, Award, Globe, Building2 } from 'lucide-react';

export default function StatsSection() {
  const statIcons = [FlaskConical, Users, Building2, Award, Globe];

  return (
    <section className="relative py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-soft-md border border-slate-200 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {COMPANY_INFO.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div 
                key={idx} 
                className={`pt-5 md:pt-0 ${idx !== 0 ? 'md:pl-8' : ''} flex flex-col items-center text-center group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-pharma-50/90 group-hover:bg-pharma-600 text-pharma-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 shadow-2xs border border-pharma-100/60">
                  <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  {stat.suffix && <span className="text-sm text-pharma-600 font-bold">{stat.suffix}</span>}
                </div>
                <p className="text-sm font-bold text-slate-600 mt-2 font-body">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
}
