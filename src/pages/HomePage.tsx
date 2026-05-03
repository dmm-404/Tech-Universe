import { motion } from "motion/react";
import { 
  Search, 
  Hexagon,
  ArrowRight,
  Cpu,
  Code2,
  Globe,
  Lock,
  Bot,
  Cloud,
  BarChart3
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// --- Components ---

const Hero = () => (
  <section className="pt-16 md:pt-24 pb-12 text-center max-w-2xl mx-auto px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-5xl tracking-tight leading-tight"
    >
      Explore the Tech Universe
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mt-4 text-base md:text-lg text-brand-muted"
    >
      Every CS topic explained from origin to today. The story, how it works, and how to learn it.
    </motion.p>
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-10 flex flex-col sm:flex-row justify-center gap-3"
    >
      <Link to="/branches" className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg font-medium transition-colors">
        Start Exploring
      </Link>
      <div className="tooltip-trigger">
        <button className="w-full px-6 py-2.5 bg-transparent border border-brand-border hover:border-brand-muted text-brand-muted hover:text-brand-text rounded-lg font-medium transition-all">
          View Timeline
        </button>
        <span className="tooltip">Coming soon</span>
      </div>
    </motion.div>
  </section>
);

const topicsList = [
  { name: "Networking Fundamentals", category: "Computer Networks", path: "/topics/networking-fundamentals" },
  { name: "Cryptography Basics", category: "Cybersecurity", path: "/topics/cryptography-basics" },
  { name: "Linux Basics", category: "Operating Systems", path: "/topics/linux-basics" },
  { name: "How the Internet Works", category: "Computer Networks", path: "/topics/how-the-internet-works" },
  { name: "OWASP Top 10", category: "Cybersecurity", path: "/topics/owasp-top-10" },
  { name: "Firewalls & IDS", category: "Cybersecurity", path: "/topics/firewalls-ids" },
  { name: "Docker", category: "Cloud & DevOps", path: "/topics/docker" },
  { name: "Kubernetes", category: "Cloud & DevOps", path: "/topics/kubernetes" },
  { name: "Python Basics", category: "Programming", path: "/topics/python-basics" },
  { name: "Git", category: "Dev Tools", path: "/topics/git" },
  { name: "TCP/IP", category: "Computer Networks", path: "/topics/tcp-ip" },
  { name: "OSI Model", category: "Computer Networks", path: "/topics/osi-model" },
  { name: "Penetration Testing", category: "Cybersecurity", path: "/topics/penetration-testing" },
  { name: "Malware Analysis", category: "Cybersecurity", path: "/topics/malware-analysis" },
  { name: "Alan Turing", category: "Legends", path: "/legends/alan-turing" },
  { name: "Linus Torvalds", category: "Legends", path: "/legends/linus-torvalds" },
  { name: "Tim Berners-Lee", category: "Legends", path: "/legends/tim-berners-lee" },
];

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredTopics = topicsList
    .filter(t => t.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tags = [
    { label: "Networking", path: "/topics/networking-fundamentals" },
    { label: "Linux", path: "/topics/linux-basics" },
    { label: "Cryptography", path: "/topics/cryptography-basics" },
    { label: "Cybersecurity", path: "/branches/cybersecurity" },
    { label: "Git", path: "/topics/git" },
    { label: "Python", path: "/topics/python-basics" },
    { label: "Kubernetes", path: "/topics/kubernetes" },
    { label: "AI", path: "/branches/ai-ml" }
  ];

  return (
    <section className="mt-12 container-custom">
      <div className="max-w-xl mx-auto relative group" ref={searchRef}>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
          <input 
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search any topic... e.g. Python, Linux, Kubernetes"
            className="w-full h-11 bg-brand-surface border border-brand-border rounded-lg pl-11 pr-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        {/* Dropdown */}
        {isOpen && query.length > 0 && (
          <div className="absolute top-full left-0 w-full mt-2 bg-brand-surface border border-brand-border rounded-lg overflow-hidden shadow-xl z-50">
            {filteredTopics.length > 0 ? (
              filteredTopics.map(topic => (
                <button
                  key={topic.name}
                  onClick={() => {
                    navigate(topic.path);
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-brand-bg transition-colors text-left"
                >
                  <span className="text-sm text-brand-text font-medium">{topic.name}</span>
                  <span className="text-[11px] text-brand-muted uppercase tracking-wider">{topic.category}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-brand-muted">No topics found</div>
            )}
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-brand-muted mr-1">Popular:</span>
        {tags.map(tag => (
          <Link 
            key={tag.label}
            to={tag.path}
            className="text-xs text-brand-muted border border-brand-border rounded-md px-2.5 py-1 hover:border-brand-accent hover:text-brand-accent transition-all whitespace-nowrap"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

const Card = ({ icon: Icon, title, description, badge, to }: any) => (
  <motion.div
    whileHover={{ borderColor: "var(--color-brand-accent)" }}
    className="group bg-brand-surface border border-brand-border rounded-xl transition-colors cursor-pointer"
  >
    <Link to={to} className="flex flex-col h-full p-6">
      <div className="flex justify-between items-start">
        <div className="p-2 bg-brand-bg border border-brand-border rounded-lg group-hover:border-brand-accent transition-colors">
          <Icon className="w-6 h-6 text-brand-accent" />
        </div>
        {badge && (
          <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-brand-success-bg text-brand-success">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-medium group-hover:text-brand-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-brand-muted line-clamp-2">
        {description}
      </p>
      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
        Explore <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  </motion.div>
);

const BranchesGrid = () => {
  const branches = [
    { icon: Cpu, title: "Hardware & Electronics", description: "From transistors to CPUs and architecture.", to: "/branches/hardware" },
    { icon: Code2, title: "Programming Languages", description: "C to Python to Rust and functional paradigms.", to: "/branches/programming" },
    { icon: Globe, title: "Computer Networks", description: "How data moves across the world via TCP/IP.", to: "/branches/networks" },
    { icon: Lock, title: "Cybersecurity", description: "Threats, defenses, and the math of cryptography.", to: "/branches/cybersecurity" },
    { icon: Bot, title: "AI & Machine Learning", description: "From Perceptrons to Transformers and LLMs.", to: "/branches/ai" },
    { icon: Cloud, title: "Cloud & DevOps", description: "Infrastructure, containers, and hyper-scale.", to: "/branches/cloud" },
  ];

  return (
    <section className="py-12 md:py-20 container-custom">
      <div className="space-y-2">
        <span className="text-[11px] font-medium text-brand-muted uppercase tracking-widest">Explore by Branch</span>
        <h2 className="text-2xl md:text-3xl">Every field of Computer Science</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {branches.map(branch => (
          <Card key={branch.title} {...branch} />
        ))}
      </div>
    </section>
  );
};

const CareersGrid = () => {
  const careers = [
    { icon: Lock, title: "Cybersecurity Analyst", description: "Protect systems, detect threats, and respond to cyber attacks.", badge: "High Demand", to: "/careers/cybersecurity-analyst" },
    { icon: Cloud, title: "Cloud/DevOps Engineer", description: "Build and scale automated cloud infrastructure.", badge: "Fast Growth", to: "/careers/cloud-devops-engineer" },
    { icon: Bot, title: "AI/ML Engineer", description: "Build intelligent systems and neural network models.", badge: "Highest Entry", to: "/careers/ai-ml-engineer" },
    { icon: BarChart3, title: "Data Scientist", description: "Extract critical insights from complex data streams.", badge: "Rising", to: "/careers/data-scientist" },
  ];

  return (
    <section className="pb-24 md:pb-32 container-custom">
      <div className="space-y-2">
        <span className="text-[11px] font-medium text-brand-muted uppercase tracking-widest">Career Paths</span>
        <h2 className="text-2xl md:text-3xl">Pick your direction</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {careers.map(career => (
          <Card key={career.title} {...career} />
        ))}
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchSection />
      
      <div className="container-custom py-12">
        <div className="h-px bg-brand-border w-full opacity-50" />
      </div>

      <BranchesGrid />
      
      <div className="container-custom py-8">
        <div className="h-px bg-brand-border w-full opacity-50" />
      </div>

      <CareersGrid />
    </>
  );
}
