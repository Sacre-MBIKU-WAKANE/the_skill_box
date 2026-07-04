import Image from "next/image";

const coworkingFeatures = [
  { icon: "📶", label: "Wi-Fi Très Haut Débit" },
  { icon: "🛋️", label: "Bureaux & Salons" },
  { icon: "☕", label: "Café & Boissons" },
  { icon: "📅", label: "Salles de Réunion" },
];

export default function CoworkingSection() {
  return (
    <section id="coworking" className="py-20 bg-white">
      <div className="w-full md:w-[60%] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-10">
          {/* <div className="section-label mx-auto">🏢 Coworking</div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F38] mb-4">
            Notre Espace Coworking & Bureau
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Un cadre de travail moderne, inspirant et équipé au cœur de Kinshasa pour stimuler votre productivité et collaborer avec d&apos;autres entrepreneurs.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-[#D9B3FF] bg-[#FAF5FF]">
          <div className="flex flex-col lg:flex-row">

            {/* Left: Content */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              {/* Platform label */}
              <div className="inline-flex items-center gap-1.5 bg-white border border-[#D9B3FF] text-[#7C3AED] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full w-fit mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
                ESPACE COWORKING
              </div>

              <h3 className="text-2xl font-bold text-[#0D1F38] mb-3 leading-snug">
                Des espaces adaptés pour les startups et freelances
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Profitez d&apos;un environnement stimulant avec toutes les infrastructures nécessaires pour vous concentrer sur l&apos;essentiel : la réussite de vos projets.
              </p>

              {/* Features Grid 2x2 */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {coworkingFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 text-xs font-medium text-gray-700">
                    <span>{f.icon}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-7">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Ouvert du Lundi au Samedi · 8h00 - 20h00</span>
              </div>

              {/* CTA Button */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6B21A8] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors w-fit"
              >
                Réserver un bureau
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right: Photo with floating badges */}
            <div className="flex-1 relative p-4">
              <div className="relative w-full h-[300px] lg:h-full min-h-[280px] rounded-xl overflow-hidden">
                <Image
                  src="/images/coworking-space.png"
                  alt="Espace coworking Theskillsbox"
                  fill
                  className="object-cover object-center"
                />
                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md text-[11px] font-semibold text-gray-700">
                  <span className="text-green-500">✓</span>
                  Fibre Optique
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md text-[11px] font-semibold text-gray-700">
                  <span className="text-[#7C3AED]">⚡</span>
                  Électricité Stable 24/7
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md text-[11px] font-semibold text-gray-700">
                  <span className="text-pink-500">☕</span>
                  Café & Thé à volonté
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

