import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Bookmark, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface SelectedWorksSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  savedProjectIds: string[];
  onToggleSaveProject: (projectId: string) => void;
}

export const SelectedWorksSection: React.FC<SelectedWorksSectionProps> = ({
  projects,
  onSelectProject,
  savedProjectIds,
  onToggleSaveProject,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    'Residential Architecture',
    'Heritage Adaptive Reuse',
    'Pavilion Architecture',
    'Private Salon'
  ];

  const filteredProjects = filterCategory === 'All'
    ? projects
    : projects.filter(p => p.category === filterCategory || p.tags.includes(filterCategory));

  // Extract the specific 4 projects from the screenshot to maintain exact asymmetrical grid
  const tribeca = projects.find(p => p.id === 'tribeca-penthouse') || projects[0];
  const provence = projects.find(p => p.id === 'residence-de-provence') || projects[1];
  const sylvan = projects.find(p => p.id === 'casa-sylvan') || projects[2];
  const luynes = projects.find(p => p.id === 'hotel-particulier-luynes') || projects[3];

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-[#f6f3ed] border-t border-[#cfc4bd]/40" id="selected-works">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#cfc4bd]/60 gap-4">
          <div>
            <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold tracking-wider">
              Volume &amp; Form
            </span>
            <h2 className="font-headline-md md:font-headline-lg text-3xl md:text-5xl text-[#0c0907] mt-2 font-normal">
              Selected Works
            </h2>
          </div>
          <p className="font-body-md text-sm md:text-base text-[#4d4540] max-w-md font-light leading-relaxed">
            A calibrated selection of completed residential retreats and historic restorations, each grounded in site-specific stone and custom millwork.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded text-xs font-label-caps uppercase tracking-wider transition-all whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-[#0c0907] text-[#fcf9f3]'
                  : 'bg-[#ebe8e2] text-[#4d4540] hover:bg-[#cfc4bd]/70'
              }`}
            >
              {cat === 'All' ? 'Curated Portfolio' : cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Portfolio Grid: Exact composition as designed */}
        {filterCategory === 'All' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 1: The Tribeca Penthouse (8 Columns) */}
            <div className="md:col-span-8 group">
              <div className="bg-[#fcf9f3] rounded-xl overflow-hidden border border-[#cfc4bd]/60 transition-all duration-300 hover:border-[#7e756f] shadow-sm flex flex-col">
                <div 
                  className="aspect-[16/10] w-full overflow-hidden bg-[#f0eee8] cursor-pointer relative"
                  onClick={() => onSelectProject(tribeca)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    alt={tribeca.title}
                    src={tribeca.heroImage}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSaveProject(tribeca.id);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md text-[#4d4540] hover:text-[#8e4d33] transition-colors shadow"
                    title="Save to dossier"
                  >
                    {savedProjectIds.includes(tribeca.id) ? (
                      <Check className="w-4 h-4 text-[#8e4d33]" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-label-caps text-[11px] uppercase px-3 py-1 bg-[#ebe8e2] rounded text-[#4d4540]">
                        Residential Architecture
                      </span>
                      <span className="font-label-caps text-[11px] uppercase px-3 py-1 bg-[#ebe8e2] rounded text-[#4d4540]">
                        Interior Curation
                      </span>
                    </div>
                    <span className="font-label-caps text-xs text-[#7e756f] uppercase tracking-wider">
                      New York • 2024
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectProject(tribeca)}
                    className="font-headline-sm text-2xl text-[#0c0907] mb-3 cursor-pointer hover:text-[#8e4d33] transition-colors"
                  >
                    {tribeca.title}
                  </h3>

                  <p className="font-body-md text-sm md:text-base text-[#4d4540] font-light mb-6 line-clamp-2 leading-relaxed">
                    5,200 sq ft duplex loft synthesized through bespoke smoked walnut partitions, honed Belgian blue stone hearths, and handcrafted patinated brass fittings.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#cfc4bd]/40">
                    <span className="font-caption text-xs text-[#7e756f]">
                      Scale: 480 m² / Complete Renovation
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(tribeca)}
                      className="inline-flex items-center space-x-2 font-label-md text-xs text-[#0c0907] hover:text-[#8e4d33] transition-colors duration-200"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Résidence de Provence (4 Columns - Offset Tall) */}
            <div className="md:col-span-4 group md:mt-12">
              <div className="bg-[#fcf9f3] rounded-xl overflow-hidden border border-[#cfc4bd]/60 transition-all duration-300 hover:border-[#7e756f] flex flex-col h-full shadow-sm">
                <div 
                  className="aspect-[4/5] w-full overflow-hidden bg-[#f0eee8] cursor-pointer relative"
                  onClick={() => onSelectProject(provence)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    alt={provence.title}
                    src={provence.heroImage}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSaveProject(provence.id);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md text-[#4d4540] hover:text-[#8e4d33] transition-colors shadow"
                    title="Save to dossier"
                  >
                    {savedProjectIds.includes(provence.id) ? (
                      <Check className="w-4 h-4 text-[#8e4d33]" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-label-caps text-[10px] uppercase px-2.5 py-0.5 bg-[#ebe8e2] rounded text-[#4d4540]">
                        Heritage Adaptive Reuse
                      </span>
                      <span className="font-label-caps text-xs text-[#7e756f]">Gordes, FR</span>
                    </div>

                    <h3 
                      onClick={() => onSelectProject(provence)}
                      className="font-headline-sm text-xl text-[#0c0907] mb-2 cursor-pointer hover:text-[#8e4d33] transition-colors"
                    >
                      {provence.title}
                    </h3>

                    <p className="font-body-sm text-xs md:text-sm text-[#4d4540] font-light mb-6 leading-relaxed">
                      17th-century stone bastide transformed into a tranquil contemporary retreat, honoring dry-stacked lime masonry and raw timber trusses.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#cfc4bd]/40 flex items-center justify-between">
                    <span className="font-caption text-xs text-[#7e756f]">Gordes, Luberon</span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(provence)}
                      className="inline-flex items-center space-x-1 font-label-md text-xs text-[#0c0907] hover:text-[#8e4d33] transition-colors duration-200"
                    >
                      <span>Monograph</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Casa Sylvan (5 Columns) */}
            <div className="md:col-span-5 group">
              <div className="bg-[#fcf9f3] rounded-xl overflow-hidden border border-[#cfc4bd]/60 transition-all duration-300 hover:border-[#7e756f] flex flex-col h-full shadow-sm">
                <div 
                  className="aspect-[4/3] w-full overflow-hidden bg-[#f0eee8] cursor-pointer relative"
                  onClick={() => onSelectProject(sylvan)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    alt={sylvan.title}
                    src={sylvan.heroImage}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSaveProject(sylvan.id);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md text-[#4d4540] hover:text-[#8e4d33] transition-colors shadow"
                    title="Save to dossier"
                  >
                    {savedProjectIds.includes(sylvan.id) ? (
                      <Check className="w-4 h-4 text-[#8e4d33]" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-label-caps text-[10px] uppercase px-2.5 py-0.5 bg-[#ebe8e2] rounded text-[#4d4540]">
                        Pavilion Architecture
                      </span>
                      <span className="font-label-caps text-xs text-[#7e756f]">Kyoto, JP</span>
                    </div>

                    <h3 
                      onClick={() => onSelectProject(sylvan)}
                      className="font-headline-sm text-xl text-[#0c0907] mb-2 cursor-pointer hover:text-[#8e4d33] transition-colors"
                    >
                      {sylvan.title}
                    </h3>

                    <p className="font-body-sm text-xs md:text-sm text-[#4d4540] font-light mb-4 leading-relaxed">
                      A synthesis of Scandinavian restraint and Japanese joinery, framed in local Yoshino cedar and monolithic travertine bath plinths.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#cfc4bd]/40 flex items-center justify-between">
                    <span className="font-caption text-xs text-[#7e756f]">Higashiyama Foothills</span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(sylvan)}
                      className="inline-flex items-center space-x-1 font-label-md text-xs text-[#0c0907] hover:text-[#8e4d33] transition-colors duration-200"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4: Hôtel Particulier Luynes (7 Columns) */}
            <div className="md:col-span-7 group">
              <div className="bg-[#fcf9f3] rounded-xl overflow-hidden border border-[#cfc4bd]/60 transition-all duration-300 hover:border-[#7e756f] shadow-sm">
                <div 
                  className="aspect-[16/10] w-full overflow-hidden bg-[#f0eee8] cursor-pointer relative"
                  onClick={() => onSelectProject(luynes)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    alt={luynes.title}
                    src={luynes.heroImage}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSaveProject(luynes.id);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md text-[#4d4540] hover:text-[#8e4d33] transition-colors shadow"
                    title="Save to dossier"
                  >
                    {savedProjectIds.includes(luynes.id) ? (
                      <Check className="w-4 h-4 text-[#8e4d33]" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-label-caps text-[10px] uppercase px-3 py-1 bg-[#ebe8e2] rounded text-[#4d4540]">
                        Private Salon
                      </span>
                    </div>
                    <span className="font-label-caps text-xs text-[#7e756f]">Saint-Germain, Paris</span>
                  </div>

                  <h3 
                    onClick={() => onSelectProject(luynes)}
                    className="font-headline-sm text-2xl text-[#0c0907] mb-2 cursor-pointer hover:text-[#8e4d33] transition-colors"
                  >
                    {luynes.title}
                  </h3>

                  <p className="font-body-md text-sm md:text-base text-[#4d4540] font-light mb-6 leading-relaxed">
                    Restrained Haussmannian intervention weaving 18th-century boiserie restoration with contemporary acoustic ceiling panels and unlacquered nickel.
                  </p>

                  <div className="pt-4 border-t border-[#cfc4bd]/40 flex items-center justify-between">
                    <span className="font-caption text-xs text-[#7e756f]">Paris VII • Private Client</span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(luynes)}
                      className="inline-flex items-center space-x-2 font-label-md text-xs text-[#0c0907] hover:text-[#8e4d33] transition-colors duration-200"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Project View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#fcf9f3] rounded-xl overflow-hidden border border-[#cfc4bd]/60 transition-all duration-300 hover:border-[#7e756f] flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div 
                    className="aspect-[4/3] w-full overflow-hidden bg-[#f0eee8] cursor-pointer relative"
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveProject(project.id);
                      }}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md text-[#4d4540] hover:text-[#8e4d33] transition-colors"
                    >
                      {savedProjectIds.includes(project.id) ? (
                        <Check className="w-3.5 h-3.5 text-[#8e4d33]" />
                      ) : (
                        <Bookmark className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-caps text-[10px] uppercase text-[#8e4d33]">{project.category}</span>
                      <span className="font-caption text-xs text-[#7e756f]">{project.location}</span>
                    </div>
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="font-headline-sm text-xl text-[#0c0907] cursor-pointer hover:text-[#8e4d33] transition-colors"
                    >
                      {project.title}
                    </h3>
                    <p className="font-body-sm text-xs text-[#4d4540] mt-2 line-clamp-2 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#cfc4bd]/40 flex items-center justify-between">
                  <span className="font-caption text-xs text-[#7e756f]">{project.scale}</span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-[#0c0907] hover:text-[#8e4d33] flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
