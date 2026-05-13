import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Contribution {
  title: string;
  desc: string;
}

interface LegendData {
  name: string;
  initials: string;
  role: string;
  years: string;
  quote: string;
  bio: string[];
  contributions: Contribution[];
  tags: string[];
}

const legendsData: Record<string, LegendData> = {
  "alan-turing": {
    name: "Alan Turing",
    initials: "AT",
    role: "Mathematician & Computer Scientist",
    years: "1912-1954",
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    bio: [
      "Alan Mathison Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. He was highly influential in the development of theoretical computer science.",
      "During the Second World War, Turing worked for the Government Code and Cypher School at Bletchley Park, where he led Hut 8, the section responsible for German naval cryptanalysis.",
      "Turing played a crucial role in cracking intercepted coded messages that enabled the Allies to defeat the Nazis in many engagements during the war. His Bombe machine helped decode Enigma-encrypted messages."
    ],
    contributions: [
      { title: "The Turing Machine", desc: "A mathematical model of computation that defines an abstract machine which manipulates symbols on a strip of tape according to a table of rules." },
      { title: "Breaking Enigma", desc: "Devised techniques for speeding the breaking of German ciphers during WWII, including the Bombe electromechanical machine." },
      { title: "The Turing Test", desc: "A test of a machine's ability to exhibit intelligent behaviour equivalent to that of a human, foundational to artificial intelligence." }
    ],
    tags: ["Computability", "Cryptography", "Artificial Intelligence", "Mathematics"]
  },
  "linus-torvalds": {
    name: "Linus Torvalds",
    initials: "LT",
    role: "Software Engineer",
    years: "1969-present",
    quote: "Talk is cheap. Show me the code.",
    bio: [
      "Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and principal developer of the Linux kernel, which became the kernel for operating systems such as the Linux operating system.",
      "He began developing Linux in 1991 while studying at the University of Helsinki. What started as a personal project grew into the most widely used operating system kernel in the world, powering everything from smartphones to supercomputers.",
      "Torvalds also created Git in 2005, the distributed version control system now used by virtually every software development team in the world."
    ],
    contributions: [
      { title: "Linux Kernel", desc: "Created the Linux kernel in 1991, which became the foundation of the world's most widely used operating system family." },
      { title: "Git", desc: "Created Git in 2005 as a distributed version control system. It is now the standard for source code management worldwide." },
      { title: "Open Source Culture", desc: "Championed the open source movement through Linux, demonstrating that collaborative, transparent development could produce world-class software." }
    ],
    tags: ["Linux", "Operating Systems", "Git", "Open Source"]
  },
  "tim-berners-lee": {
    name: "Tim Berners-Lee",
    initials: "TB",
    role: "Computer Scientist",
    years: "1955-present",
    quote: "The Web does not just connect machines, it connects people.",
    bio: [
      "Sir Timothy John Berners-Lee is an English computer scientist best known as the inventor of the World Wide Web. He made a proposal for an information management system in March 1989 while working at CERN.",
      "In 1990, he implemented the first successful communication between an HTTP client and server via the internet, and by 1991 the first website was live. Crucially, he chose to make the Web royalty-free, enabling explosive global adoption.",
      "He founded the World Wide Web Consortium (W3C) in 1994 to oversee the continued development of web standards, and has since advocated for net neutrality and an open, accessible internet."
    ],
    contributions: [
      { title: "World Wide Web", desc: "Invented the WWW in 1989 at CERN, creating the system of interlinked hypertext documents that transformed how humanity shares information." },
      { title: "HTTP & HTML", desc: "Designed the foundational protocols and markup language that power every website: HyperText Transfer Protocol and HyperText Markup Language." },
      { title: "W3C", desc: "Founded the World Wide Web Consortium to develop open standards for the web, ensuring it remains open, accessible, and interoperable." }
    ],
    tags: ["World Wide Web", "HTTP", "HTML", "Web Standards"]
  },
  "grace-hopper": {
    name: "Grace Hopper",
    initials: "GH",
    role: "Admiral & Computer Scientist",
    years: "1906-1992",
    quote: "The most dangerous phrase in the language is: We've always done it this way.",
    bio: [
      "Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral. She was a pioneer of computer programming and invented one of the first linkers.",
      "She popularised the idea of machine-independent programming languages, which led to the development of COBOL, one of the first high-level programming languages. Her work made computers accessible to business users who were not mathematicians.",
      "Hopper is credited with popularising the term 'debugging' after a moth was found causing a malfunction in the Harvard Mark II computer in 1947. She served in the Navy until age 79 and was posthumously awarded the Presidential Medal of Freedom."
    ],
    contributions: [
      { title: "First Compiler", desc: "Developed the first compiler for a computer programming language (A-0 System in 1952), translating written mathematical code into machine code." },
      { title: "COBOL", desc: "Led the team that developed COBOL (Common Business-Oriented Language), one of the first high-level programming languages, still in use today." },
      { title: "Debugging", desc: "Popularised the term 'debugging' and championed human-readable programming languages that made software development accessible to non-mathematicians." }
    ],
    tags: ["Compilers", "COBOL", "Programming Languages", "Navy"]
  },
  "dennis-ritchie": {
    name: "Dennis Ritchie",
    initials: "DR",
    role: "Computer Scientist",
    years: "1941-2011",
    quote: "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
    bio: [
      "Dennis MacAlistair Ritchie was an American computer scientist. He created the C programming language and, with long-time colleague Ken Thompson, the Unix operating system and B programming language.",
      "Ritchie and Thompson developed Unix at Bell Labs between 1969 and 1970. The C language, developed between 1969 and 1973, became one of the most widely used programming languages of all time and the foundation for countless others.",
      "His work has had an enormous impact — Linux, macOS, and most of the internet's infrastructure are built on ideas and code that trace back to Ritchie's work. Steve Jobs called him the man who deserves credit for the digital revolution."
    ],
    contributions: [
      { title: "C Programming Language", desc: "Created the C language between 1969-1973, which became the foundation for C++, Java, Python, and virtually every modern programming language." },
      { title: "Unix Operating System", desc: "Co-created Unix with Ken Thompson at Bell Labs, establishing the design philosophy and architecture that influenced all modern operating systems." },
      { title: "The C Book", desc: "Co-authored 'The C Programming Language' with Brian Kernighan, one of the most influential computer science books ever written." }
    ],
    tags: ["C Language", "Unix", "Operating Systems", "Bell Labs"]
  },
  "john-von-neumann": {
    name: "John von Neumann",
    initials: "JN",
    role: "Mathematician",
    years: "1903-1957",
    quote: "If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
    bio: [
      "John von Neumann was a Hungarian-American mathematician and computer scientist who made major contributions to mathematics, physics, economics, computing, and statistics.",
      "He described the von Neumann architecture in 1945 — the design that nearly all modern computers still follow: a processing unit, a control unit, memory, external mass storage, and input/output mechanisms.",
      "Von Neumann also contributed to quantum mechanics, game theory (founding it with Oskar Morgenstern), cellular automata, and the Manhattan Project. He is widely regarded as one of the greatest mathematicians of the 20th century."
    ],
    contributions: [
      { title: "Von Neumann Architecture", desc: "Described the stored-program computer architecture in 1945. The design — CPU, memory, I/O — is the blueprint for virtually all modern computers." },
      { title: "Game Theory", desc: "Co-founded game theory with Oskar Morgenstern, creating a mathematical framework for analysing strategic decision-making used in economics, AI, and more." },
      { title: "Cellular Automata", desc: "Developed the concept of cellular automata, foundational to complexity theory, artificial life, and the study of self-replicating systems." }
    ],
    tags: ["Computer Architecture", "Mathematics", "Game Theory", "Quantum Mechanics"]
  }
};

export default function LegendDetailPage() {
  const { legend } = useParams<{ legend: string }>();
  const data = legend ? legendsData[legend] : undefined;

  if (!data) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-4xl text-brand-text mb-4">Legend Not Found</h1>
        <p className="text-brand-muted mb-8">We couldn't find the legend you're looking for.</p>
        <Link to="/legends" className="text-brand-accent hover:underline">
          Back to all Legends
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-12 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-12">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <Link to="/legends" className="hover:text-brand-accent transition-colors">Legends</Link>
        <span>/</span>
        <span className="text-brand-text">{data.name}</span>
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
          <p className="text-xl text-brand-muted italic leading-relaxed">"{data.quote}"</p>
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
              <div key={idx} className="bg-brand-surface border border-brand-border rounded-lg p-6 hover:border-brand-accent transition-colors">
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

      <div className="mt-20 pt-10 border-t border-brand-border">
        <Link to="/legends" className="inline-flex items-center gap-2 text-sm text-brand-accent hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to all Legends
        </Link>
      </div>
    </div>
  );
}
