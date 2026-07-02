import Image from "next/image";

const programs = [
  {
    id: "prog-1",
    title: "Bootcamp Développement Web Full-Stack",
    description:
      "12 semaines intensives pour maîtriser React, Node.js et le déploiement cloud.",
    tag: "Formation",
    tagColor: "card-tag-purple",
    image: "/images/bootcamp.png",
    duration: "12 semaines",
    spots: "30 places",
    level: "Débutant",
  },
  {
    id: "prog-2",
    title: "Programme de Mentorat Leadership Féminin",
    description:
      "Un accompagnement sur mesure pour les femmes leaders de demain en RDC.",
    tag: "Mentorat",
    tagColor: "card-tag-amber",
    image: "/images/mentoring.png",
    duration: "6 mois",
    spots: "50 places",
    level: "Intermédiaire",
  },
  {
    id: "prog-3",
    title: "Incubateur Social Impact",
    description:
      "Transformez votre projet social en entreprise durable avec notre programme d'incubation.",
    tag: "Incubation",
    tagColor: "card-tag-green",
    image: "/images/workshop.png",
    duration: "4 mois",
    spots: "20 places",
    level: "Avancé",
  },
  {
    id: "prog-4",
    title: "Certification Data Science & IA",
    description:
      "Apprenez les fondamentaux de la data science et de l'intelligence artificielle.",
    tag: "Formation",
    tagColor: "card-tag-purple",
    image: "/images/accelerator.png",
    duration: "8 semaines",
    spots: "40 places",
    level: "Intermédiaire",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto">🎓 Programmes</div>
          <h2 className="section-title mb-4">
            Des programmes <span className="text-primary">sur mesure</span> pour
            vous
          </h2>
          <p className="section-subtitle mx-auto">
            Choisissez parmi nos programmes de formation, mentorat et incubation
            conçus pour accélérer votre développement professionnel.
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex items-center gap-3 justify-center flex-wrap mb-10">
          {["Tous", "Formation", "Mentorat", "Incubation", "Événement"].map(
            (filter, i) => (
              <button
                key={filter}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  i === 0
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-surface text-text-secondary hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="card group cursor-pointer">
              <div className="card-image">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={400}
                  height={250}
                  className="w-full"
                />
                <div className="absolute top-3 left-3">
                  <span className={`card-tag ${program.tagColor}`}>
                    {program.tag}
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="font-bold text-text-primary text-sm leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                  {program.title}
                </h3>
                <p className="text-xs text-text-secondary mb-4 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {program.duration}
                  </span>
                  <span className="text-border">•</span>
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {program.spots}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href="#"
                    className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    En savoir plus
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="text-center mt-10">
          <a href="#" className="btn btn-outline">
            Voir tous les programmes
          </a>
        </div>
      </div>
    </section>
  );
}
