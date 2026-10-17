import React from 'react';
import { Compass, Armchair, Landmark } from 'lucide-react';
import { DISCIPLINES } from '../data/portfolioData';

interface DisciplinesSectionProps {
  onOpenConsultation: (disciplineTitle?: string) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({
  onOpenConsultation,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'architecture':
        return <Compass className="w-6 h-6 text-[#7e756f]" />;
      case 'chair':
        return <Armchair className="w-6 h-6 text-[#7e756f]" />;
      case 'foundation':
        return <Landmark className="w-6 h-6 text-[#7e756f]" />;
      default:
        return <Compass className="w-6 h-6 text-[#7e756f]" />;
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-[#ebe8e2]/40 border-t border-b border-[#cfc4bd]/50" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#cfc4bd]/60 gap-4">
          <div>
            <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold tracking-wider">
              Atelier Scope
            </span>
            <h2 className="font-headline-md md:font-headline-lg text-3xl md:text-5xl text-[#0c0907] mt-2 font-normal">
              Practice Disciplines
            </h2>
          </div>
          <p className="font-body-md text-sm md:text-base text-[#4d4540] max-w-md font-light leading-relaxed">
            A holistically conceived approach from the structural shell down to bespoke dining tables and hand-cast lighting fixtures.
          </p>
        </div>

        {/* 3 Service Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DISCIPLINES.map((discipline) => (
            <div
              key={discipline.number}
              className="bg-[#fcf9f3] p-8 md:p-10 rounded-xl border border-[#cfc4bd]/60 flex flex-col justify-between hover:border-[#0c0907] transition-all duration-300 shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#cfc4bd]/30">
                  <span className="font-headline-sm text-3xl text-[#8e4d33] font-light">
                    {discipline.number}
                  </span>
                  <div className="group-hover:scale-110 transition-transform">
                    {getIcon(discipline.iconName)}
                  </div>
                </div>

                <h3 className="font-headline-sm text-xl md:text-2xl text-[#0c0907] mb-4">
                  {discipline.title}
                </h3>

                <p className="font-body-md text-sm md:text-base text-[#4d4540] font-light leading-relaxed mb-8">
                  {discipline.description}
                </p>
              </div>

              <div>
                <ul className="space-y-3 pt-6 border-t border-[#cfc4bd]/30 font-body-sm text-xs md:text-sm text-[#4d4540]">
                  {discipline.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8e4d33] flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenConsultation(discipline.title)}
                  className="mt-6 w-full text-center py-2.5 rounded bg-[#f0eee8] hover:bg-[#ebe8e2] text-[#0c0907] font-label-caps text-[10px] uppercase tracking-wider transition-colors"
                >
                  Commission This Discipline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
