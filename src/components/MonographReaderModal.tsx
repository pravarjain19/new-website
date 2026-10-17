import React, { useState } from 'react';
import { X, BookOpen, Clock, Calendar, Share2, Check } from 'lucide-react';
import { MONOGRAPH_ESSAYS } from '../data/portfolioData';

interface MonographReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEssayId?: string;
  onOpenConsultation: () => void;
}

export const MonographReaderModal: React.FC<MonographReaderModalProps> = ({
  isOpen,
  onClose,
  initialEssayId = 'materiality-treatise',
  onOpenConsultation,
}) => {
  const [selectedEssayId, setSelectedEssayId] = useState(initialEssayId);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentEssay = MONOGRAPH_ESSAYS.find(e => e.id === selectedEssayId) || MONOGRAPH_ESSAYS[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-10 animate-fade-in">
      <div 
        className="bg-[#fcf9f3] text-[#1c1c18] w-full max-w-4xl rounded-xl border border-[#cfc4bd]/80 shadow-2xl overflow-hidden my-auto relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#cfc4bd]/40 bg-[#f6f3ed]/95 sticky top-0 z-20 backdrop-blur">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-4 h-4 text-[#8e4d33]" />
            <span className="font-label-caps text-xs uppercase tracking-widest text-[#4d4540]">
              The Vaucluse Monograph Archive
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="p-1.5 rounded text-[#4d4540] hover:text-[#0c0907] hover:bg-[#ebe8e2] transition-colors flex items-center gap-1 text-xs"
              title="Share Treatise"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#4d4540] hover:text-[#0c0907] hover:bg-[#ebe8e2] transition-colors"
              aria-label="Close Monograph"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Essay Selector Tabs */}
        <div className="flex border-b border-[#cfc4bd]/40 bg-[#ebe8e2]/60 px-6 overflow-x-auto">
          {MONOGRAPH_ESSAYS.map(essay => (
            <button
              key={essay.id}
              onClick={() => setSelectedEssayId(essay.id)}
              className={`py-3 px-4 font-label-caps text-xs uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
                selectedEssayId === essay.id
                  ? 'border-[#0c0907] text-[#0c0907] font-semibold bg-[#fcf9f3]'
                  : 'border-transparent text-[#7e756f] hover:text-[#0c0907]'
              }`}
            >
              {essay.title}
            </button>
          ))}
        </div>

        {/* Reading Canvas */}
        <div className="max-h-[80vh] overflow-y-auto px-6 md:px-16 py-10 md:py-14 max-w-3xl mx-auto space-y-8">
          <div className="border-b border-[#cfc4bd]/40 pb-8">
            <div className="flex items-center gap-4 text-xs text-[#7e756f] mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#8e4d33]" />
                {currentEssay.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8e4d33]" />
                {currentEssay.readTime}
              </span>
            </div>

            <h1 className="font-headline-lg text-3xl md:text-5xl text-[#0c0907] font-normal leading-[1.1] mb-4">
              {currentEssay.title}
            </h1>
            <p className="font-title-md text-lg text-[#8e4d33] italic">
              "{currentEssay.subtitle}"
            </p>

            <div className="pt-4 flex items-center justify-between text-xs text-[#4d4540]">
              <div>
                <p className="font-semibold text-[#0c0907]">{currentEssay.author}</p>
                <p className="text-[#7e756f]">{currentEssay.role}</p>
              </div>
            </div>
          </div>

          {/* Essay Paragraphs */}
          <div className="space-y-6 font-body-lg text-lg text-[#1c1c18] font-light leading-relaxed">
            {currentEssay.fullText.map((paragraph, index) => (
              <p 
                key={index} 
                className={index === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#8e4d33] first-letter:font-normal leading-relaxed" : "leading-relaxed"}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="p-8 rounded-lg bg-[#f0eee8] border border-[#cfc4bd]/60 space-y-4 text-center mt-12">
            <h4 className="font-headline-sm text-xl text-[#0c0907]">
              Engage with our Spatial Research
            </h4>
            <p className="font-body-sm text-xs text-[#4d4540] max-w-md mx-auto">
              Our print monographs are distributed exclusively to clients, collaborators, and university architectural archives worldwide.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="bg-[#0c0907] text-white hover:bg-[#24201d] px-6 py-2.5 rounded font-label-caps text-xs uppercase tracking-wider transition-colors"
              >
                Request Print Volume or Commission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
