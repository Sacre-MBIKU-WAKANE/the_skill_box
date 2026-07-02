import Image from "next/image";

export default function AcceleratorSection() {
  return (
    <section id="accelerator" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Image */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/accelerator.png"
                alt="Programme accélérateur"
                width={600}
                height={420}
                className="w-full h-auto object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-text-primary">
                    +200 startups
                  </div>
                  <div className="text-xs text-text-muted">accélérées</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <div className="section-label">🚀 Accélérateur</div>
            <h2 className="section-title mb-4">
              Accédez à Silicon Valley depuis la{" "}
              <span className="text-primary">RDC</span>
            </h2>
            <p className="section-subtitle mb-8">
              Notre programme d&apos;accélération connecte les entrepreneurs
              congolais aux meilleures opportunités technologiques mondiales.
              Bénéficiez du mentorat, du financement et du réseau nécessaires
              pour transformer votre idée en entreprise à impact.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "🎯",
                  title: "Mentorat personnalisé",
                  desc: "Accédez à des mentors de la Silicon Valley et d'Afrique",
                },
                {
                  icon: "💰",
                  title: "Financement seed",
                  desc: "Jusqu'à 25 000$ de financement pour votre startup",
                },
                {
                  icon: "🌐",
                  title: "Réseau global",
                  desc: "Connectez-vous à un écosystème de +500 entrepreneurs",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="btn btn-primary">
              Postuler au programme
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
