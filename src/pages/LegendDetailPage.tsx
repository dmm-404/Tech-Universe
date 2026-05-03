import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LegendDetailPage() {
  const { legend } = useParams();

  // Mock data for Alan Turing
  const data = {
    name: "Alan Turing",
    initials: "AT",
    role: "Mathematician & Computer Scientist",
    years: "1912–1954",
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    bio: [
      "Alan Mathison Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer.",
      "During the Second World War, Turing worked for the Government Code and Cypher School at Bletchley Park, Britain's codebreaking centre. For a time he led Hut 8, the section that was responsible for German naval cryptanalysis. Here, he devised a number of techniques for speeding up the breaking of German ciphers, including improvements to the pre-war Polish bombe method, an electromechanical machine that could find settings for the Enigma machine.",
      "Turing played a crucial role in cracking intercepted coded messages that enabled the Allies to defeat the Axis powers in many crucial engagements, including the Battle of the Atlantic, and in so doing helped win the war."
    ],
    contributions: [
      { title: "The Turing Machine", desc: "A mathematical model of computation that defines an abstract machine." },
      { title: "Breaking Enigma", desc: "Devised techniques for decoding German naval cryptanalysis." },
      { title: "The Turing Test", desc: "A method of inquiry in artificial intelligence for determining whether or not a computer is capable of thinking like a human being." }
    ],
    tags: ["Computability", "Cryptography", "Artificial Intelligence"]
  };

  return (
    <div className="container-custom py-12 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-12">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <Link to="/legends" className="hover:text-brand-accent transition-colors">Legends</Link>
        <span>/</span>
        <span className="text-brand-text">Alan Turing</span>
      </nav>

      <Link to="/legends" className="inline-flex items-center gap-2 text-sm text-brand-accent mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" />
        Back to all Legends
      </Link>

      <header className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-20 h-20 rounded-full bg-[#1e3a5f] flex items-center justify-center text-brand-accent text-2xl font-medium shrink-0">
          {data.initials}
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl text-brand-text mb-2">{data.name}</h1>
          <p className="text-lg text-brand-muted">{data.role} &middot; {data.years}</p>
        </div>
      </header>

      <div className="space-y-16">
        <blockquote className="border-l-4 border-brand-accent pl-6 py-2">
          <p className="text-xl text-brand-muted italic leading-relaxed">
            "{data.quote}"
          </p>
        </blockquote>

        <section>
          <h2 className="text-2xl text-brand-text mb-8">Biography</h2>
          <div className="space-y-6 text-brand-muted leading-relaxed text-lg">
            {data.bio.map((p, idx) => <p key={idx}>{p}</p>)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-8">Key Contributions</h2>
          <div className="space-y-4">
            {data.contributions.map((c, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border rounded-lg p-6">
                <h3 className="text-lg font-medium text-brand-text">{c.title}</h3>
                <p className="mt-2 text-brand-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-brand-text mb-8">Technologies Influenced</h2>
          <div className="flex flex-wrap gap-2">
            {data.tags.map(tag => (
              <span key={tag} className="bg-[#1e3a5f] text-brand-accent text-sm px-4 py-1.5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-20 pt-10 border-t border-brand-border/50">
        <Link to="/legends" className="inline-flex items-center gap-2 text-sm text-brand-accent hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to all Legends
        </Link>
      </div>
    </div>
  );
}
