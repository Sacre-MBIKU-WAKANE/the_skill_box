"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#2D1546] pt-32, pb-20"
      style={{
        backgroundImage: 'radial-gradient(circle, #4A276B 2px, transparent 2px)',
        backgroundSize: '32px 32px',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Title and Bubbles */}
        <div className="relative mb-16 mt-8">
          {/* Purple Bubble */}
          <div className="absolute -left-16 -top-8 md:-left-24 md:-top-6 animate-float z-10">
            <svg width="70" height="45" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0H90C95.5 0 100 4.5 100 10V35C100 40.5 95.5 45 90 45H75L65 60L55 45H10C4.5 45 0 40.5 0 35V10C0 4.5 4.5 0 10 0Z" fill="#D364FF"/>
            </svg>
          </div>
          
          {/* Green Bubble */}
          <div className="absolute -right-12 -bottom-12 md:-right-20 md:-bottom-10 animate-float" style={{ animationDelay: '1s' }}>
            <svg width="65" height="40" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M90 0H10C4.5 0 0 4.5 0 10V35C0 40.5 4.5 45 10 45H25L35 60L45 45H90C95.5 45 100 40.5 100 35V10C100 4.5 95.5 0 90 0Z" fill="#22C55E"/>
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight tracking-tight relative z-20">
            Votre <span className="text-[#D364FF]">&apos;un jour&apos;</span> commence<br />maintenant.
          </h1>
        </div>

        {/* Fanned Cards */}
        <div className="relative flex justify-center items-center w-full h-[300px] mb-12">
          
          {/* Card 1 */}
          <div className="absolute z-10 transform -rotate-[12deg] -translate-x-[260px] translate-y-6 w-[180px] h-[220px] rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent transition-transform hover:z-50 hover:scale-105 duration-300">
            <div className="absolute inset-0 bg-[#E85D45] z-0"></div>
            <Image src="/images/mentoring.png" alt="Mentoring" layout="fill" objectFit="cover" className="opacity-90 relative z-10" />
          </div>
          
          {/* Card 2 */}
          <div className="absolute z-20 transform -rotate-[6deg] -translate-x-[160px] translate-y-2 w-[190px] h-[240px] rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent transition-transform hover:z-50 hover:scale-105 duration-300">
            <div className="absolute inset-0 bg-[#C87541] z-0"></div>
            <Image src="/images/hero-group.png" alt="Group" layout="fill" objectFit="cover" className="relative z-10" />
          </div>

          {/* Card 3 */}
          <div className="absolute z-30 transform -rotate-[2deg] -translate-x-[50px] w-[200px] h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent transition-transform hover:z-50 hover:scale-105 duration-300">
            <Image src="/images/accelerator.png" alt="Accelerator" layout="fill" objectFit="cover" />
          </div>

          {/* Card 4 */}
          <div className="absolute z-40 transform rotate-[2deg] translate-x-[60px] translate-y-1 w-[200px] h-[250px] rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent transition-transform hover:z-50 hover:scale-105 duration-300">
            <Image src="/images/workshop.png" alt="Workshop" layout="fill" objectFit="cover" />
          </div>

          {/* Card 5 */}
          <div className="absolute z-30 transform rotate-[8deg] translate-x-[170px] translate-y-4 w-[190px] h-[230px] rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent transition-transform hover:z-50 hover:scale-105 duration-300">
            <Image src="/images/bootcamp.png" alt="Bootcamp" layout="fill" objectFit="cover" />
          </div>

          {/* Card 6 */}
          <div className="absolute z-20 transform rotate-[15deg] translate-x-[260px] translate-y-10 w-[180px] h-[210px] rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent transition-transform hover:z-50 hover:scale-105 duration-300">
            <Image src="/images/community-event.png" alt="Community" layout="fill" objectFit="cover" />
          </div>

        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          The playing field has leveled. If you are ready to work and have the right set of AI tools - there has never been a better time to launch startup.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6">
          <a href="#" className="flex items-center gap-2 bg-[#E18DFF] hover:bg-[#D575F6] text-white px-7 py-3 rounded-xl text-sm font-medium transition-colors">
            Preview our AI Tools
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#" className="flex items-center gap-2 bg-[#7534AB] hover:bg-[#662899] text-white px-7 py-3 rounded-xl text-sm font-medium transition-colors">
            Preview our AI Tools
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
