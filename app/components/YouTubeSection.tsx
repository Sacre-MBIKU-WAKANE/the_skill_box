import Image from "next/image";

const videos = [
  {
    id: "yt-1",
    title: "Comment j'ai décroché un stage chez Google depuis Kinshasa",
    channel: "Youth Opportunities RDC",
    views: "12K vues",
    duration: "15:23",
    thumbnail: "/images/mentoring.png",
  },
  {
    id: "yt-2",
    title: "La remise des certificats - Promotion 2024",
    channel: "Youth Opportunities RDC",
    views: "8.5K vues",
    duration: "22:10",
    thumbnail: "/images/community-event.png",
  },
  {
    id: "yt-3",
    title: "Workshop: Construire son portfolio tech en 7 jours",
    channel: "Youth Opportunities RDC",
    views: "6.2K vues",
    duration: "45:30",
    thumbnail: "/images/bootcamp.png",
  },
];

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.5 6.19a3 3 0 00-2.11-2.12C19.56 3.5 12 3.5 12 3.5s-7.55 0-9.39.57A3 3 0 00.5 6.19 31.26 31.26 0 000 12a31.26 31.26 0 00.5 5.81 3 3 0 002.11 2.12C4.45 20.5 12 20.5 12 20.5s7.55 0 9.39-.57a3 3 0 002.11-2.12A31.26 31.26 0 0024 12a31.26 31.26 0 00-.5-5.81z" />
                <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="white" />
              </svg>
              YouTube
            </div>
            <h2 className="section-title">
              Plus sur nos plateformes{" "}
              <span className="text-primary">YouTube</span>
            </h2>
          </div>
          <a
            href="#"
            className="btn btn-ghost text-sm"
          >
            Voir la chaîne
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
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="card group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-image">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={250}
                  className="w-full"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--primary)"
                    >
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/75 text-white text-xs font-semibold">
                  {video.duration}
                </div>
              </div>
              <div className="card-body">
                <h3 className="font-bold text-text-primary text-sm leading-snug mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <span>{video.channel}</span>
                  <span>•</span>
                  <span>{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
