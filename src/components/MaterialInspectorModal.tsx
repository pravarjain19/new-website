import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Check, Bookmark, Layers, Volume2, ShieldCheck, Thermometer, Sparkles } from 'lucide-react';
import { MaterialItem } from '../data/portfolioData';

interface MaterialInspectorModalProps {
  material: MaterialItem | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (code: string) => void;
  onSelectProject?: (projectId: string) => void;
}

export const MaterialInspectorModal: React.FC<MaterialInspectorModalProps> = ({
  material,
  onClose,
  isSaved,
  onToggleSave,
  onSelectProject,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!material) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex justify-center items-center p-4 sm:p-6 md:p-8 animate-fade-in">
      <div 
        className="bg-[#fcf9f3] text-[#1c1c18] w-full max-w-4xl rounded-xl border border-[#cfc4bd]/80 shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#cfc4bd]/40 bg-[#f6f3ed] sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <span className="font-label-caps text-xs uppercase px-2 py-0.5 bg-[#0c0907] text-[#fcf9f3] rounded font-semibold">
              {material.code}
            </span>
            <span className="font-label-caps text-xs uppercase tracking-wider text-[#8e4d33] font-semibold">
              Tactile Materiality Archive
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onToggleSave(material.code)}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded transition-all ${
                isSaved 
                  ? 'bg-[#8e4d33] text-white' 
                  : 'bg-[#ebe8e2] text-[#1c1c18] hover:bg-[#cfc4bd]/60'
              }`}
            >
              {isSaved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              <span>{isSaved ? 'In Dossier' : 'Save Swatch'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#4d4540] hover:text-[#0c0907] hover:bg-[#ebe8e2] transition-colors"
              aria-label="Close Material Inspector"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Visual Swatch with Tactile Zoom */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#cfc4bd]/80 bg-[#ebe8e2] shadow-inner group">
                <img
                  src={material.imageUrl}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out cursor-zoom-in"
                  style={{ transform: `scale(${zoomLevel})` }}
                  onClick={() => setZoomLevel(prev => (prev === 1 ? 1.6 : prev === 1.6 ? 2.2 : 1))}
                />
                
                {/* Floating Zoom Controls */}
                <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-[#fcf9f3]/90 backdrop-blur-md px-2 py-1 rounded border border-[#cfc4bd]/60 shadow-sm">
                  <button 
                    onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.5))} 
                    className="p-1 hover:text-[#8e4d33] transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono px-1 font-semibold">{Math.round(zoomLevel * 100)}%</span>
                  <button 
                    onClick={() => setZoomLevel(Math.min(2.5, zoomLevel + 0.5))} 
                    className="p-1 hover:text-[#8e4d33] transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="absolute top-3 left-3 bg-[#0c0907]/80 backdrop-blur-md text-white text-[10px] font-label-caps uppercase px-2 py-0.5 rounded">
                  Macro Microstructure
                </div>
              </div>

              <p className="text-[11px] text-[#7e756f] text-center italic">
                Click image or use controls to inspect surface pores, fiber grain, and mineral crystals.
              </p>
            </div>

            {/* Geological Origin & Description */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold">
                  {material.subtitle}
                </span>
                <h3 className="font-headline-md text-3xl text-[#0c0907] font-normal mt-1">
                  {material.name}
                </h3>
                <p className="text-xs text-[#7e756f] mt-1 font-medium">
                  Origin: {material.origin}
                </p>
              </div>

              <p className="font-body-md text-sm text-[#4d4540] font-light leading-relaxed border-l-2 border-[#8e4d33] pl-3 py-1">
                {material.description}
              </p>

              <div>
                <h4 className="font-label-caps text-xs text-[#0c0907] uppercase font-semibold mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#8e4d33]" />
                  <span>Geological &amp; Craft Provenance</span>
                </h4>
                <p className="font-body-sm text-xs text-[#4d4540] font-light leading-relaxed bg-[#f0eee8] p-3.5 rounded border border-[#cfc4bd]/40">
                  {material.provenanceDetails}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-2">
                <h4 className="font-label-caps text-xs text-[#0c0907] uppercase font-semibold mb-3">
                  Architectural Performance Parameters
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-[#f6f3ed] border border-[#cfc4bd]/40">
                    <span className="flex items-center gap-1.5 text-[#4d4540]">
                      <Volume2 className="w-3.5 h-3.5 text-[#8e4d33]" />
                      <span>Acoustic Absorption</span>
                    </span>
                    <span className="font-medium text-[#0c0907]">{material.technicalSpecs.acousticCoefficient}</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-[#f6f3ed] border border-[#cfc4bd]/40">
                    <span className="flex items-center gap-1.5 text-[#4d4540]">
                      <Thermometer className="w-3.5 h-3.5 text-[#8e4d33]" />
                      <span>Thermal Inertia</span>
                    </span>
                    <span className="font-medium text-[#0c0907]">{material.technicalSpecs.thermalMass}</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-[#f6f3ed] border border-[#cfc4bd]/40">
                    <span className="flex items-center gap-1.5 text-[#4d4540]">
                      <Sparkles className="w-3.5 h-3.5 text-[#8e4d33]" />
                      <span>Living Patina</span>
                    </span>
                    <span className="font-medium text-[#0c0907]">{material.technicalSpecs.patinaEvolution}</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-[#f6f3ed] border border-[#cfc4bd]/40">
                    <span className="flex items-center gap-1.5 text-[#4d4540]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8e4d33]" />
                      <span>Preservation Care</span>
                    </span>
                    <span className="font-medium text-[#0c0907]">{material.technicalSpecs.maintenance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
