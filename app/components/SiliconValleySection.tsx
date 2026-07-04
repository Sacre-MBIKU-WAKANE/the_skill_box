import Image from "next/image";

export default function SiliconValleySection() {
  return (
    <section id="silicon-valley" className="w-full overflow-hidden">
      {/* Dark purple banner container */}
      <div className="relative flex flex-col lg:flex-row min-h-[280px] bg-[#3B0764]">

        {/* Left: Text content */}
        <div className="relative z-10 flex flex-col justify-center pl-[20%] pr-4 py-12 lg:py-16 lg:w-[55%] xl:w-[42%]">
          {/* Label */}
          <p className="text-[10px] font-bold text-purple-300 tracking-widest uppercase mb-5">
            Applications Open · Silicon Valley Fall 2026
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
            Accedez à la Silicon Valey<br />depuis la RDC.
          </h2>

          {/* Description */}
          <p className="text-sm text-purple-200/80 leading-relaxed mb-8 max-w-sm">
            Grâce à notre partenariat avec le Founder Institute (FI), le plus grand programme de lancement de startups au monde, nous offrons aux entrepreneurs congolais un accès direct à l&apos;expertise mondiale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#C026D3] hover:bg-[#a21caf] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Apply Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Attend a Free Event
            </a>
          </div>
        </div>

        {/* Right: Photo — fills the rest of the banner */}
        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[40%] h-64 lg:h-auto">
          {/* Gradient overlay on the left edge to blend with the purple bg */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#3B0764] to-transparent z-10 pointer-events-none" />

          <Image
            src="/images/founder-institute.png"
            alt="Founder Institute — Silicon Valley Program"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  );
}
