import Image from "next/image";

const instructors = [
  {
    name: "Gilberto Gandra",
    image: "/images/instructor-gilberto.png",
    linkedin: "#",
  },
  {
    name: "Sunil Sharma",
    image: "/images/instructor-sunil.png",
    linkedin: "#",
  },
  {
    name: "Jonathan Greechan",
    image: "/images/instructor-jonathan.png",
    linkedin: "#",
  },
];

export default function AcceleratorSection() {
  return (
    <section id="accelerator" className="py-20 bg-[#F8F7FC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1F38] mb-4">
            Nos formations IA Skills Accelerator
          </h2>
          <p className="text-base text-[#64607D] max-w-2xl mx-auto leading-relaxed">
            Our mission is to activate entrepreneurial potential, so we work with founders
            at the very earliest-stages.
          </p>
        </div>

        {/* Program Card - Horizontal */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E1F0] flex flex-col lg:flex-row">
          {/* Left Half - Dark Purple */}
          <div className="lg:w-1/2 bg-[#1E1145] text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-[1.65rem] font-bold mb-4 leading-snug">
                Canada Startup Ideation Bootcamp
              </h3>
              <p className="text-sm text-purple-200/80 leading-relaxed mb-6">
                The Canada Startup Ideation Bootcamp is an intensive 2-week program
                to help anyone in Canada test their startup idea using AI tools and
                feedback from top entrepreneurs and investors.
              </p>

              {/* Next Start Dates */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-purple-200/90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Next Start Dates:
                </div>
                <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  June 30th
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#"
              className="relative z-10 w-full flex items-center justify-between bg-[#9333EA] hover:bg-[#7C3AED] text-white text-sm font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              Voir nos formations
              <svg
                width="18"
                height="18"
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

          {/* Right Half - Instructors */}
          <div className="lg:w-1/2 bg-[#F3F2F8] p-8 md:p-10 flex flex-col justify-center">
            {/* Instructors Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#0D1F38]">Instructors</h4>
            </div>

            {/* Instructor Avatars */}
            <div className="flex items-start gap-8 lg:gap-10">
              {instructors.map((inst) => (
                <div key={inst.name} className="flex flex-col items-center text-center group">
                  <div className="relative mb-3">
                    {/* Avatar with colored ring */}
                    <div className="w-20 h-20 md:w-[88px] md:h-[88px] rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-violet-400 to-green-400 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-purple-300/30">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={inst.image}
                          alt={inst.name}
                          width={88}
                          height={88}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* LinkedIn badge */}
                    <a
                      href={inst.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0077B5] rounded-md flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <span className="text-sm font-semibold text-[#0D1F38] leading-tight">
                    {inst.name.split(" ")[0]}
                    <br />
                    {inst.name.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
