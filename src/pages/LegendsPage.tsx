import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function LegendsPage() {
  const legends = [
    { id: "alan-turing", initials: "AT", name: "Alan Turing", role: "Mathematician & Computer Scientist", contribution: "Father of modern computing and AI" },
    { id: "linus-torvalds", initials: "LT", name: "Linus Torvalds", role: "Software Engineer", contribution: "Created Linux kernel and Git" },
    { id: "tim-berners-lee", initials: "TB", name: "Tim Berners-Lee", role: "Computer Scientist", contribution: "Invented the World Wide Web" },
    { id: "grace-hopper", initials: "GH", name: "Grace Hopper", role: "Admiral & Computer Scientist", contribution: "Built the first compiler" },
    { id: "dennis-ritchie", initials: "DN", name: "Dennis Ritchie", role: "Computer Scientist", contribution: "Created C and co-created Unix" },
    { id: "john-von-neumann", initials: "JN", name: "John von Neumann", role: "Mathematician", contribution: "Designed the von Neumann architecture" },
  ];

  return (
    <div className="container-custom py-20 text-center">
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl tracking-tight">The Legends</h1>
        <p className="mt-4 text-lg text-brand-muted">
          The people who built the technology you use every day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {legends.map((legend) => (
          <motion.div
            key={legend.id}
            whileHover={{ borderColor: "var(--color-brand-accent)" }}
            className="bg-brand-surface border border-brand-border rounded-xl p-8 flex flex-col items-center transition-all cursor-pointer group"
          >
            <Link to={`/legends/${legend.id}`} className="flex flex-col items-center w-full">
              <div className="w-16 h-16 rounded-full bg-[#1e3a5f] flex items-center justify-center text-brand-accent text-xl font-medium">
                {legend.initials}
              </div>
              <h3 className="mt-6 text-lg font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                {legend.name}
              </h3>
              <p className="mt-1 text-sm text-brand-muted">{legend.role}</p>
              <p className="mt-4 text-xs text-brand-muted leading-relaxed max-w-[200px]">
                {legend.contribution}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand-accent">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
