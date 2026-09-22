import React from 'react';
import { COMPANY_INFO } from '../../data/pharmaData';
import { Trophy, Users, FlaskConical, Award, Globe, Building2 } from 'lucide-react';

export default function StatsSection() {
  const statIcons = [FlaskConical, Users, Building2, Award, Globe];

  return (
    <section className="relative py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-soft-md border border-slate-200 p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {COMPANY_INFO.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div 
                key={idx} 
                className={`pt-4 md:pt-0 ${idx !== 0 ? 'md:pl-6' : ''} flex flex-col items-center text-center group`}
              >
                <div className="w-12 h-12 rounded-2xl bg-pharma-50/90 group-hover:bg-pharma-600 text-pharma-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-3 shadow-2xs border border-pharma-100/50">
                  <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  {stat.suffix && <span className="text-xs text-pharma-600 font-bold">{stat.suffix}</span>}
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1 font-body">
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
