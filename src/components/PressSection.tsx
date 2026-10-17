import React from 'react';

export const PressSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-16 bg-[#fcf9f3]" id="press">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#cfc4bd]/40">
          <p className="font-label-caps text-xs text-[#7e756f] uppercase tracking-widest text-center md:text-left">
            Honored &amp; Published Internationally
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center opacity-85">
            <div className="text-center group cursor-default">
              <span className="font-headline-sm text-xl md:text-2xl text-[#0c0907] tracking-tighter uppercase font-semibold block transition-transform group-hover:scale-105">
                AD 100
              </span>
              <p className="font-caption text-[11px] text-[#4d4540] mt-1">2023 • 2024</p>
            </div>

            <div className="text-center group cursor-default">
              <span className="font-headline-sm text-xl md:text-2xl text-[#0c0907] tracking-widest uppercase italic block transition-transform group-hover:scale-105 font-serif">
                ELLE DÉCOR
              </span>
              <p className="font-caption text-[11px] text-[#4d4540] mt-1">A-List Excellence</p>
            </div>

            <div className="text-center group cursor-default">
              <span className="font-headline-sm text-xl md:text-2xl text-[#0c0907] tracking-wider uppercase font-light block transition-transform group-hover:scale-105">
                WALLPAPER*
              </span>
              <p className="font-caption text-[11px] text-[#4d4540] mt-1">Design Awards</p>
            </div>

            <div className="text-center group cursor-default">
              <span className="font-headline-sm text-lg md:text-xl text-[#0c0907] tracking-normal uppercase block transition-transform group-hover:scale-105">
                THE WORLD OF INTERIORS
              </span>
              <p className="font-caption text-[11px] text-[#4d4540] mt-1">Monograph Feature</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
