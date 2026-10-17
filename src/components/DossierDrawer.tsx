import React from 'react';
import { X, Trash2, ArrowRight, ExternalLink } from 'lucide-react';
import { Project, MaterialItem } from '../data/portfolioData';

interface DossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProjectIds: string[];
  savedMaterialCodes: string[];
  allProjects: Project[];
  allMaterials: MaterialItem[];
  onRemoveProject: (id: string) => void;
  onRemoveMaterial: (code: string) => void;
  onOpenProject: (project: Project) => void;
  onOpenMaterial: (material: MaterialItem) => void;
  onInitiateInquiry: () => void;
}

export const DossierDrawer: React.FC<DossierDrawerProps> = ({
  isOpen,
  onClose,
  savedProjectIds,
  savedMaterialCodes,
  allProjects,
  allMaterials,
  onRemoveProject,
  onRemoveMaterial,
  onOpenProject,
  onOpenMaterial,
  onInitiateInquiry,
}) => {
  if (!isOpen) return null;

  const savedProjects = allProjects.filter(p => savedProjectIds.includes(p.id));
  const savedMaterials = allMaterials.filter(m => savedMaterialCodes.includes(m.code));
  const totalSaved = savedProjects.length + savedMaterials.length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#fcf9f3] text-[#1c1c18] h-full shadow-2xl flex flex-col border-l border-[#cfc4bd]/60 animate-slide-left relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#cfc4bd]/40 bg-[#f6f3ed] flex items-center justify-between">
          <div>
            <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold">
              Client Curation
            </span>
            <h3 className="font-headline-sm text-xl text-[#0c0907] mt-0.5">
              Curated Spatial Dossier ({totalSaved})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#4d4540] hover:text-[#0c0907] hover:bg-[#ebe8e2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {totalSaved === 0 ? (
            <div className="text-center py-16 px-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#ebe8e2] flex items-center justify-center mx-auto text-[#7e756f]">
                <ExternalLink className="w-5 h-5" />
              </div>
              <p className="font-headline-sm text-lg text-[#0c0907]">Your dossier is currently pristine</p>
              <p className="font-body-sm text-xs text-[#7e756f] leading-relaxed">
                Click "Save to Dossier" on projects or material swatches as you browse to compile a bespoke tactile reference for your commission consultation.
              </p>
            </div>
          ) : (
            <>
              {/* Saved Projects */}
              {savedProjects.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-label-caps text-xs text-[#7e756f] uppercase font-semibold tracking-wider">
                    Referenced Projects ({savedProjects.length})
                  </h4>
                  <div className="space-y-2">
                    {savedProjects.map(proj => (
                      <div 
                        key={proj.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-[#f0eee8] border border-[#cfc4bd]/40 hover:border-[#8e4d33] transition-colors"
                      >
                        <div 
                          className="flex items-center space-x-3 cursor-pointer flex-1 min-w-0"
                          onClick={() => {
                            onClose();
                            onOpenProject(proj);
                          }}
                        >
                          <img src={proj.heroImage} alt={proj.title} className="w-12 h-12 object-cover rounded flex-shrink-0" />
                          <div className="truncate">
                            <p className="font-headline-sm text-sm text-[#0c0907] truncate">{proj.title}</p>
                            <p className="font-caption text-[11px] text-[#7e756f]">{proj.location}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveProject(proj.id)}
                          className="p-1.5 text-[#7e756f] hover:text-[#ba1a1a] transition-colors ml-2"
                          title="Remove from dossier"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Material Swatches */}
              {savedMaterials.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[#cfc4bd]/40">
                  <h4 className="font-label-caps text-xs text-[#7e756f] uppercase font-semibold tracking-wider">
                    Selected Material Samples ({savedMaterials.length})
                  </h4>
                  <div className="space-y-2">
                    {savedMaterials.map(mat => (
                      <div 
                        key={mat.code}
                        className="flex items-center justify-between p-3 rounded-lg bg-[#f0eee8] border border-[#cfc4bd]/40 hover:border-[#8e4d33] transition-colors"
                      >
                        <div 
                          className="flex items-center space-x-3 cursor-pointer flex-1 min-w-0"
                          onClick={() => {
                            onClose();
                            onOpenMaterial(mat);
                          }}
                        >
                          <img src={mat.imageUrl} alt={mat.name} className="w-12 h-12 object-cover rounded flex-shrink-0" />
                          <div className="truncate">
                            <p className="font-headline-sm text-sm text-[#0c0907] truncate">{mat.name}</p>
                            <p className="font-caption text-[11px] text-[#8e4d33]">{mat.code} • {mat.subtitle}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveMaterial(mat.code)}
                          className="p-1.5 text-[#7e756f] hover:text-[#ba1a1a] transition-colors ml-2"
                          title="Remove from dossier"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Actions */}
        {totalSaved > 0 && (
          <div className="p-6 border-t border-[#cfc4bd]/40 bg-[#f6f3ed] space-y-3">
            <button
              onClick={() => {
                onClose();
                onInitiateInquiry();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#8e4d33] hover:bg-[#783c23] text-white py-3 rounded-lg font-label-md text-sm font-semibold transition-all shadow-sm"
            >
              <span>Attach Dossier to Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-[#7e756f]">
              Your {totalSaved} selected reference(s) will be prepared by the Atelier Director.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
