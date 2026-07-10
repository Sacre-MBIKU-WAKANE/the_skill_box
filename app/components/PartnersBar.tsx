"use client";

import Image from "next/image";

export default function PartnersBar() {
  return (
    <section id="partners" className="w-full md:w-[60%] mx-auto bg-white rounded-t-[32px] border-t border-x border-gray-100 overflow-hidden shadow-sm mt-12 relative z-20">
      <div className="flex flex-col md:flex-row">
        
        {/* Left Part: Info (40% width on desktop) */}
        <div className="w-full md:w-[40%] p-8 flex flex-col justify-center bg-gray-50/50 border-b md:border-b-0 md:border-r border-gray-100">
          <span className="text-[10px] font-bold text-[#CB30E0] tracking-wider uppercase mb-2">
            Ils nous font confiance
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[#0D1F38] leading-tight mb-3">
            Des partenaires engagés pour <span className="text-primary-light">développer</span> les talents africains.
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
           Nous collaborons avec des organisations nationales et internationales afin d'offrir des formations de qualité, des opportunités d'innovation et un accompagnement concret aux entrepreneurs et aux professionnels en RDC.
          </p>
        </div>

        {/* Right Part: 3x3 Grid (60% width on desktop) */}
        <div className="w-full md:w-[60%] grid grid-cols-3 grid-rows-3">
          
          {/* Row 1 */}
          <div className="flex items-center justify-center p-6 border-r border-b border-gray-100 h-24">
            <Image src="/images/un-women.png" alt="UN Women" width={72} height={28} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center justify-center p-6 border-r border-b border-gray-100 h-24">
            <Image src="/images/accenture.png" alt="Accenture" width={90} height={24} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center justify-center p-6 border-b border-gray-100 h-24">
            <Image src="/images/csu.png" alt="California State University" width={95} height={24} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center p-6 border-r border-b border-gray-100 h-24">
            <Image src="/images/usaid.png" alt="USAID" width={80} height={24} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center justify-center p-6 border-r border-b border-gray-100 h-24">
            <Image src="/images/un-women.png" alt="UN Women" width={72} height={28} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center justify-center p-6 border-b border-gray-100 h-24">
            <Image src="/images/accenture.png" alt="Accenture" width={90} height={24} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center p-6 border-r border-gray-100 h-24">
            <Image src="/images/csu.png" alt="California State University" width={95} height={24} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Row 3 Col 2: CTA */}
          <div className="flex items-center justify-center p-4 border-r border-gray-100 h-24">
            <a href="#" className="block transition-transform hover:scale-105 duration-200">
              <Image src="/images/partner-with-us.png" alt="Partner with us" width={110} height={32} className="object-contain" />
            </a>
          </div>
          
          {/* Row 3 Col 3: Empty Cell */}
          <div className="flex items-center justify-center p-6 h-24"></div>

        </div>

      </div>
    </section>
  );
}
