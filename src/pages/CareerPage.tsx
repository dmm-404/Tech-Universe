import { useParams, Link } from "react-router-dom";
import { Check, Lock, Play, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ============ INTERFACES ============
interface RoadmapNode {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "locked";
  desc: string;
  slug: string;
  row: number; // for graph layout positioning
  col: number; // for graph layout positioning  
  dependencies?: number[]; // IDs of prerequisite nodes
}

interface Foundation {
  title: string;
  desc: string;
}

interface CareerData {
  title: string;
  tagline: string;
  demand: string;
  description: string;
  roadmap: RoadmapNode[];
  foundations: Foundation[];
}

// ============ STATUS CONFIG ============
const statusConfig = {
  completed: {
    icon: Check,
    label: "Completed",
    color: "text-emerald-400",
    bg: "bg-emerald-950/30",
    border: "border-emerald-800/50",
    glow: "shadow-emerald-900/50"
  },
  "in-progress": {
    icon: Play,
    label: "In Progress",
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    border: "border-blue-800/50",
    glow: "shadow-blue-900/50"
  },
  locked: {
    icon: Lock,
    label: "Locked",
    color: "text-brand-muted",
    bg: "bg-brand-background",
    border: "border-brand-border",
    glow: "shadow-brand-border/20"
  }
};

// ============ CAREER DATA ============
const careersData: Record<string, CareerData> = {
  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst",
    tagline: "Protect systems, networks, and data from digital attacks.",
    demand: "Very High Demand",
    description: "Cybersecurity analysts monitor, detect, and respond to security threats. They protect an organisation's infrastructure from breaches, malware, and unauthorised access.",
    roadmap: [
      { id: 1, title: "Computer Networking", status: "completed", desc: "Understanding how data travels through the web.", slug: "networking", row: 0, col: 0, dependencies: [] },
      { id: 2, title: "Linux Basics", status: "completed", desc: "Command line, file systems, and server management.", slug: "linux", row: 0, col: 2, dependencies: [] },
      { id: 3, title: "How the Internet Works", status: "in-progress", desc: "Protocols, DNS, HTTP/HTTPS, and network layers.", slug: "how-internet-works", row: 1, col: 1, dependencies: [1, 2] },
      { id: 4, title: "Cybersecurity Fundamentals", status: "in-progress", desc: "Core principles and threat landscape.", slug: "cybersecurity-fundamentals", row: 2, col: 1, dependencies: [3] },
      { id: 5, title: "Ethical Hacking", status: "locked", desc: "Penetration testing and vulnerability assessment.", slug: "ethical-hacking", row: 3, col: 0, dependencies: [4] },
      { id: 6, title: "Security Operations", status: "locked", desc: "SIEM, incident response, and threat hunting.", slug: "security-operations", row: 3, col: 2, dependencies: [4] }
    ],
    foundations: [
      { title: "Networking", desc: "Crucial for understanding how attacks traverse systems." },
      { title: "Linux", desc: "The primary OS for security tools and server infrastructure." },
      { title: "Git", desc: "Version control for security scripts and documentation." }
    ]
  },
  "cloud-devops-engineer": {
    title: "Cloud DevOps Engineer",
    tagline: "Build, deploy, and maintain scalable cloud infrastructure.",
    demand: "Very High Demand",
    description: "Cloud DevOps engineers automate infrastructure, manage CI/CD pipelines, and ensure reliable deployments across cloud platforms.",
    roadmap: [
      { id: 1, title: "Linux Fundamentals", status: "completed", desc: "Server management and shell scripting.", slug: "linux", row: 0, col: 0, dependencies: [] },
      { id: 2, title: "Networking Basics", status: "completed", desc: "TCP/IP, DNS, load balancing.", slug: "networking", row: 0, col: 2, dependencies: [] },
      { id: 3, title: "Version Control (Git)", status: "in-progress", desc: "Branching, merging, and collaboration workflows.", slug: "git", row: 1, col: 1, dependencies: [1] },
      { id: 4, title: "Docker & Containers", status: "locked", desc: "Containerization and orchestration basics.", slug: "docker", row: 2, col: 0, dependencies: [1, 3] },
      { id: 5, title: "Kubernetes", status: "locked", desc: "Container orchestration at scale.", slug: "kubernetes", row: 3, col: 0, dependencies: [4] },
      { id: 6, title: "CI/CD Pipelines", status: "locked", desc: "Automated testing and deployment.", slug: "cicd", row: 2, col: 2, dependencies: [3] },
      { id: 7, title: "Cloud Platforms (AWS/Azure)", status: "locked", desc: "Infrastructure as code and cloud services.", slug: "cloud-platforms", row: 3, col: 2, dependencies: [6] }
    ],
    foundations: [
      { title: "Linux", desc: "Foundation for server management and automation." },
      { title: "Networking", desc: "Understanding traffic flow and infrastructure." },
      { title: "Python", desc: "Scripting for automation and tooling." }
    ]
  },
  "ai-ml-engineer": {
    title: "AI/ML Engineer",
    tagline: "Build intelligent systems that learn from data.",
    demand: "Extremely High Demand",
    description: "AI/ML engineers design, train, and deploy machine learning models to solve real-world problems through pattern recognition and prediction.",
    roadmap: [
      { id: 1, title: "Python Programming", status: "completed", desc: "Core language for ML and data science.", slug: "python", row: 0, col: 1, dependencies: [] },
      { id: 2, title: "Mathematics for ML", status: "in-progress", desc: "Linear algebra, calculus, and statistics.", slug: "mathematics", row: 1, col: 0, dependencies: [1] },
      { id: 3, title: "Data Structures & Algorithms", status: "in-progress", desc: "Efficient data manipulation and problem-solving.", slug: "dsa", row: 1, col: 2, dependencies: [1] },
      { id: 4, title: "Machine Learning Fundamentals", status: "locked", desc: "Supervised and unsupervised learning basics.", slug: "ml-fundamentals", row: 2, col: 1, dependencies: [2, 3] },
      { id: 5, title: "Deep Learning", status: "locked", desc: "Neural networks and advanced architectures.", slug: "deep-learning", row: 3, col: 0, dependencies: [4] },
      { id: 6, title: "MLOps & Deployment", status: "locked", desc: "Model deployment and monitoring in production.", slug: "mlops", row: 3, col: 2, dependencies: [4] }
    ],
    foundations: [
      { title: "Python", desc: "The lingua franca of machine learning." },
      { title: "Mathematics", desc: "Essential for understanding ML algorithms." },
      { title: "Git", desc: "Version control for ML experiments." }
    ]
  },
  "data-scientist": {
    title: "Data Scientist",
    tagline: "Extract insights and drive decisions through data analysis.",
    demand: "Very High Demand",
    description: "Data scientists analyze complex datasets, build predictive models, and communicate findings to stakeholders through visualization and storytelling.",
    roadmap: [
      { id: 1, title: "Python & SQL", status: "completed", desc: "Languages for data manipulation and queries.", slug: "python", row: 0, col: 1, dependencies: [] },
      { id: 2, title: "Statistics & Probability", status: "completed", desc: "Foundation for data analysis.", slug: "statistics", row: 1, col: 0, dependencies: [1] },
      { id: 3, title: "Data Wrangling", status: "in-progress", desc: "Cleaning and transforming raw data.", slug: "data-wrangling", row: 1, col: 2, dependencies: [1] },
      { id: 4, title: "Data Visualization", status: "locked", desc: "Communicating insights through charts and dashboards.", slug: "data-viz", row: 2, col: 1, dependencies: [3] },
      { id: 5, title: "Machine Learning", status: "locked", desc: "Building predictive models.", slug: "ml", row: 3, col: 0, dependencies: [2, 4] },
      { id: 6, title: "Big Data Tools", status: "locked", desc: "Spark, Hadoop, and distributed computing.", slug: "big-data", row: 3, col: 2, dependencies: [4] }
    ],
    foundations: [
      { title: "Python", desc: "Primary language for data analysis." },
      { title: "SQL", desc: "Querying and managing databases." },
      { title: "Statistics", desc: "Mathematical foundation for insights." }
    ]
  }
};

// ============ ROADMAP GRAPH COMPONENT ============
function RoadmapGraph({ nodes }: { nodes: RoadmapNode[] }) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Calculate grid dimensions
  const maxRow = Math.max(...nodes.map(n => n.row));
  const maxCol = Math.max(...nodes.map(n => n.col));

  return (
    <div className="relative w-full overflow-x-auto py-12">
      <div 
        className="relative mx-auto"
        style={{
          minWidth: `${(maxCol + 1) * 320}px`,
          minHeight: `${(maxRow + 1) * 200}px`
        }}
      >
        {/* Connection Lines */}
        <svg 
          className="absolute inset-0 pointer-events-none" 
          style={{ width: '100%', height: '100%' }}
        >
          {nodes.map(node => 
            node.dependencies?.map(depId => {
              const depNode = nodes.find(n => n.id === depId);
              if (!depNode) return null;

              const x1 = depNode.col * 320 + 140;
              const y1 = depNode.row * 200 + 80;
              const x2 = node.col * 320 + 140;
              const y2 = node.row * 200 + 80;

              const isHighlighted = hoveredNode === node.id || hoveredNode === depId;

              return (
                <motion.line
                  key={`${node.id}-${depId}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isHighlighted ? "#60a5fa" : "#1e293b"}
                  strokeWidth={isHighlighted ? 2 : 1}
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  opacity={isHighlighted ? 0.8 : 0.3}
                />
              );
            })
          )}
        </svg>

        {/* Nodes */}
        {nodes.map((node, idx) => {
          const cfg = statusConfig[node.status];
          const Icon = cfg.icon;

          return (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.col * 320}px`,
                top: `${node.row * 200}px`,
                width: '280px'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div 
                className={`relative p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  cfg.bg
                } ${cfg.border} ${
                  hoveredNode === node.id ? 'scale-105 shadow-2xl ' + cfg.glow : 'shadow-lg'
                }`}
              >
                {/* Status Icon */}
                <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full border-2 ${cfg.border} ${cfg.bg} flex items-center justify-center backdrop-blur-md`}>
                  <Icon className={`w-5 h-5 ${cfg.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-brand-text font-semibold text-lg mb-2 pr-6">
                  {node.title}
                </h3>
                <p className="text-brand-muted text-sm mb-3 leading-relaxed">
                  {node.desc}
                </p>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${cfg.color}`}>
                    {cfg.label}
                  </span>
                  {node.status !== "locked" && (
                    <Link 
                      to={`/topics/${node.slug}`}
                      className="text-xs text-brand-accent hover:text-blue-400 transition-colors flex items-center gap-1 group"
                    >
                      Explore
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ============ MAIN COMPONENT ============
export default function CareerPage() {
  const { career } = useParams<{ career: string }>();
  const data = career ? careersData[career] : undefined;

  if (!data) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl text-brand-text mb-4">Career Not Found</h1>
        <Link to="/careers" className="text-brand-accent hover:underline">
          Browse all careers →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Breadcrumb */}
      <div className="border-b border-brand-border bg-brand-surface/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-brand-muted">
            <Link to="/" className="hover:text-brand-text transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-text">{data.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
            {data.demand}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-brand-muted max-w-3xl">
            {data.tagline}
          </p>
          <p className="text-brand-muted mt-4 max-w-3xl leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Interactive Roadmap Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-brand-text">
              Learning Roadmap
            </h2>
            <span className="text-sm text-brand-muted">
              {data.roadmap.filter(n => n.status === 'completed').length} / {data.roadmap.length} completed
            </span>
          </div>

          <div className="bg-brand-surface/30 rounded-2xl border border-brand-border p-8 backdrop-blur-sm">
            <RoadmapGraph nodes={data.roadmap} />
          </div>
        </motion.div>

        {/* Foundations */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-text mb-6">
            Shared Foundations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.foundations.map((foundation, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-lg border border-brand-border bg-brand-surface/50 backdrop-blur-sm hover:border-brand-muted transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
              >
                <h3 className="text-brand-text font-semibold text-lg mb-2">
                  {foundation.title}
                </h3>
                <p className="text-brand-muted text-sm">
                  {foundation.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
