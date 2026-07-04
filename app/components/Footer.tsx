import Link from "next/link";

const footerSections = [
  {
    title: "ABOUT US",
    links: [
      { label: "Company", href: "#" },
      { label: "Methodology", href: "#" },
      { label: "Global Locations", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Apply", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Agreements", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Startup Events", href: "#" },
      { label: "Founder Bootcamps", href: "#" },
      { label: "Startup Resources", href: "#" },
      { label: "FAST Agreement", href: "#" },
      { label: "Startup Jobs", href: "#" },
      { label: "Newsletter", href: "#" },
      { label: "Entrepreneur DNA", href: "#" },
    ],
  },
  {
    title: "INNOVATION",
    links: [
      { label: "Launch an FI Chapter", href: "#" },
      { label: "Launch a Venture Fund", href: "#" },
      { label: "Economic Development", href: "#" },
      { label: "University Partnerships", href: "#" },
      { label: "Corporate Partnerships", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-[#E5E1F0] pt-16 pb-8 text-[#64607D]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand/Description Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* FI Styled Logo */}
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                {/* stylized green leaf 'f' */}
                <path
                  d="M10 24V14C10 11 12 9 15 9V5C10 5 6 9 6 14V24H10Z"
                  fill="#15803D"
                />
                {/* dot of the 'i' */}
                <circle cx="20" cy="7" r="2.5" fill="#0D1F38;" />
                {/* body of the 'i' */}
                <rect x="18" y="12" width="4" height="12" rx="1" fill="#0D1F38" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed text-[#64607D] mb-6 max-w-sm">
              The Founder Institute is the world&apos;s most proven network to turn ideas into
              fundable startups, and startups into global businesses. Since 2009, our
              structured accelerator programs have helped over 9,000 entrepreneurs raise
              over 2BN in funding. Based in Silicon Valley and with chapters across 100
              countries, our mission is to empower communities of talented and motivated
              people to build impactful technology companies worldwide.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 mb-8">
              {/* Instagram */}
              <a href="#" className="text-[#9B97B0] hover:text-[#0D1F38] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="text-[#9B97B0] hover:text-[#0D1F38] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09v1.68c0 .6-.03 1.29-.1 2.09-.06.8-.15 1.43-.28 1.9a2.44 2.44 0 0 1-1.74 1.74c-.47.13-1.2.22-2.2.28-.99.07-1.87.1-2.62.1h-2.8c-.75 0-1.63-.03-2.62-.1-1-.06-1.73-.15-2.2-.28a2.44 2.44 0 0 1-1.74-1.74c-.13-.47-.22-1.1-.28-1.9C3.03 13.9 3 13.21 3 12.61v-1.68c0-.6.03-1.29.1-2.09.06-.8.15-1.43.28-1.9a2.44 2.44 0 0 1 1.74-1.74c.47-.13 1.2-.22 2.2-.28.99-.07 1.87-.1 2.62-.1h2.8c.75 0 1.63.03 2.62.1 1 .06 1.73.15 2.2.28a2.44 2.44 0 0 1 1.74 1.74z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-[#9B97B0] hover:text-[#0D1F38] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.9 8.44-9.9 0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>
              {/* X */}
              <a href="#" className="text-[#9B97B0] hover:text-[#0D1F38] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-[#9B97B0] hover:text-[#0D1F38] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>

            {/* For Progress Company Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold tracking-tight text-[#0D1F38] leading-none">
                  For Progress
                </span>
                <span className="text-[7.5px] font-bold text-[#9B97B0] uppercase tracking-[0.2em] mt-1">
                  COMPANY
                </span>
              </div>
              <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
                {/* Burst flower petals */}
                <path d="M18 4l2 6h-4l2-6z" fill="#EF4444" />
                <path d="M26 8l-1.5 6.5-3.5-3 5-3.5z" fill="#F97316" />
                <path d="M30 16l-5 3.5 1.5-6.5 3.5 3z" fill="#F59E0B" />
                <path d="M28 25l-6-2.5 5-3.5 1 6z" fill="#84CC16" />
                <path d="M20 30l-2-6.5-3.5 3 5.5 3.5z" fill="#10B981" />
                <path d="M10 28l1.5-6.5 3.5 3-5 3.5z" fill="#06B6D4" />
                <path d="M6 20l5-3.5-1.5 6.5-3.5-3z" fill="#3B82F6" />
                <path d="M8 11l6 2.5-5 3.5-1-6z" fill="#6366F1" />
                <path d="M14 6l2 6.5 3.5-3-5.5-3.5z" fill="#A855F7" />
              </svg>
            </div>

          </div>

          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-bold text-[#0D1F38] tracking-[0.15em] uppercase mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-[#64607D] hover:text-[#0D1F38] transition-colors leading-relaxed"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E1F0] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#9B97B0]">
            Copyright © 2026. Founder Institute, Inc. All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-[10px] text-[#9B97B0]">
            <a href="#" className="hover:text-[#0D1F38] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#0D1F38] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0D1F38] transition-colors">Code of Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
