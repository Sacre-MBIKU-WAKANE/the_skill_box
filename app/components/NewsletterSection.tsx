"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-label mx-auto">📬 Newsletter</div>
          <h2 className="section-title mb-4">
            Ne manquez <span className="text-primary">aucune opportunité</span>
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Recevez chaque semaine les meilleures opportunités de formation, de
            bourses et d&apos;emploi directement dans votre boîte mail.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1 w-full">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-border bg-surface text-text-primary text-sm font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-sm py-4 px-8 w-full sm:w-auto whitespace-nowrap"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Inscrit !
                </span>
              ) : (
                "S'abonner"
              )}
            </button>
          </form>

          <p className="text-xs text-text-muted mt-4">
            🔒 Pas de spam. Désabonnement en un clic.
          </p>
        </div>
      </div>
    </section>
  );
}
