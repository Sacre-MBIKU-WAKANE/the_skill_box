import Link from "next/link";

const footerLinks = {
  Programmes: [
    { label: "Bootcamps", href: "#" },
    { label: "Accélérateur", href: "#" },
    { label: "Mentorat", href: "#" },
    { label: "Incubation", href: "#" },
    { label: "Certifications", href: "#" },
  ],
  Ressources: [
    { label: "Blog", href: "#" },
    { label: "Bourses", href: "#" },
    { label: "Événements", href: "#" },
    { label: "Podcast", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  Communauté: [
    { label: "Forum", href: "#" },
    { label: "Alumni", href: "#" },
    { label: "Ambassadeurs", href: "#" },
    { label: "Partenaires", href: "#" },
  ],
  Légal: [
    { label: "Conditions", href: "#" },
    { label: "Confidentialité", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.19a3 3 0 00-2.11-2.12C19.56 3.5 12 3.5 12 3.5s-7.55 0-9.39.57A3 3 0 00.5 6.19 31.26 31.26 0 000 12a31.26 31.26 0 00.5 5.81 3 3 0 002.11 2.12C4.45 20.5 12 20.5 12 20.5s7.55 0 9.39-.57a3 3 0 002.11-2.12A31.26 31.26 0 0024 12a31.26 31.26 0 00-.5-5.81z" />
        <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="#1a1a2e" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-extrabold text-white text-lg">
                YO
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Youth
                <span className="text-accent-light">Opp</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              La plateforme #1 pour les opportunités des jeunes en République
              Démocratique du Congo. Formation, mentorat, et accélération.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Youth Opportunities RDC. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#">Conditions</a>
            <a href="#">Confidentialité</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
