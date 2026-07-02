import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
              Plateforme #1 pour la jeunesse en RDC
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Votre{" "}
              <span className="relative inline-block">
                <span className="relative z-10">&apos;un jour&apos;</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/40 rounded-full -z-0" />
              </span>{" "}
              commence maintenant.
            </h1>

            <p className="text-lg text-white/75 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Découvrez les meilleures opportunités de formation, de mentorat et
              d&apos;accélération pour propulser votre carrière et transformer
              votre communauté.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#programmes" className="btn btn-white text-base px-8 py-4">
                Explorer les programmes
                <svg
                  width="18"
                  height="18"
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
              <a
                href="#"
                className="btn text-white border-2 border-white/30 hover:bg-white/10 text-base px-8 py-4"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                Voir la vidéo
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              {[
                { value: "5K+", label: "Membres actifs" },
                { value: "120+", label: "Programmes" },
                { value: "45+", label: "Partenaires" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="flex-1 max-w-lg w-full animate-slide-right" style={{ animationDelay: "0.3s" }}>
            <div className="hero-grid">
              <div className="hero-grid-item">
                <Image
                  src="/images/hero-group.png"
                  alt="Groupe de jeunes professionnels"
                  width={500}
                  height={400}
                  priority
                />
              </div>
              <div className="hero-grid-item">
                <Image
                  src="/images/community-event.png"
                  alt="Événement communautaire"
                  width={240}
                  height={190}
                  priority
                />
              </div>
              <div className="hero-grid-item">
                <Image
                  src="/images/workshop.png"
                  alt="Workshop de formation"
                  width={240}
                  height={190}
                  priority
                />
              </div>
              <div className="hero-grid-item">
                <Image
                  src="/images/bootcamp.png"
                  alt="Bootcamp de codage"
                  width={240}
                  height={190}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
