export default function CTABanner() {
  return (
    <section id="cta-banner" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="cta-banner text-center animate-gradient">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Prêt à saisir les opportunités qui
              <br className="hidden sm:block" /> changeront votre vie&nbsp;?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Rejoignez plus de 5 000 jeunes congolais qui construisent leur
              avenir grâce à nos programmes de formation, mentorat et
              d&apos;accélération.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a href="#" className="btn btn-white text-base px-8 py-4">
                Créer mon compte gratuitement
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
                Nous contacter
              </a>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-8 left-8 w-20 h-20 rounded-full border-2 border-white/10 animate-float" />
          <div
            className="absolute bottom-8 right-12 w-14 h-14 rounded-xl border-2 border-white/10 rotate-45 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full bg-white/5 animate-float"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>
    </section>
  );
}
