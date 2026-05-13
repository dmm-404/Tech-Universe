import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="container-custom py-20 max-w-[680px] mx-auto">
      <h1 className="text-4xl text-brand-text mb-12">About Tech Universe</h1>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl text-brand-text mb-4">What this is</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Tech Universe is a comprehensive encyclopedia for Computer Science. Every topic
            explained from its origin to today — the story behind it, how it works technically,
            and a structured path to learn it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-4">Why it was built</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Most CS resources either go too deep too fast or stay too shallow. Tech Universe
            bridges that gap — giving students, developers, and curious minds the full picture
            of any technology in one place. No scattered tabs. No dry documentation. Just clear,
            structured knowledge from origin to present.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-4">Who built it</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Built by <strong className="text-brand-text">Mandar Malkhede</strong>, a Computer Science
            student at Lovely Professional University (LPU). First-year CSE, building in public.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/dmm-404/Tech-Universe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-accent hover:underline text-sm"
            >
              github.com/dmm-404/Tech-Universe
            </a>
            <a
              href="https://github.com/dmm-404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent text-sm transition-colors"
            >
              github.com/dmm-404
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-4">Want to contribute?</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            This is an open project. Topics, corrections, and improvements are welcome via GitHub.
            If you find an error or want to add a topic, open an issue or pull request.
          </p>
          <a
            href="https://github.com/dmm-404/Tech-Universe/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-2.5 border border-brand-border text-brand-text text-sm rounded hover:border-brand-accent hover:text-brand-accent transition-colors"
          >
            Open an issue on GitHub
          </a>
        </section>

        <section className="border-t border-brand-border pt-10">
          <p className="text-brand-muted text-sm">
            Built with React, TypeScript, Vite, and Tailwind CSS.{" "}
            <Link to="/branches" className="text-brand-accent hover:underline">
              Start exploring
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
