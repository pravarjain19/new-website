import React, { useState, useEffect } from 'react';
import { Menu, X, Bookmark } from 'lucide-react';

interface TopNavBarProps {
  onOpenConsultation: () => void;
  savedCount: number;
  onOpenDossier: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  onOpenConsultation,
  savedCount,
  onOpenDossier,
}) => {
  const [activeSection, setActiveSection] = useState<'work' | 'philosophy' | 'services' | 'journal' | 'contact'>('work');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        { id: 'selected-works', key: 'work' as const },
        { id: 'philosophy', key: 'philosophy' as const },
        { id: 'services', key: 'services' as const },
        { id: 'press', key: 'journal' as const },
        { id: 'consultation', key: 'contact' as const },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setActiveSection(section.key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#selected-works', key: 'work' },
    { label: 'Philosophy', href: '#philosophy', key: 'philosophy' },
    { label: 'Services', href: '#services', key: 'services' },
    { label: 'Journal', href: '#press', key: 'journal' },
    { label: 'Contact', href: '#consultation', key: 'contact' },
  ];

  return (
    <>
      <header
        className={`docked full-width top-0 sticky z-40 transition-all duration-300 ease-out border-b ${
          isScrolled
            ? 'bg-[#fcf9f3]/95 backdrop-blur-md border-[#cfc4bd]/70 shadow-sm'
            : 'bg-[#fcf9f3]/85 backdrop-blur-md border-[#cfc4bd]/40'
        }`}
      >
        <div className="w-full px-6 md:px-16 py-5 flex items-center justify-between">
          {/* Logo Wordmark */}
          <a
            href="#"
            className="font-headline-sm text-lg md:text-xl tracking-widest text-[#0c0907] uppercase focus:outline-none transition-opacity hover:opacity-85 font-normal"
          >
            ATELIER VAUCLUSE
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  className={`font-label-caps text-[11px] uppercase tracking-wider transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? 'text-[#0c0907] font-semibold border-b border-[#0c0907]'
                      : 'text-[#4d4540] hover:text-[#0c0907]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Curated Dossier Badge */}
            <button
              onClick={onOpenDossier}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#cfc4bd]/80 hover:border-[#8e4d33] text-[#4d4540] hover:text-[#0c0907] transition-colors text-xs"
              title="View Curated Spatial Dossier"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#8e4d33]" />
              <span className="hidden sm:inline font-label-caps uppercase text-[10px]">Dossier</span>
              {savedCount > 0 && (
                <span className="bg-[#8e4d33] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Book Consultation Button */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center bg-[#0c0907] text-[#fcf9f3] font-label-md text-xs md:text-sm px-6 py-3 rounded-lg hover:bg-[#24201d] transition-all duration-200 shadow-sm"
            >
              Book Consultation
            </button>

            {/* Mobile Menu Trigger */}
            <button
              aria-label="Open Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#0c0907] focus:outline-none p-1"
              type="button"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-[#fcf9f3] p-6 lg:hidden flex flex-col justify-between border-b border-[#cfc4bd] animate-fade-in">
          <nav className="flex flex-col space-y-6 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-headline-sm text-2xl text-[#0c0907] hover:text-[#8e4d33] transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#cfc4bd]/50 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center bg-[#0c0907] text-[#fcf9f3] font-label-md py-4 rounded-lg"
            >
              Book Consultation
            </button>
            <p className="text-center font-caption text-xs text-[#7e756f]">
              Paris • New York • Zurich
            </p>
          </div>
        </div>
      )}
    </>
  );
};
