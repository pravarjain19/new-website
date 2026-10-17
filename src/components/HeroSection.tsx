import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenTreatise: () => void;
  onSelectProject: (project: Project) => void;
  featuredProject: Project;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTreatise,
  onSelectProject,
  featuredProject,
}) => {
  return (
    <section className="relative pt-10 md:pt-16 pb-20 md:pb-28 px-6 md:px-16 overflow-hidden bg-[#fcf9f3]">
      <div className="max-w-7xl mx-auto">
        {/* Top Eyebrow & Geographic Indicators */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#cfc4bd]/50 pb-6 mb-12 md:mb-16 gap-4">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#8e4d33] animate-pulse"></span>
            <p className="font-label-caps text-[11px] text-[#4d4540] uppercase tracking-wider">
              PARIS 01<sup className="text-[9px]">er</sup> • NEW YORK SOHO
            </p>
          </div>
          <p className="font-label-caps text-[11px] text-[#7e756f] uppercase tracking-wider">
            Bespoke Spatial Design &amp; Monograph Volume IV
          </p>
        </div>

        {/* Asymmetrical 12-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-end">
          {/* Left Statement: 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              <span className="font-label-caps text-xs text-[#8e4d33] uppercase mb-4 inline-block font-semibold tracking-widest">
                Spatial Manifestation
              </span>
              <h1 className="font-headline-lg-mobile md:font-display text-4xl sm:text-5xl lg:text-7xl text-[#0c0907] tracking-tight font-normal mb-8 leading-[1.08]">
                Spaces sculpted in silence, texture, and light.
              </h1>
            </div>

            <div className="pt-4 border-t border-[#cfc4bd]/40 mt-4 max-w-xl">
              <p className="font-body-lg text-base sm:text-lg text-[#4d4540] leading-relaxed mb-8 font-light">
                We orchestrate architecture from the tactile soul inward. By harmonizing raw French travertine, Japanese cedar joinery, and shadow-delineated volumes, our ateliers create enduring sanctuaries free from temporal ornament.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#selected-works"
                  className="inline-flex items-center space-x-2 font-label-md text-xs sm:text-sm text-[#0c0907] font-semibold group pb-1 border-b border-[#0c0907] hover:text-[#8e4d33] hover:border-[#8e4d33] transition-colors duration-200"
                >
                  <span>Explore Curated Archive</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>

                <button
                  type="button"
                  onClick={onOpenTreatise}
                  className="font-label-md text-xs sm:text-sm text-[#7e756f] hover:text-[#0c0907] transition-colors duration-200 text-left"
                >
                  Read The Materiality Treatise
                </button>
              </div>
            </div>
          </div>

          {/* Right Architectural Canvas: 5 Columns */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProject(featuredProject)}
              className="relative bg-[#f0eee8] rounded-xl overflow-hidden border border-[#cfc4bd]/60 shadow-sm group cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  alt="Villa Cap d'Antibes sun-drenched minimalist living room"
                  src={featuredProject.heroImage}
                />
              </div>

              {/* Architectural Badge Floating Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-5 bg-[#fcf9f3]/90 backdrop-blur-md rounded-lg border border-[#cfc4bd]/60 group-hover:border-[#8e4d33] transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-label-caps text-[10px] text-[#8e4d33] font-semibold uppercase tracking-wider">
                      Featured Archive
                    </p>
                    <p className="font-headline-sm text-xl text-[#0c0907]">
                      {featuredProject.title}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-label-caps text-[10px] text-[#4d4540] bg-[#ebe8e2] px-2.5 py-1 rounded">
                      {featuredProject.year}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#7e756f] group-hover:text-[#8e4d33] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-[#cfc4bd]/30 flex items-center justify-between text-[#4d4540] font-caption text-xs">
                  <span>Private Residence • {featuredProject.scale}</span>
                  <span>{featuredProject.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
