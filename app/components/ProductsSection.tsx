"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: "agrofounder",
    label: "EMPLOYEE TO ENTREPRENEUR",
    title: "AgroFounder",
    desc: "Accompagne les entrepreneurs du secteur agricole dans le développement de projets innovants, durables et à fort impact.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    rightImage: "/images/kids-glasses.png",
    rightTitle: "Your industry expertise is your unfair advantage",
    rightDesc: "We'll give you the tools and feedback to launch and get funded.",
    ctaText: "Apply Now",
  },
  {
    id: "mentor4growth",
    label: "SOLO FOUNDER",
    title: "Mentor4Growth",
    desc: "Bénéficiez d'un accompagnement personnalisé avec des mentors expérimentés pour accélérer votre projet ou votre carrière.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    rightImage: "/images/mentoring.png",
    rightTitle: "Le mentorat est le catalyseur de votre succès",
    rightDesc: "Connectez-vous avec des leaders d'opinion pour guider vos choix stratégiques.",
    ctaText: "Rejoindre",
  },
  {
    id: "codetonhistoire",
    label: "AI-CURIOUS",
    title: "Code ton Histoire",
    desc: "Formez-vous aux bases du code et apprenez à exploiter l'intelligence artificielle pour donner vie à vos projets.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="m16.24 7.76-8.48 8.48"/>
        <path d="m7.76 7.76 8.48 8.48"/>
      </svg>
    ),
    rightImage: "/images/bootcamp.png",
    rightTitle: "L'intelligence artificielle à la portée de tous",
    rightDesc: "Apprenez à coder et maîtriser les outils d'IA pour transformer vos idées en réalité.",
    ctaText: "Commencer",
  },
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  return (
    <section id="produits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F38] mb-4">
            Choisissez le programme qui accélère votre croissance
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Des parcours conçus pour développer vos compétences, accompagner vos projets et vous connecter à un réseau d'opportunités.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Column: Vertical Tabs Stack */}
          <div className="flex-1 lg:w-[45%] flex flex-col justify-center">
            <div className="flex flex-col border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
              {products.map((p, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`text-left w-full cursor-pointer transition-all duration-300 border-b border-gray-100 last:border-b-0 p-6 flex items-start gap-4 focus:outline-none ${
                      isActive
                        ? "bg-[#FAF5FF] border-l-4 border-[#7C3AED] pl-5"
                        : "bg-white border-l-4 border-transparent hover:bg-gray-50 pl-5"
                    }`}
                  >
                    {/* Icon Container */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#7C3AED] text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {p.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span
                        className={`block text-[10px] font-bold tracking-wider uppercase mb-1.5 transition-colors ${
                          isActive ? "text-[#7C3AED]" : "text-gray-400"
                        }`}
                      >
                        {p.label}
                      </span>
                      <h3 className="text-lg font-bold text-[#0D1F38] mb-2 leading-none">
                        {p.title}
                      </h3>
                      {isActive && (
                        <p className="text-xs text-gray-500 leading-relaxed mt-2 animate-fade-in">
                          {p.desc}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Display Card with Overlay */}
          <div className="flex-1 lg:w-[55%] min-h-[380px] lg:min-h-[460px] relative rounded-3xl overflow-hidden shadow-md">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={activeProduct.rightImage}
                alt={activeProduct.title}
                fill
                className="object-cover object-center transition-all duration-500 ease-in-out"
                priority
              />
              {/* Optional dark overlay gradient for readability */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Overlay Box */}
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-white/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-base font-extrabold text-[#0D1F38] leading-tight">
                  {activeProduct.rightTitle}
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {activeProduct.rightDesc}
                </p>
              </div>

              {/* Button */}
              <a
                href="#"
                className="bg-[#7C3AED] hover:bg-[#6B21A8] text-white font-bold text-xs px-5 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap self-stretch md:self-auto justify-center"
              >
                {activeProduct.ctaText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
