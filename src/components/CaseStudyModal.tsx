import React, { useState } from 'react';
import { X, ArrowRight, Bookmark, Check, Compass, Ruler, Calendar, MapPin, Maximize2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (projectId: string) => void;
  onOpenConsultation: (projectTitle?: string) => void;
  onOpenMaterial?: (materialCode: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  isSaved,
  onToggleSave,
  onOpenConsultation,
  onOpenMaterial,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-10 animate-fade-in">
      <div 
        className="bg-[#fcf9f3] text-[#1c1c18] w-full max-w-5xl rounded-xl border border-[#cfc4bd]/80 shadow-2xl overflow-hidden my-auto relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#cfc4bd]/40 bg-[#f6f3ed]/90 sticky top-0 z-20 backdrop-blur">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#8e4d33]"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-[#4d4540]">
              Monograph Case Study • Vol. IV
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onToggleSave(project.id)}
              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium rounded transition-all ${
                isSaved 
                  ? 'bg-[#8e4d33] text-white' 
                  : 'bg-[#ebe8e2] text-[#1c1c18] hover:bg-[#cfc4bd]/60'
              }`}
              title="Save project to curated dossier"
            >
              {isSaved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              <span>{isSaved ? 'In Dossier' : 'Save to Dossier'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#4d4540] hover:text-[#0c0907] hover:bg-[#ebe8e2] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-12 space-y-12">
          {/* Title and Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-label-caps text-xs uppercase px-2.5 py-0.5 bg-[#ebe8e2] rounded text-[#4d4540]">
                {project.category}
              </span>
              <span className="font-label-caps text-xs uppercase px-2.5 py-0.5 bg-[#ebe8e2] rounded text-[#8e4d33]">
                {project.status}
              </span>
              <span className="font-caption text-xs text-[#7e756f]">
                Curated by {project.curator || 'Atelier Vaucluse'}
              </span>
            </div>

            <h2 className="font-display-mobile md:font-headline-lg text-3xl md:text-5xl text-[#0c0907] font-normal leading-tight mb-2">
              {project.title}
            </h2>
            <p className="font-title-md text-lg text-[#7e756f] font-light">
              {project.subtitle}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-6 border-t border-[#cfc4bd]/40">
              <div className="flex items-center space-x-2 text-[#4d4540]">
                <MapPin className="w-4 h-4 text-[#8e4d33]" />
                <div>
                  <p className="text-[10px] uppercase font-semibold text-[#7e756f]">Geography</p>
                  <p className="text-xs font-medium">{project.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[#4d4540]">
                <Ruler className="w-4 h-4 text-[#8e4d33]" />
                <div>
                  <p className="text-[10px] uppercase font-semibold text-[#7e756f]">Spatial Scale</p>
                  <p className="text-xs font-medium">{project.scale}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[#4d4540]">
                <Calendar className="w-4 h-4 text-[#8e4d33]" />
                <div>
                  <p className="text-[10px] uppercase font-semibold text-[#7e756f]">Year</p>
                  <p className="text-xs font-medium">{project.year}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[#4d4540]">
                <Compass className="w-4 h-4 text-[#8e4d33]" />
                <div>
                  <p className="text-[10px] uppercase font-semibold text-[#7e756f]">Solar Exposure</p>
                  <p className="text-xs font-medium">South / Southwest Circadian</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Visual Showcase with Gallery Switcher */}
          <div className="space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#cfc4bd]/60 bg-[#ebe8e2]">
              <img
                src={project.galleryImages[activeImageIndex]?.url || project.heroImage}
                alt={project.galleryImages[activeImageIndex]?.caption || project.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#fcf9f3]/90 backdrop-blur-md rounded border border-[#cfc4bd]/40 flex items-center justify-between text-xs text-[#4d4540]">
                <span>{project.galleryImages[activeImageIndex]?.caption}</span>
                <span className="text-[10px] uppercase tracking-wider text-[#7e756f] flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  Frame {activeImageIndex + 1} of {project.galleryImages.length}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === idx ? 'border-[#8e4d33] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Architectural Narrative and Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold">
                Spatial Philosophy & Narrative
              </span>
              <p className="font-body-md text-base text-[#4d4540] font-light leading-relaxed">
                {project.overview}
              </p>
              
              <div className="pt-4">
                <span className="font-label-caps text-xs text-[#7e756f] uppercase font-semibold block mb-2">
                  Structural & Acoustic Solution
                </span>
                <p className="font-body-sm text-sm text-[#4d4540] font-light leading-relaxed bg-[#f0eee8] p-4 rounded border border-[#cfc4bd]/40">
                  {project.architecturalChallenge}
                </p>
              </div>
            </div>

            {/* Materiality Palette & Specification */}
            <div className="md:col-span-5 space-y-4 bg-[#f6f3ed] p-6 rounded-lg border border-[#cfc4bd]/60">
              <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold block">
                Integrated Material Palette
              </span>
              <ul className="space-y-3">
                {project.materials.map((mat, i) => (
                  <li 
                    key={i} 
                    className="flex flex-col p-2.5 rounded bg-[#fcf9f3] border border-[#cfc4bd]/40 hover:border-[#8e4d33] transition-colors cursor-pointer group"
                    onClick={() => onOpenMaterial && onOpenMaterial(mat.code)}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-[#0c0907]">
                      <span className="group-hover:text-[#8e4d33] transition-colors">{mat.name}</span>
                      <span className="font-label-caps text-[10px] text-[#8e4d33] bg-[#ebe8e2] px-1.5 py-0.5 rounded">
                        {mat.code}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#7e756f] mt-1 font-light">
                      {mat.role}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#7e756f] italic">
                  Photography: {project.photographer || 'Studio Archive'}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-6 border-t border-[#cfc4bd]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#7e756f] text-center sm:text-left">
              Inquire about similar scale commissions with Atelier Vaucluse principals.
            </p>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0c0907] hover:bg-[#24201d] text-white px-6 py-3 rounded text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
              >
                <span>Commission Inquiry for this Typology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
