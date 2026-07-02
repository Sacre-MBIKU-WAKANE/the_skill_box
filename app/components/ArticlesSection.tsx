import Image from "next/image";

const articles = [
  {
    id: "art-1",
    title: "Comment la tech transforme l'éducation en RDC",
    excerpt:
      "Découvrez comment les nouvelles technologies révolutionnent l'apprentissage dans les universités congolaises.",
    category: "Technologie",
    date: "28 Juin 2026",
    readTime: "5 min",
    image: "/images/bootcamp.png",
    featured: true,
  },
  {
    id: "art-2",
    title: "10 bourses internationales à ne pas manquer en 2026",
    excerpt:
      "La liste complète des bourses ouvertes aux étudiants congolais cette année.",
    category: "Bourses",
    date: "25 Juin 2026",
    readTime: "8 min",
    image: "/images/community-event.png",
    featured: false,
  },
  {
    id: "art-3",
    title: "Portrait : Marie Kasongo, de Lubumbashi à la Silicon Valley",
    excerpt:
      "Le parcours inspirant d'une jeune congolaise devenue ingénieure chez Google.",
    category: "Inspiration",
    date: "22 Juin 2026",
    readTime: "6 min",
    image: "/images/mentoring.png",
    featured: false,
  },
  {
    id: "art-4",
    title: "Les compétences les plus demandées sur le marché africain",
    excerpt:
      "Analyse des tendances du marché de l'emploi en Afrique pour les jeunes diplômés.",
    category: "Carrière",
    date: "20 Juin 2026",
    readTime: "4 min",
    image: "/images/workshop.png",
    featured: false,
  },
];

export default function ArticlesSection() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="ressources" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label">📰 Actualités</div>
            <h2 className="section-title">
              Restez <span className="text-primary">informé</span>
            </h2>
          </div>
          <a href="#" className="btn btn-ghost text-sm">
            Toutes les actualités
            <svg
              width="14"
              height="14"
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          <div className="card group cursor-pointer lg:row-span-2">
            <div className="card-image aspect-video lg:aspect-auto lg:h-64">
              <Image
                src={featured.image}
                alt={featured.title}
                width={600}
                height={350}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="card-tag card-tag-purple">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="card-body flex-1">
              <h3 className="font-bold text-text-primary text-xl leading-snug mb-3">
                {featured.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-text-muted mt-auto">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime} de lecture</span>
              </div>
            </div>
          </div>

          {/* Other Articles */}
          <div className="flex flex-col gap-4">
            {rest.map((article) => (
              <div
                key={article.id}
                className="card group cursor-pointer flex flex-row overflow-hidden"
              >
                <div className="relative w-32 sm:w-40 flex-shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="card-body flex-1 flex flex-col justify-center py-4">
                  <span className="card-tag card-tag-purple text-xs w-fit mb-2">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-text-primary text-sm leading-snug line-clamp-2 mb-1">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
