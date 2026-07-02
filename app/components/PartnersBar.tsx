"use client";

const partners = [
  { name: "TikTok", icon: "🎵" },
  { name: "Meta", icon: "Ⓜ️" },
  { name: "Google", icon: "🔍" },
  { name: "Microsoft", icon: "🪟" },
  { name: "Amazon", icon: "📦" },
  { name: "Andela", icon: "🅰️" },
  { name: "ALX", icon: "📐" },
  { name: "UNICEF", icon: "🌍" },
];

export default function PartnersBar() {
  return (
    <section id="partners" className="bg-white py-8 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-text-muted uppercase tracking-widest mb-6">
          Ils nous font confiance
        </p>
        <div className="overflow-hidden relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="partners-track">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface hover:bg-surface-alt transition-colors cursor-pointer whitespace-nowrap"
              >
                <span className="text-xl">{partner.icon}</span>
                <span className="text-sm font-bold text-text-primary tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
