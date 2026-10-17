import React, { useState } from 'react';
import { Compass, Check, ArrowRight } from 'lucide-react';

interface AtelierFooterProps {
  onOpenTreatise: () => void;
}

export const AtelierFooter: React.FC<AtelierFooterProps> = ({ onOpenTreatise }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-[#ebe8e2] text-[#0c0907] docked full-width bottom border-t border-[#cfc4bd]/60">
      <div className="w-full px-6 md:px-16 py-16 md:py-24 max-w-7xl mx-auto">
        {/* Top Studio Locations & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#cfc4bd]/50">
          {/* Brand Monogram & Mission: 4 Columns */}
          <div className="md:col-span-4">
            <a
              href="#"
              className="font-headline-sm text-xl md:text-2xl text-[#0c0907] tracking-widest uppercase block mb-4 font-normal"
            >
              ATELIER VAUCLUSE
            </a>
            <p className="font-body-sm text-xs md:text-sm text-[#4d4540] font-light max-w-sm mb-6 leading-relaxed">
              International interior architecture, spatial choreography, and historical restoration grounded in physical craft and light.
            </p>
            <div className="flex items-center space-x-3 text-[#8e4d33]">
              <Compass className="w-4 h-4" />
              <span className="font-label-caps text-[10px] uppercase text-[#0c0907] tracking-wider">
                Paris • New York • Zurich
              </span>
            </div>
          </div>

          {/* Studio Locations: 4 Columns */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-label-caps text-xs text-[#0c0907] uppercase font-semibold mb-3 tracking-wider">
                Paris Studio
              </p>
              <address className="font-body-sm text-xs text-[#4d4540] font-light not-italic leading-relaxed">
                18 Place Vendôme<br />
                75001 Paris, France<br />
                <a
                  href="tel:+33142680000"
                  className="hover:text-[#8e4d33] transition-colors duration-200 mt-1 inline-block"
                >
                  +33 1 42 68 00 00
                </a>
              </address>
            </div>

            <div>
              <p className="font-label-caps text-xs text-[#0c0907] uppercase font-semibold mb-3 tracking-wider">
                New York Studio
              </p>
              <address className="font-body-sm text-xs text-[#4d4540] font-light not-italic leading-relaxed">
                92 Mercer Street<br />
                SoHo, NY 10012, USA<br />
                <a
                  href="tel:+12129410000"
                  className="hover:text-[#8e4d33] transition-colors duration-200 mt-1 inline-block"
                >
                  +1 212 941 0000
                </a>
              </address>
            </div>
          </div>

          {/* Design Monographs Newsletter: 4 Columns */}
          <div className="md:col-span-4">
            <p className="font-label-caps text-xs text-[#0c0907] uppercase font-semibold mb-2 tracking-wider">
              The Vaucluse Monograph
            </p>
            <p className="font-body-sm text-xs text-[#4d4540] font-light mb-4 leading-relaxed">
              Receive private biannual print releases and essays on architectural materiality.
            </p>

            {subscribed ? (
              <div className="flex items-center space-x-2 text-xs text-[#8e4d33] font-medium bg-[#fcf9f3] p-3 rounded border border-[#cfc4bd]/60">
                <Check className="w-4 h-4" />
                <span>Subscription recorded for Monograph Vol. V.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-[#fcf9f3] border border-[#cfc4bd] px-4 py-2.5 rounded-l text-[#0c0907] text-xs placeholder-[#7e756f] focus:border-[#0c0907] focus:ring-0 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#0c0907] hover:bg-[#24201d] text-[#fcf9f3] font-label-caps text-[10px] uppercase px-5 py-2.5 rounded-r transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Links Cluster */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#services" className="font-label-caps text-[10px] text-[#4d4540] hover:text-[#0c0907] transition-colors uppercase tracking-wider">
              Architecture
            </a>
            <a href="#services" className="font-label-caps text-[10px] text-[#4d4540] hover:text-[#0c0907] transition-colors uppercase tracking-wider">
              Interiors
            </a>
            <a href="#services" className="font-label-caps text-[10px] text-[#4d4540] hover:text-[#0c0907] transition-colors uppercase tracking-wider">
              Millwork
            </a>
            <button
              onClick={onOpenTreatise}
              className="font-label-caps text-[10px] text-[#4d4540] hover:text-[#0c0907] transition-colors uppercase tracking-wider"
            >
              Monographs
            </button>
            <a href="#press" className="font-label-caps text-[10px] text-[#4d4540] hover:text-[#0c0907] transition-colors uppercase tracking-wider">
              Press &amp; Recognition
            </a>
            <a href="#" className="font-label-caps text-[10px] text-[#4d4540] hover:text-[#0c0907] transition-colors uppercase tracking-wider">
              Legal Notice
            </a>
            <a href="#" className="font-label-caps text-[10px] text-[#4d4540] hover:text-[#0c0907] transition-colors uppercase tracking-wider">
              Privacy Policy
            </a>
          </div>

          <p className="font-caption text-xs text-[#7e756f]">
            © 2025 Atelier Vaucluse Interior Architecture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
