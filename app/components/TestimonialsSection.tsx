"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const leftTestimonialsData = [
  {
    id: "left-1",
    name: "Emilie Vanpoperinghe",
    role: "Founder, Oddbox",
    quote: "Oddbox wouldn't exist without the Founder Institute. FI gave me the structure I needed to take Oddbox from idea to an MVP.",
    avatar: "/images/avatar-emilie.png",
    company: "Oddbox",
    companyLogoColor: "text-[#E11D48] font-bold text-xs",
  },
  {
    id: "left-2",
    name: "Gagan Biyani",
    role: "Founder, Udemy",
    quote: "Without Founder Institute, Udemy may have never raised any money.",
    avatar: "/images/avatar-gagan.png",
    company: "udemy",
    companyLogoColor: "text-[#A855F7] font-extrabold text-sm tracking-tighter",
  },
  {
    id: "left-3",
    name: "Evan Wong",
    role: "Founder, Checkbox",
    quote: "I had the most incredible learning experience, I wouldn't be the founder I am today without Founder Institute as my backbone.",
    avatar: "/images/avatar-evan.png",
    company: "checkbox",
    companyLogoColor: "text-[#10B981] font-semibold text-xs tracking-tight",
  },
  {
    id: "left-4",
    name: "Michel Lwamba",
    role: "Founder, PeakTech",
    quote: "FI allowed us to build a global network from Kinshasa. The structured weekly feedback helped us launch without mistakes.",
    avatar: "/images/hero-group.png",
    company: "PeakTech",
    companyLogoColor: "text-[#3B82F6] font-bold text-xs",
  },
];

const rightTestimonialsData = [
  {
    id: "right-1",
    name: "Anggia Meisesari",
    role: "Founder, TransTRACK",
    quote: "Joining the Founder Institute was a defining chapter in my founder journey. The experience, the pressure, and most importantly the mentorship shaped how I think, build, and lead TransTRACK today.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    company: "TransTRACK",
    companyLogoColor: "text-[#3B82F6] font-extrabold text-xs",
  },
  {
    id: "right-2",
    name: "Renata Redondo",
    role: "Founder, SleepUp",
    quote: "FI's accelerator was tough, but it prepared me for life as an entrepreneur. The support from local leaders, mentors, and ecosystem partners helped us close our first round.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    company: "SleepUp",
    companyLogoColor: "text-[#06B6D4] font-semibold text-xs",
  },
  {
    id: "right-3",
    name: "Abdulkadir Suleiman Lapai",
    role: "Founder, Taspire",
    quote: "Grateful to the FI team for their support and belief in our journey, and proud of what we're building at Taspire as we keep pushing forward.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    company: "Taspire",
    companyLogoColor: "text-[#6366F1] font-bold text-xs",
  },
  {
    id: "right-4",
    name: "Fatoumata Diallo",
    role: "Founder, AgroInnov",
    quote: "The rigor of the Founder Institute is exactly what a first-time founder needs. It turned our wild ideas into a sustainable business model.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    company: "AgroInnov",
    companyLogoColor: "text-[#F59E0B] font-bold text-xs",
  },
];

export default function TestimonialsSection() {
  const [leftItems, setLeftItems] = useState(leftTestimonialsData);
  const [rightItems, setRightItems] = useState(rightTestimonialsData);
  const [leftShifting, setLeftShifting] = useState(false);
  const [rightShifting, setRightShifting] = useState(false);

  // Left Column loop
  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftShifting(true);
      setTimeout(() => {
        setLeftItems((prev) => [...prev.slice(1), prev[0]]);
        setLeftShifting(false);
      }, 500); // match transition duration
    }, 2000);
    return () => clearInterval(leftInterval);
  }, []);

  // Right Column loop (offset slightly for natural rhythm)
  useEffect(() => {
    const rightInterval = setInterval(() => {
      setRightShifting(true);
      setTimeout(() => {
        setRightItems((prev) => [...prev.slice(1), prev[0]]);
        setRightShifting(false);
      }, 500);
    }, 2000);
    return () => clearInterval(rightInterval);
  }, []);

  return (
    <section id="communaute" className="py-20 bg-[#F8F7FC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Vertical Carousel */}
          <div className="lg:col-span-4 h-[470px] overflow-hidden relative">
            <div
              className={`flex flex-col gap-4 ${
                leftShifting ? "transition-transform duration-500 ease-in-out" : "transition-none"
              }`}
              style={{
                transform: leftShifting ? "translateY(-161px)" : "translateY(0px)",
              }}
            >
              {leftItems.slice(0, 4).map((item, index) => {
                // Determine highlight based on shift state
                // If shifting, the 2nd item (index 1) is moving up to become index 0
                const isHighlighted = leftShifting ? index === 1 : index === 0;

                return (
                  <div
                    key={item.id}
                    className={`h-[145px] w-full transition-all duration-500 ease-in-out p-5 rounded-2xl border flex flex-col justify-between bg-white ${
                      isHighlighted
                        ? "rotate-[-1.5deg] border-[#C084FC]/80 shadow-lg bg-gradient-to-br from-[#FAF5FF] to-white z-10"
                        : "rotate-0 border-[#E5E1F0] shadow-sm z-0"
                    }`}
                  >
                    <div>
                      {/* Quotation mark */}
                      <span className="text-2xl text-purple-500 font-serif leading-none block -mt-1 -mb-1">“</span>
                      <p className="text-xs text-[#0D1F38]/90 leading-relaxed line-clamp-3">
                        {item.quote}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-200">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-[10px] text-[#0D1F38]">{item.name}</div>
                          <div className="text-[9px] text-[#9B97B0]">{item.role}</div>
                        </div>
                      </div>
                      <div className={`tracking-wider font-semibold ${item.companyLogoColor}`}>
                        {item.company}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Column: Text & CTA */}
          <div className="lg:col-span-4 text-center px-4 flex flex-col items-center py-8 lg:py-0">
            <h2 className="text-3xl md:text-[2.25rem] font-extrabold text-[#0D1F38] leading-tight mb-4">
              Success stories across{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent italic block lg:inline-block">
                Six Continents
              </span>
            </h2>
            <p className="text-sm text-[#64607D] leading-relaxed mb-8 max-w-sm">
              Real stories from Alumni who turned ideas into global, funded companies.
            </p>

            {/* Logo row */}
            <div className="flex items-center justify-center gap-6 mb-8 flex-wrap opacity-60">
              <span className="text-xs font-bold tracking-wider text-[#0D1F38]">peerby</span>
              <span className="text-xs font-black tracking-widest text-[#0D1F38]">TOTALCTRL</span>
              <span className="text-xs font-medium tracking-normal text-[#0D1F38]">checkbx</span>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              View more alumni
              <svg
                width="14"
                height="14"
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

          {/* Right Column: Vertical Carousel */}
          <div className="lg:col-span-4 h-[470px] overflow-hidden relative">
            <div
              className="flex flex-col gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: rightShifting ? "translateY(-161px)" : "translateY(0px)",
              }}
            >
              {rightItems.slice(0, 4).map((item, index) => {
                const isHighlighted = rightShifting ? index === 1 : index === 0;

                return (
                  <div
                    key={item.id}
                    className={`h-[145px] w-full transition-all duration-500 ease-in-out p-5 rounded-2xl border flex flex-col justify-between bg-white ${
                      isHighlighted
                        ? "rotate-[1.5deg] border-[#C084FC]/80 shadow-lg bg-gradient-to-br from-[#FAF5FF] to-white z-10"
                        : "rotate-0 border-[#E5E1F0] shadow-sm z-0"
                    }`}
                  >
                    <div>
                      {/* Quotation mark */}
                      <span className="text-2xl text-purple-500 font-serif leading-none block -mt-1 -mb-1">“</span>
                      <p className="text-xs text-[#0D1F38]/90 leading-relaxed line-clamp-3">
                        {item.quote}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-200">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-[10px] text-[#0D1F38]">{item.name}</div>
                          <div className="text-[9px] text-[#9B97B0]">{item.role}</div>
                        </div>
                      </div>
                      <div className={`tracking-wider font-semibold ${item.companyLogoColor}`}>
                        {item.company}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
