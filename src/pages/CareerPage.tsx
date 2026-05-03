import { useParams, Link } from "react-router-dom";
import { Play, Lock, Check, Globe, Cpu, GitBranch, Terminal } from "lucide-react";

export default function CareerPage() {
  const { career } = useParams();

  const roadmapNodes = [
    { id: 1, title: "Computer Networking", status: "completed", desc: "Understanding how data travels through the web." },
    { id: 2, title: "Linux Basics", status: "completed", desc: "Command line, file systems, and server management." },
    { id: 3, title: "How the Internet Works", status: "in-progress", desc: "DNS, HTTP/S, and global traffic routing." },
    { id: 4, title: "Cryptography Basics", status: "locked", desc: "Protocols, encryption standards, and digital signatures." },
    { id: 5, title: "Security Architecture", status: "locked", desc: "Designing robust and resilient digital systems." },
    { id: 6, title: "Identity & Access Management", status: "locked", desc: "IAM frameworks and authorization protocols." },
    { id: 7, title: "Threat Intelligence", status: "locked", desc: "CTI frameworks and proactive threat modeling." },
    { id: 8, title: "Incident Response", status: "locked", desc: "Detecting and responding to security breaches." },
  ];

  const foundations = [
    { icon: Globe, title: "Networking", desc: "Crucial for understanding how attacks traverse systems." },
    { icon: Terminal, title: "Linux", desc: "The primary OS for security tools and server infrastructure." },
    { icon: GitBranch, title: "Git", desc: "Version control for scripts, configs, and documentation." },
    { icon: Cpu, title: "Python", desc: "Automation, scripting, and custom tool development." },
  ];

  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-8">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <span className="text-brand-muted">Career Paths</span>
        <span>/</span>
        <span className="text-brand-text capitalize">{career?.split('-').join(' ')}</span>
      </nav>

      <header className="mb-16">
        <h1 className="text-4xl capitalize">{career?.split('-').join(' ')}</h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl">
          Protect networks, systems, and data from digital attacks.
        </p>
        <div className="mt-6">
          <span className="bg-[#0f2a1a] text-[#22c55e] text-xs font-medium px-3 py-1.5 rounded-full">Very High Demand</span>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Roadmap */}
        <div className="lg:w-[60%]">
          <h2 className="text-2xl mb-10">Learning Roadmap</h2>
          <div className="space-y-0 flex flex-col items-center">
            {roadmapNodes.map((node, idx) => (
              <div key={node.id} className="w-full flex flex-col items-center">
                <div 
                  className={`w-full max-w-lg p-5 rounded-lg border transition-all ${
                    node.status === 'completed' 
                      ? 'bg-brand-accent border-brand-accent text-white' 
                      : node.status === 'in-progress'
                      ? 'bg-brand-surface border-brand-accent text-brand-text shadow-[0_0_15px_rgba(37,99,235,0.1)]'
                      : 'bg-brand-surface border-brand-border text-brand-muted'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-lg font-medium ${node.status === 'completed' ? 'text-white' : 'text-brand-text opacity-90'}`}>
                        {node.title}
                      </h3>
                      <p className={`mt-1 text-sm ${node.status === 'completed' ? 'text-blue-100' : 'text-brand-muted'}`}>
                        {node.desc}
                      </p>
                    </div>
                    {node.status === 'completed' && <Check className="w-5 h-5 text-white" />}
                    {node.status === 'in-progress' && <Play className="w-5 h-5 text-brand-accent fill-brand-accent" />}
                    {node.status === 'locked' && <Lock className="w-5 h-5 opacity-40" />}
                  </div>
                </div>
                
                {idx < roadmapNodes.length - 1 && (
                  <div className="w-px h-8 bg-brand-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[40%] space-y-12">
          <div className="sticky top-20">
            <div className="space-y-4 mb-8">
              <span className="text-[11px] font-medium uppercase tracking-widest text-brand-muted">Shared Foundations</span>
              <p className="text-sm text-brand-muted">
                Learn these first — they appear in every career path.
              </p>
            </div>

            <div className="space-y-4">
              {foundations.map((item) => (
                <div key={item.title} className="bg-brand-surface border border-brand-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-brand-accent" />
                    <h4 className="text-sm font-medium">{item.title}</h4>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
