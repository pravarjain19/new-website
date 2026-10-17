import { useState, useEffect } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { MaterialitySection } from './components/MaterialitySection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { PressSection } from './components/PressSection';
import { ConsultationSection } from './components/ConsultationSection';
import { AtelierFooter } from './components/AtelierFooter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { MaterialInspectorModal } from './components/MaterialInspectorModal';
import { MonographReaderModal } from './components/MonographReaderModal';
import { DossierDrawer } from './components/DossierDrawer';
import { PROJECTS, MATERIAL_STUDIES, Project, MaterialItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const [isTreatiseOpen, setIsTreatiseOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [consultationTypology, setConsultationTypology] = useState<string | undefined>(undefined);

  // Curated Dossier saved items state with localStorage preservation
  const [savedProjectIds, setSavedProjectIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('av_saved_projects');
      return stored ? JSON.parse(stored) : ['tribeca-penthouse'];
    } catch {
      return ['tribeca-penthouse'];
    }
  });

  const [savedMaterialCodes, setSavedMaterialCodes] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('av_saved_materials');
      return stored ? JSON.parse(stored) : ['M-01'];
    } catch {
      return ['M-01'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('av_saved_projects', JSON.stringify(savedProjectIds));
    } catch {
      // storage unavailable
    }
  }, [savedProjectIds]);

  useEffect(() => {
    try {
      localStorage.setItem('av_saved_materials', JSON.stringify(savedMaterialCodes));
    } catch {
      // storage unavailable
    }
  }, [savedMaterialCodes]);

  const toggleSaveProject = (projectId: string) => {
    setSavedProjectIds(prev => 
      prev.includes(projectId) ? prev.filter(id => id !== projectId) : [...prev, projectId]
    );
  };

  const toggleSaveMaterial = (code: string) => {
    setSavedMaterialCodes(prev => 
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  const handleOpenConsultation = (typology?: string) => {
    if (typology) {
      setConsultationTypology(typology);
    }
    const consultationEl = document.getElementById('consultation');
    if (consultationEl) {
      consultationEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 500);
    }
  };

  const handleOpenMaterialByCode = (code: string) => {
    const found = MATERIAL_STUDIES.find(m => m.code === code);
    if (found) {
      setSelectedMaterial(found);
    }
  };

  const featuredProject = PROJECTS[0]; // Villa Cap d'Antibes

  const totalSavedCount = savedProjectIds.length + savedMaterialCodes.length;

  return (
    <div className="min-h-screen bg-[#fcf9f3] text-[#1c1c18] font-sans antialiased selection:bg-[#8e4d33] selection:text-white">
      {/* 1. EDITORIAL NAVIGATION HEADER */}
      <TopNavBar
        onOpenConsultation={() => handleOpenConsultation()}
        savedCount={totalSavedCount}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      <main>
        {/* 2. HERO SECTION */}
        <HeroSection
          featuredProject={featuredProject}
          onOpenTreatise={() => setIsTreatiseOpen(true)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. CURATED SELECTED WORKS */}
        <SelectedWorksSection
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
          savedProjectIds={savedProjectIds}
          onToggleSaveProject={toggleSaveProject}
        />

        {/* 4. STUDIO PHILOSOPHY & MATERIALITY STUDY */}
        <MaterialitySection
          materials={MATERIAL_STUDIES}
          onSelectMaterial={(material) => setSelectedMaterial(material)}
          savedMaterialCodes={savedMaterialCodes}
          onToggleSaveMaterial={toggleSaveMaterial}
          onOpenTreatise={() => setIsTreatiseOpen(true)}
        />

        {/* 5. PRACTICE DISCIPLINES & SERVICES */}
        <DisciplinesSection
          onOpenConsultation={(disciplineTitle) => handleOpenConsultation(disciplineTitle)}
        />

        {/* 6. PRESS & RECOGNITION */}
        <PressSection />

        {/* 7. CONSULTATION & ATELIER DIALOGUE */}
        <ConsultationSection
          initialTypology={consultationTypology}
          savedItemCount={totalSavedCount}
        />
      </main>

      {/* 8. ATELIER FOOTER */}
      <AtelierFooter
        onOpenTreatise={() => setIsTreatiseOpen(true)}
      />

      {/* MODALS & DRAWERS */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isSaved={selectedProject ? savedProjectIds.includes(selectedProject.id) : false}
        onToggleSave={toggleSaveProject}
        onOpenConsultation={(title) => handleOpenConsultation(title)}
        onOpenMaterial={handleOpenMaterialByCode}
      />

      <MaterialInspectorModal
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        isSaved={selectedMaterial ? savedMaterialCodes.includes(selectedMaterial.code) : false}
        onToggleSave={toggleSaveMaterial}
      />

      <MonographReaderModal
        isOpen={isTreatiseOpen}
        onClose={() => setIsTreatiseOpen(false)}
        onOpenConsultation={() => handleOpenConsultation('Monograph Vol. IV Inquiry')}
      />

      <DossierDrawer
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        savedProjectIds={savedProjectIds}
        savedMaterialCodes={savedMaterialCodes}
        allProjects={PROJECTS}
        allMaterials={MATERIAL_STUDIES}
        onRemoveProject={toggleSaveProject}
        onRemoveMaterial={toggleSaveMaterial}
        onOpenProject={(p) => setSelectedProject(p)}
        onOpenMaterial={(m) => setSelectedMaterial(m)}
        onInitiateInquiry={() => handleOpenConsultation('Client Spatial Dossier Selection')}
      />
    </div>
  );
}
