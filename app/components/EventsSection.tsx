import Image from "next/image";

const sideEvents = [
  {
    id: "side-1",
    title: "Atelier ChatGPT pour les professionnels",
    date: "Bientôt disponible",
    time: "Non défini",
    location: "Online Event",
  },
  {
    id: "side-2",
    title: "Masterclass Marketing Digital",
    date: "Bientôt disponible",
    time: "Non défini",
    location: "Online Event",
  },
  {
    id: "side-3",
    title: "How to Get Your First 10 Customers Without a Marketing Team or Budget",
    date: "Bientôt disponible",
    time: "Non défini",
    location: "Online Event",
  },
  {
    id: "side-4",
    title: "Economic Development: How to Build Entrepreneurial Communities",
    date: "Bientôt disponible",
    time: "Non défini",
    location: "Online Event",
  },
];

export default function EventsSection() {
  return (
    <section id="evenements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
          {/* Left: Label + Title */}
          <div className="lg:max-w-[58%]">
            <p className="text-xs font-bold text-[#6B21A8] tracking-[0.2em] uppercase mb-3">
              Événements & Communauté
            </p>
            <h2 className="text-3xl md:text-[2.25rem] font-extrabold text-[#0D1F38] leading-tight">
              Apprenez des plus grands à partir de nos
              événements gratuits{" "}
              <span className="text-[#6B21A8] italic">en ligne et en présentiel</span>
            </h2>
          </div>
          {/* Right: Description */}
          <div className="lg:max-w-[38%] lg:pt-6">
            <p className="text-sm text-[#64607D] leading-relaxed">
              Participez à nos conférences, bootcamps, ateliers, webinaires et rencontres professionnelles pour renforcer vos compétences et créer de nouvelles opportunités.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Left: Featured Event Card */}
          <div className="lg:w-[55%] rounded-2xl overflow-hidden border-2 border-[#6B21A8]/20 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative">
              <Image
                src="/images/cheering-woman-banner.png"
                alt="À la rencontre des opportunités"
                width={600}
                height={380}
                className="w-full h-auto object-cover"
              />
              {/* Play/info button top-right */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              {/* Badge */}
              <span className="inline-block bg-[#16A34A]/10 text-[#16A34A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-md mb-3">
                ÉVÈNEMENT GRATUIT
              </span>
              <h3 className="text-lg font-bold text-[#0D1F38] mb-3 leading-snug">
                bOOTCAMP SUR L'AUTOMATISATION 
              </h3>
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#64607D]">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                    Bientôt disponible
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  --
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  ÉVÈNEMENT EN LIGNE
                </span>
              </div>
            </div>
          </div>

          {/* Right: Side Events List */}
          <div className="lg:w-[45%] flex flex-col gap-3">
            {sideEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start justify-between p-4 rounded-xl border border-[#E5E1F0] bg-white hover:border-[#6B21A8]/30 hover:shadow-md transition-all duration-300 cursor-pointer group/item"
              >
                <div className="flex-1 pr-3">
                  {/* Badge */}
                  <span className="inline-block bg-[#16A34A]/10 text-[#16A34A] text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md mb-2">
                    FREE EVENT
                  </span>
                  <h4 className="text-sm font-semibold text-[#0D1F38] leading-snug mb-2">
                    {event.title}
                  </h4>
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#9B97B0]">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                {/* Arrow */}
                <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-[#E5E1F0] flex items-center justify-center mt-1 group-hover/item:border-[#6B21A8]/30 group-hover/item:bg-[#6B21A8]/5 transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B21A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/item:translate-x-0.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-xl border border-[#E5E1F0] bg-white">
          <p className="text-base font-medium text-[#0D1F38]">
            Start your journey today.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group"
          >
            View all events
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
