import React from 'react';
import { Bookmark, Check, ZoomIn } from 'lucide-react';
import { MaterialItem } from '../data/portfolioData';

interface MaterialitySectionProps {
  materials: MaterialItem[];
  onSelectMaterial: (material: MaterialItem) => void;
  savedMaterialCodes: string[];
  onToggleSaveMaterial: (code: string) => void;
  onOpenTreatise: () => void;
}

export const MaterialitySection: React.FC<MaterialitySectionProps> = ({
  materials,
  onSelectMaterial,
  savedMaterialCodes,
  onToggleSaveMaterial,
  onOpenTreatise,
}) => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-[#fcf9f3] relative overflow-hidden" id="philosophy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Commentary */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold tracking-wider">
              Tactual Integrity
            </span>
            <h2 className="font-headline-md md:font-headline-lg text-3xl md:text-5xl text-[#0c0907] mt-2 mb-6 leading-tight font-normal">
              The Materiality Study
            </h2>

            <p className="font-body-lg text-base md:text-lg text-[#4d4540] font-light leading-relaxed mb-6">
              We reject synthetic perfection. Our spaces celebrate the geological epoch of unpolished stone, the living breath of naturally seasoned hardwoods, and the patinated traces left by time and touch.
            </p>

            <p className="font-body-md text-sm md:text-base text-[#7e756f] font-light mb-8 leading-relaxed">
              Every project begins with a bespoke tactile crate: hand-quarried minerals, mineral pigments, and bespoke woven fabrics curated specifically for the site's unique solar orientation.
            </p>

            {/* Principal Quote Box */}
            <div 
              onClick={onOpenTreatise}
              className="p-6 bg-[#f0eee8] rounded-lg border border-[#cfc4bd]/60 cursor-pointer hover:border-[#8e4d33] transition-colors group"
            >
              <p className="font-title-md text-lg text-[#0c0907] italic font-headline-sm mb-2 group-hover:text-[#8e4d33] transition-colors">
                "Architecture begins where daylight strikes honest stone."
              </p>
              <div className="flex items-center justify-between">
                <p className="font-label-caps text-[10px] text-[#4d4540] uppercase tracking-wider">
                  — Jean-Marc Vaucluse, Design Principal
                </p>
                <span className="font-caption text-[11px] text-[#8e4d33] underline">Read treatise</span>
              </div>
            </div>
          </div>

          {/* Right 4 Materiality Swatches / Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {materials.map((mat) => {
              const isSaved = savedMaterialCodes.includes(mat.code);

              return (
                <div
                  key={mat.code}
                  className="bg-[#f6f3ed] p-6 rounded-xl border border-[#cfc4bd]/60 hover:border-[#8e4d33] transition-colors duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Swatch Image */}
                    <div
                      onClick={() => onSelectMaterial(mat)}
                      className="aspect-square w-full rounded-lg overflow-hidden mb-6 bg-[#f0eee8] relative cursor-pointer"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={mat.name}
                        src={mat.imageUrl}
                      />
                      <span className="absolute top-3 left-3 bg-[#0c0907] text-[#fcf9f3] font-label-caps text-[10px] px-2 py-0.5 rounded shadow">
                        {mat.code}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSaveMaterial(mat.code);
                        }}
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md text-[#4d4540] hover:text-[#8e4d33] transition-colors shadow"
                        title={isSaved ? "Saved in dossier" : "Save swatch to dossier"}
                      >
                        {isSaved ? (
                          <Check className="w-3.5 h-3.5 text-[#8e4d33]" />
                        ) : (
                          <Bookmark className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#fcf9f3]/90 text-[#0c0907] px-3 py-1 rounded text-[11px] font-label-caps uppercase flex items-center gap-1 shadow">
                          <ZoomIn className="w-3 h-3 text-[#8e4d33]" />
                          Inspect Grain
                        </span>
                      </div>
                    </div>

                    <h4 
                      onClick={() => onSelectMaterial(mat)}
                      className="font-headline-sm text-xl text-[#0c0907] mb-1 cursor-pointer hover:text-[#8e4d33] transition-colors"
                    >
                      {mat.name}
                    </h4>
                    <p className="font-label-caps text-[10px] text-[#8e4d33] mb-3 uppercase tracking-wider">
                      {mat.subtitle}
                    </p>
                    <p className="font-body-sm text-xs md:text-sm text-[#4d4540] font-light leading-relaxed">
                      {mat.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#cfc4bd]/40 flex items-center justify-between text-[11px] text-[#7e756f]">
                    <span>Acoustic: {mat.technicalSpecs.acousticCoefficient.split(' ')[0]}</span>
                    <button
                      onClick={() => onSelectMaterial(mat)}
                      className="text-[#0c0907] hover:text-[#8e4d33] font-medium"
                    >
                      Full Analysis &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
