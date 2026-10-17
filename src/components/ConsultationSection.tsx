import React, { useState } from 'react';
import { Lock, CheckCircle2, Bookmark, Send } from 'lucide-react';

interface ConsultationSectionProps {
  initialTypology?: string;
  savedItemCount: number;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  initialTypology,
  savedItemCount,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [geography, setGeography] = useState('');
  const [studioSession, setStudioSession] = useState('Place Vendôme Atelier, Paris');
  const [brief, setBrief] = useState(
    initialTypology ? `Inquiring regarding commission similar to ${initialTypology}. ` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const code = `AV-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
      setInquiryCode(code);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setGeography('');
    setBrief('');
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-[#f6f3ed] border-t border-[#cfc4bd]/40" id="consultation">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-caps text-xs text-[#8e4d33] uppercase font-semibold tracking-wider">
            Commission Inquiries
          </span>
          <h2 className="font-headline-md md:font-headline-lg text-3xl md:text-5xl text-[#0c0907] mt-2 mb-4 font-normal">
            Initiate a Spatial Dialogue
          </h2>
          <p className="font-body-md text-sm md:text-base text-[#4d4540] font-light leading-relaxed">
            Atelier Vaucluse accepts a strictly limited number of private residential and cultural commissions annually to guarantee immersive principal dedication.
          </p>
        </div>

        {/* Dialogue Form Container */}
        <div className="bg-[#fcf9f3] rounded-xl border border-[#cfc4bd]/60 p-8 md:p-14 shadow-sm relative">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#f0eee8] border border-[#8e4d33] flex items-center justify-center mx-auto text-[#8e4d33]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-label-caps text-xs uppercase text-[#8e4d33] font-semibold tracking-wider">
                  Dialogue Registered
                </span>
                <h3 className="font-headline-md text-2xl md:text-3xl text-[#0c0907] mt-1">
                  Inquiry Received by Principal Directorate
                </h3>
                <p className="font-mono text-xs text-[#7e756f] mt-2">
                  Reference Dossier: <span className="font-bold text-[#0c0907]">{inquiryCode}</span>
                </p>
              </div>

              <div className="max-w-lg mx-auto bg-[#f0eee8] p-5 rounded-lg border border-[#cfc4bd]/50 text-xs text-[#4d4540] space-y-2 text-left font-light leading-relaxed">
                <p>
                  Thank you, <strong className="font-semibold text-[#0c0907]">{fullName}</strong>. A confidential dossier has been established with your selected session at <span className="font-medium text-[#0c0907]">{studioSession}</span>.
                </p>
                <p>
                  Jean-Marc Vaucluse or our Managing Partner will review your spatial brief and reach out directly to <span className="font-medium text-[#0c0907]">{email}</span> within 24 business hours.
                </p>
                {savedItemCount > 0 && (
                  <p className="text-[#8e4d33] font-medium pt-1">
                    ✓ {savedItemCount} tactile swatches &amp; reference project(s) from your dossier have been transmitted.
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="bg-[#0c0907] text-[#fcf9f3] hover:bg-[#24201d] font-label-caps text-xs uppercase px-8 py-3 rounded transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Dossier Alert Banner if items are saved */}
              {savedItemCount > 0 && (
                <div className="flex items-center space-x-2.5 p-3.5 bg-[#f0eee8] rounded-lg border border-[#cfc4bd]/60 text-xs text-[#4d4540]">
                  <Bookmark className="w-4 h-4 text-[#8e4d33] flex-shrink-0" />
                  <span>
                    Your inquiry will include the <strong>{savedItemCount} project/material reference(s)</strong> compiled in your Curated Dossier.
                  </span>
                </div>
              )}

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div>
                  <label className="block font-label-caps text-xs text-[#4d4540] uppercase mb-2 font-semibold tracking-wider" htmlFor="name">
                    Full Name / Entity
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#f0eee8] border border-[#cfc4bd] px-4 py-3.5 rounded text-[#0c0907] placeholder-[#7e756f] font-body-md text-sm md:text-base focus:border-[#0c0907] focus:ring-0 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-label-caps text-xs text-[#4d4540] uppercase mb-2 font-semibold tracking-wider" htmlFor="email">
                    Confidential Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. vance@estate.com"
                    className="w-full bg-[#f0eee8] border border-[#cfc4bd] px-4 py-3.5 rounded text-[#0c0907] placeholder-[#7e756f] font-body-md text-sm md:text-base focus:border-[#0c0907] focus:ring-0 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project Location */}
                <div>
                  <label className="block font-label-caps text-xs text-[#4d4540] uppercase mb-2 font-semibold tracking-wider" htmlFor="location">
                    Project Geography
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={geography}
                    onChange={(e) => setGeography(e.target.value)}
                    placeholder="City, Country (e.g. Paris 7e, Tribeca NY, Kyoto)"
                    className="w-full bg-[#f0eee8] border border-[#cfc4bd] px-4 py-3.5 rounded text-[#0c0907] placeholder-[#7e756f] font-body-md text-sm md:text-base focus:border-[#0c0907] focus:ring-0 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Atelier Studio Preference */}
                <div>
                  <label className="block font-label-caps text-xs text-[#4d4540] uppercase mb-2 font-semibold tracking-wider" htmlFor="atelier-studio">
                    Preferred Studio Session
                  </label>
                  <select
                    id="atelier-studio"
                    value={studioSession}
                    onChange={(e) => setStudioSession(e.target.value)}
                    className="w-full bg-[#f0eee8] border border-[#cfc4bd] px-4 py-3.5 rounded text-[#0c0907] font-body-md text-sm md:text-base focus:border-[#0c0907] focus:ring-0 focus:outline-none transition-colors duration-200"
                  >
                    <option value="Place Vendôme Atelier, Paris">Place Vendôme Atelier, Paris</option>
                    <option value="Mercer Street Studio, New York">Mercer Street Studio, New York</option>
                    <option value="Zurich Lakehouse Studio">Zurich Lakehouse Studio</option>
                    <option value="Private Site / Digital Monograph Session">Private Site / Digital Monograph Session</option>
                  </select>
                </div>
              </div>

              {/* Project Brief Textarea */}
              <div>
                <label className="block font-label-caps text-xs text-[#4d4540] uppercase mb-2 font-semibold tracking-wider" htmlFor="message">
                  Spatial Vision &amp; Timeline Brief
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Outline project scope, square meters, architectural typology, and desired commencement date..."
                  className="w-full bg-[#f0eee8] border border-[#cfc4bd] p-4 rounded text-[#0c0907] placeholder-[#7e756f] font-body-md text-sm md:text-base focus:border-[#0c0907] focus:ring-0 focus:outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              {/* Bottom Action and Privacy Statement */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#cfc4bd]/30">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-[#7e756f]" />
                  <span className="font-caption text-xs text-[#7e756f]">
                    All inquiries are protected by strict professional non-disclosure protocols.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#8e4d33] hover:bg-[#783c23] text-white font-label-md text-xs md:text-sm px-10 py-4 rounded-lg transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Dialogue...</span>
                  ) : (
                    <>
                      <span>Submit Commission Inquiry</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
