import Image from "next/image";

const events = [
  {
    id: "evt-1",
    title: "Hackathon IA pour le Développement",
    description:
      "48h pour créer des solutions IA répondant aux défis du développement en RDC.",
    date: { day: "15", month: "Juil" },
    location: "Kinshasa, RDC",
    type: "Hackathon",
    image: "/images/bootcamp.png",
    attendees: 150,
    price: "Gratuit",
  },
  {
    id: "evt-2",
    title: "Conférence Women in Tech Kinshasa",
    description:
      "Une journée dédiée aux femmes dans la technologie avec des speakers internationaux.",
    date: { day: "22", month: "Juil" },
    location: "Lubumbashi, RDC",
    type: "Conférence",
    image: "/images/workshop.png",
    attendees: 300,
    price: "10$",
  },
  {
    id: "evt-3",
    title: "Startup Weekend Goma",
    description:
      "Un weekend pour valider votre idée de startup et pitcher devant des investisseurs.",
    date: { day: "05", month: "Août" },
    location: "Goma, RDC",
    type: "Startup",
    image: "/images/community-event.png",
    attendees: 80,
    price: "5$",
  },
];

export default function EventsSection() {
  return (
    <section id="evenements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label">📅 Événements</div>
            <h2 className="section-title">
              Événements <span className="text-primary">à venir</span>
            </h2>
          </div>
          <a href="#" className="btn btn-ghost text-sm">
            Tous les événements
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="card group cursor-pointer">
              <div className="card-image">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={250}
                  className="w-full"
                />
                {/* Date badge */}
                <div className="absolute top-3 left-3 bg-white rounded-xl p-2 text-center shadow-lg min-w-[56px]">
                  <div className="text-xl font-extrabold text-primary leading-none">
                    {event.date.day}
                  </div>
                  <div className="text-xs font-semibold text-text-muted uppercase">
                    {event.date.month}
                  </div>
                </div>
                {/* Price badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`card-tag ${
                      event.price === "Gratuit"
                        ? "card-tag-green"
                        : "card-tag-amber"
                    }`}
                  >
                    {event.price}
                  </span>
                </div>
              </div>
              <div className="card-body">
                <span className="card-tag card-tag-purple text-xs mb-2">
                  {event.type}
                </span>
                <h3 className="font-bold text-text-primary text-sm leading-snug mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-text-secondary mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
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
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    {event.attendees}+ inscrits
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
