"use client";

const stats = [
  { value: "3,000+", label: "STARTUPS BUILT" },
  { value: "$2BN+", label: "ALUMNI FUNDING" },
  { value: "100+", label: "CHAPTER COUNTRIES" },
  { value: "40,000+", label: "MENTORS & INVESTORS" },
  { value: "750,000+", label: "FOUNDERS TRAINED" },
  { value: "200+", label: "COMPANY EXITS" },
  { value: "$20BN+", label: "ESTIMATED PORTFOLIO VALUE" },
  { value: "26%", label: "CHAPTERS IN DEVELOPING NATIONS" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-8 divide-x divide-gray-100 scrollbar-none snap-x">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start px-8 py-2 min-w-[200px] lg:min-w-0 snap-align-start shrink-0 first:pl-0 last:pr-0"
            >
              {/* Colored accent line at the top */}
              <div className="w-8 h-[3px] bg-gradient-to-r from-[#CB30E0] to-[#8A3DB8] mb-3 rounded-full"></div>
              
              {/* Statistic Value */}
              <span className="text-xl md:text-2xl font-extrabold text-[#0D1F38] tracking-tight leading-none">
                {stat.value}
              </span>
              
              {/* Statistic Label */}
              <span className="text-[9px] font-bold text-gray-400 tracking-wider mt-2.5 uppercase leading-normal">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
