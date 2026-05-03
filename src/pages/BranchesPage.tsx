import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Code2, 
  Globe, 
  Lock, 
  Bot, 
  Cloud,
  ArrowRight
} from "lucide-react";

const BranchCard = ({ icon: Icon, title, description, topics, tags, to }: any) => (
  <motion.div
    whileHover={{ borderColor: "var(--color-brand-accent)" }}
    className="bg-brand-surface border border-brand-border rounded-lg p-6 flex flex-col transition-all cursor-pointer group"
  >
    <Link to={to} className="flex flex-col h-full">
      <div className="flex justify-between items-start">
        <div className="p-2.5 bg-brand-bg border border-brand-border rounded-lg text-brand-accent">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-xs text-brand-muted border border-brand-border px-2 py-1 rounded whitespace-nowrap">
          {topics}
        </span>
      </div>
      
      <h3 className="mt-6 text-xl font-medium text-brand-text group-hover:text-brand-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-brand-muted text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span 
            key={tag} 
            className="text-[11px] font-medium bg-[#1e3a5f] text-brand-accent px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand-accent">
        Explore <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  </motion.div>
);

export default function BranchesPage() {
  const branches = [
    {
      icon: Cpu,
      title: "Hardware & Electronics",
      description: "Physical components, architecture, and embedded systems.",
      topics: "23 topics",
      tags: ["Logic Gates", "ARM", "FPGA", "Transistors"],
      to: "/branches/hardware"
    },
    {
      icon: Code2,
      title: "Programming Languages",
      description: "From C to Python to Rust — syntax, paradigms, and ecosystems.",
      topics: "31 topics",
      tags: ["Python", "Rust", "JavaScript", "C++"],
      to: "/branches/programming"
    },
    {
      icon: Globe,
      title: "Computer Networks",
      description: "How data moves across the world.",
      topics: "18 topics",
      tags: ["TCP/IP", "DNS", "HTTP", "OSI Model"],
      to: "/branches/networks"
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Threats, defenses, and cryptography.",
      topics: "22 topics",
      tags: ["AES", "OWASP", "Pen Testing", "Firewalls"],
      to: "/branches/cybersecurity"
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      description: "From Perceptrons to LLMs.",
      topics: "27 topics",
      tags: ["Neural Networks", "Transformers", "RAG", "MLOps"],
      to: "/branches/ai"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure, containers, and scale.",
      topics: "19 topics",
      tags: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
      to: "/branches/cloud"
    }
  ];

  return (
    <div className="container-custom py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl tracking-tight">Explore by Branch</h1>
        <p className="mt-4 text-lg text-brand-muted">
          Every field of Computer Science — pick where to start.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {branches.map(branch => (
          <BranchCard key={branch.title} {...branch} />
        ))}
      </div>
    </div>
  );
}
