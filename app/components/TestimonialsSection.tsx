import Image from "next/image";

const testimonials = [
  {
    id: "test-1",
    name: "Jean-Paul Mukendi",
    role: "Full-Stack Developer, Alumni Bootcamp 2024",
    quote:
      "Grâce au bootcamp, j'ai décroché mon premier emploi en tant que développeur en seulement 3 mois. Le réseau et les mentors ont tout changé.",
    avatar: "/images/hero-group.png",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Grace Mwamba",
    role: "Fondatrice, EduTech Congo",
    quote:
      "Le programme d'accélération m'a permis de structurer mon projet et de lever mes premiers fonds. Je recommande à 100%.",
    avatar: "/images/mentoring.png",
    rating: 5,
  },
  {
    id: "test-3",
    name: "David Kabongo",
    role: "Data Analyst, Vodacom",
    quote:
      "La certification Data Science m'a ouvert des portes que je n'imaginais même pas. La qualité de l'enseignement est exceptionnelle.",
    avatar: "/images/accelerator.png",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="communaute" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto">💬 Témoignages</div>
          <h2 className="section-title mb-4">
            Ce que disent nos{" "}
            <span className="text-primary">alumni</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Des milliers de jeunes congolais ont déjà transformé leur carrière
            grâce à nos programmes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card group">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#F59E0B"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-text-primary text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-text-muted">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "5,000+", label: "Membres actifs" },
            { number: "95%", label: "Taux de satisfaction" },
            { number: "78%", label: "Taux d'emploi" },
            { number: "200+", label: "Entreprises partenaires" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
