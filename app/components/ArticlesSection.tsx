import Image from "next/image";

export default function ArticlesSection() {
  return (
    <section id="ressources" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold text-[#16A34A] tracking-[0.2em] uppercase mb-3">
              INSIGHTS
            </p>
            <h2 className="text-3xl md:text-[2.25rem] font-extrabold text-[#0D1F38] leading-tight">
              Lessons from 17+ years <br />
              of <span className="text-[#6B21A8]">building founders.</span>
            </h2>
            <p className="text-sm text-[#64607D] mt-3 max-w-xl">
              Deep-dive essays, data stories, and tactical playbooks on launching and funding startups.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#0D1F38] border border-[#E5E1F0] text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-300 group"
            >
              View all posts
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

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="flex flex-col bg-white rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative aspect-[389/243] w-full overflow-hidden rounded-2xl border border-[#E5E1F0]">
              <Image
                src="/images/blog-man-stairs.png"
                alt="The Great Reinvention"
                width={389}
                height={243}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="py-4">
              <h3 className="text-base font-bold text-[#0D1F38] leading-snug mb-3 group-hover:underline decoration-[#6B21A8] decoration-2 underline-offset-4">
                The Great Reinvention: How AI is forcing a reinvention of our professional identities
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#9B97B0]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                May 21, 2026
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative aspect-[389/243] w-full overflow-hidden rounded-2xl border border-[#E5E1F0]">
              <Image
                src="/images/blog-raw-group.png"
                alt="What Do Startup Accelerators Actually Look For"
                width={389}
                height={243}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="py-4">
              <h3 className="text-base font-bold text-[#0D1F38] leading-snug mb-3 group-hover:underline decoration-[#6B21A8] decoration-2 underline-offset-4">
                What Do Startup Accelerators Actually Look For? 16 Years of Founder Data Explains
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#9B97B0]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Apr 23, 2026
              </div>
            </div>
          </div>

          {/* Card 3 (Dynamic mock card representation for 'The Startup of One') */}
          <div className="flex flex-col bg-white rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative aspect-[389/243] w-full overflow-hidden rounded-2xl border border-[#E5E1F0] bg-white p-3.5 flex flex-col justify-between select-none">
              
              {/* Graphic Header */}
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#16A34A] fill-current" viewBox="0 0 24 24">
                  <path d="M17 8C15 6 12 5 10 5C6.13 5 3 8.13 3 12C3 15.87 6.13 19 10 19C12 19 15 18 17 16C21 12 21 8 21 8H17ZM10 17C7.24 17 5 14.76 5 12C5 9.24 7.24 7 10 7C11.5 7 13.5 7.5 15 8.5C13.5 10.5 11.5 13.5 10 15.5C9.5 14.5 9 13.5 9 12.5H7C7 14.5 8 16 9 17H10Z"/>
                </svg>
                <span className="text-[10px] font-black tracking-tight text-[#16A34A] uppercase">
                  The Startup of One
                </span>
              </div>

              {/* Graphic Text */}
              <p className="text-[8px] text-[#64607D] leading-tight font-medium my-1.5">
                One founder. AI infrastructure. Zero payroll. The tools now exist for a single person to research, build, market, and scale a venture that once required a full team.
              </p>

              {/* Stats Boxes */}
              <div className="flex gap-2 mb-1.5">
                <div className="flex-1 bg-[#F4FBF7] border border-[#DCF2E6] rounded p-1.5">
                  <div className="text-[11px] font-extrabold text-[#16A34A] leading-none mb-0.5">30%</div>
                  <div className="text-[6px] text-[#64607D] leading-tight font-medium">of U.S. work hours AI can now handle</div>
                  <div className="text-[5px] text-[#9B97B0] leading-none mt-0.5 italic">Industry estimate</div>
                </div>
                <div className="flex-1 bg-[#F4FBF7] border border-[#DCF2E6] rounded p-1.5">
                  <div className="text-[11px] font-extrabold text-[#16A34A] leading-none mb-0.5">$75/mo</div>
                  <div className="text-[6px] text-[#64607D] leading-tight font-medium">to agent vs $75K/yr employee</div>
                  <div className="text-[5px] text-[#9B97B0] leading-none mt-0.5 italic">Industry estimate</div>
                </div>
              </div>

              {/* Capabilities Row */}
              <div className="mt-auto">
                <div className="text-[6px] font-bold text-[#0D1F38] mb-1 uppercase tracking-wider">
                  What one AI-augmented founder can do:
                </div>
                <div className="flex flex-wrap gap-1 max-h-[38px] overflow-hidden">
                  {["Research article", "Validate demand", "Build a landing page", "Automate prospecting", "Handle support"].map((tag) => (
                    <span key={tag} className="text-[5.5px] font-medium bg-[#F1F5F9] text-[#64607D] px-1 py-0.5 rounded border border-[#E2E8F0]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
            <div className="py-4">
              <h3 className="text-base font-bold text-[#0D1F38] leading-snug mb-3 group-hover:underline decoration-[#6B21A8] decoration-2 underline-offset-4">
                AI Isn&apos;t Eliminating Work, It&apos;s Making More Job Creators Possible
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#9B97B0]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Feb 26, 2026
              </div>
            </div>
          </div>

        </div>

        {/* Stay Connected Banner */}
        <div className="bg-[#3B1541] rounded-3xl p-8 md:px-12 md:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-[#EC4899] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
              STAY CONNECTED
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mt-3 leading-snug">
              Follow along for startup tactics, founder stories, and the occasional hot take.
            </h3>
          </div>
          
          {/* Social Links Row */}
          <div className="flex flex-wrap gap-3 w-full lg:w-auto items-center">
            
            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-xs font-semibold transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              LinkedIn
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-xs font-semibold transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09v1.68c0 .6-.03 1.29-.1 2.09-.06.8-.15 1.43-.28 1.9a2.44 2.44 0 0 1-1.74 1.74c-.47.13-1.2.22-2.2.28-.99.07-1.87.1-2.62.1h-2.8c-.75 0-1.63-.03-2.62-.1-1-.06-1.73-.15-2.2-.28a2.44 2.44 0 0 1-1.74-1.74c-.13-.47-.22-1.1-.28-1.9C3.03 13.9 3 13.21 3 12.61v-1.68c0-.6.03-1.29.1-2.09.06-.8.15-1.43.28-1.9a2.44 2.44 0 0 1 1.74-1.74c.47-.13 1.2-.22 2.2-.28.99-.07 1.87-.1 2.62-.1h2.8c.75 0 1.63.03 2.62.1 1 .06 1.73.15 2.2.28a2.44 2.44 0 0 1 1.74 1.74z"/>
              </svg>
              YouTube
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-xs font-semibold transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              </svg>
              Instagram
            </a>

            {/* X */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-xs font-semibold transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-xs font-semibold transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.9 8.44-9.9 0-5.53-4.5-10.02-10-10.02z"/>
              </svg>
              Facebook
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
