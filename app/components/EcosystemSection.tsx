import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "PROVEN METHODOLOGY",
    title: "Academy",
    desc: "Step-by-step business-building sprints to eliminate 'analysis paralysis'. Bootstrap the business and get to work – no theory.",
    link: "See our Methodology",
    href: "#programmes",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    label: "40,000+ MENTORS",
    title: "Incubation & Accélération",
    desc: "Hundreds of feedback touchpoints from entrepreneurs and investors when you need it the most – at the earliest stages.",
    link: "Meet the mentors",
    href: "#accelerator",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "ESPACES DE TRAVAIL",
    title: "Coworking & Bureau",
    desc: "Des espaces de travail inspirants, équipés et connectés à Kinshasa pour travailler sereinement et développer votre réseau.",
    link: "Réserver un espace",
    href: "#coworking",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    label: "AGRO-BUSINESS",
    title: "Agriculture & Elevage",
    desc: "Des formations pratiques et des accompagnements pour propulser les jeunes agripreneurs congolais vers le succès.",
    link: "Découvrir nos projets",
    href: "#programmes",
  },
];

const toolFeatures = [
  { icon: "🌐", label: "Market Research" },
  { icon: "🚀", label: "Customer Outreach" },
  { icon: "🤖", label: "24/7 Startup Advisor" },
  { icon: "📈", label: "Fundraising" },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 bg-white">
      <div className="w-full md:w-[60%] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F38] mb-4">
            Découvrez l&apos;écosystème Theskillsbox
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The playing field has leveled. If you are ready to work and have the right set of AI tools – there has never been a better time to launch startup.
          </p>
        </div>

        {/* Main Hero Card */}
        <div className="rounded-2xl border border-[#D9B3FF] bg-[#FAF5FF] mb-6">
          <div className="flex flex-col lg:flex-row">

            {/* Left: Content */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              {/* Platform label */}
              <div className="inline-flex items-center gap-1.5 bg-white border border-[#D9B3FF] text-[#7C3AED] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full w-fit mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
                THE PLATFORM
              </div>

              <h3 className="text-2xl font-bold text-[#0D1F38] mb-3 leading-snug">
                Nos outils IA pour les entrepreneurs
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Founder Institute gives anyone with an idea the AI tools, agents, and feedback to launch a fundable business.
              </p>

              {/* Features Grid 2x2 */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {toolFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 text-xs font-medium text-gray-700">
                    <span>{f.icon}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Launch date */}
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-7">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Launching May 2026</span>
              </div>

              {/* CTA Button */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6B21A8] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors w-fit"
              >
                Preview our AI Tools
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right: Photo with floating badges */}
            <div className="flex-1 relative p-4">
              <div className="relative w-full h-[300px] lg:h-full min-h-[280px] rounded-xl overflow-hidden">
                <Image
                  src="/images/youth-team.png"
                  alt="Youth Opportunities Team"
                  fill
                  className="object-cover object-center"
                />
                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md text-[11px] font-semibold text-gray-700">
                  <span className="text-green-500">✓</span>
                  Busy work completed
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md text-[11px] font-semibold text-gray-700">
                  <span className="text-[#7C3AED]">🚀</span>
                  Customers ready for discovery
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md text-[11px] font-semibold text-gray-700">
                  <span className="text-pink-500">📊</span>
                  Pitch deck drafted
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              {/* Top border accent */}
              <div className="w-8 h-0.5 bg-[#7C3AED] mb-5"></div>

              {/* Icon */}
              <div className="text-[#7C3AED] mb-4">
                {f.icon}
              </div>

              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                {f.label}
              </p>
              <h4 className="text-sm font-bold text-[#0D1F38] mb-3 leading-snug">
                {f.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">
                {f.desc}
              </p>

              <a href={f.href || "#"} className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D1F38] mt-5 hover:text-[#7C3AED] transition-colors">
                {f.link}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
