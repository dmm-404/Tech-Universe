export default function AboutPage() {
  return (
    <div className="container-custom py-20 max-w-[680px] mx-auto">
      <h1 className="text-4xl text-brand-text mb-12">About Tech Universe</h1>
      
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl text-brand-text mb-4">What this is</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Tech Universe is a comprehensive encyclopedia for Computer Science. Every topic explained from its origin to today — the story behind it, how it works technically, and a structured path to learn it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-4">Why it was built</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Most CS resources either go too deep too fast or stay too shallow. Tech Universe bridges that gap — giving students, developers, and curious minds the full picture of any technology in one place.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-4">Who built it</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Built by Mandar Malkhede, a Computer Science student at Lovely Professional University. GitHub: <a href="https://github.com/mandar" className="text-brand-accent hover:underline">github.com/mandar</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-4">Want to contribute?</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            This is an open project. Topics, corrections, and improvements are welcome via GitHub.
          </p>
        </section>
      </div>
    </div>
  );
}
